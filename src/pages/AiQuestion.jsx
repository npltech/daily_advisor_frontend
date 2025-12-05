import React, { useEffect, useState } from "react";
import creategoal from "../assets/images/creategoal.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { showLoader, hideLoader } from "../store/slices/loaderSlice";
import { lastConversation } from "../apis/conversationApi";
import {
  getPreviousQuestions,
  getQuestionsByGoal,
  submitMultipleQuestions,
  updateMultipleQuestions,
} from "../apis/questionApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loginUser } from "../store/slices/authSlice";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";

const AiQuestion = () => {
  const [searchParams] = useSearchParams();
  const goalid = searchParams.get("goalid");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    challenges: "",
    opportunities: "",
    marketingChannels: {
      socialMedia: false,
      emailMarketing: false,
      paidAds: false,
      seoWebsite: false,
    },
    businessDescription: "",
  });
  const [conversation, setConversation] = useState(null);
  const [goNext, setGoNext] = useState(false);
  const [questionForm, setQuestionForm] = useState({});
  const [setupCompleted, setSetupCompleted] = useState(false);
  const userToken = useSelector((state) => state.auth.token);

  console.log(goalid);

  useEffect(() => {
    dispatch(showLoader());
    const getQuestions = () => {
      if(goalid){
        fetchQuestionsByGoalId();
      }else{
        fetchLastConversation();
      }      
    };
    getQuestions();
  }, []);

  useEffect(()=>{
    if(userToken){
      const decoded = jwtDecode(userToken);
      setSetupCompleted(decoded?.setup_completed);
    }
  }, [userToken])

  const fetchLastConversation = async () => {
    await lastConversation()
      .then((res) => {
        if (res.last_primary_questions.length > 0) {
          createFormData(res.last_primary_questions);
        }
        console.log(res);
        setConversation(res);
        dispatch(hideLoader());
      })
      .catch(() => {})
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const fetchQuestionsByGoalId = async() =>{
    await getQuestionsByGoal(goalid)
      .then((res) => {
        createFormData(res.questions);
        setConversation((prev) => ({
          ...prev,
          last_primary_questions: res.questions,
        }));
      })
      .catch(() => {})
      .finally(() => {
        dispatch(hideLoader());
      });
  }

  const createFormData = (data) => {
    const form_data = {};

    data.forEach((value) => {
      if (value.answer) {
        form_data[value.id] =
          value.type === "multiselect" ? value.answer.split(",") : value.answer;
      } else {
        form_data[value.id] = value.type === "multiselect" ? [] : "";
      }
    });
    console.log("form data", form_data);
    setQuestionForm(form_data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setQuestionForm({ ...questionForm, [name]: value });    
  };

  const handleMultiOptions = (questionId, option) => {
    const currentOptions = questionForm[questionId] || [];
    let updatedOptions = [];
    if (currentOptions.includes(option)) {
      updatedOptions = currentOptions.filter((opt) => opt !== option);
    } else {
      updatedOptions = [...currentOptions, option];
    }
    setQuestionForm({
      ...questionForm,
      [questionId]: updatedOptions,
    });    
  };

  useEffect(()=>{
    let nextStep = true;
    for(let q in questionForm){
      if(Array.isArray(questionForm[q])){        
        questionForm[q].length?'':nextStep=false;
      }else{
        questionForm[q]?'':nextStep=false;
      }      
    }
    
    setGoNext(nextStep);
  }, [questionForm])  

  // const handleMarketingCard = (key, value) => {
  //   setFormData({
  //     ...formData,
  //     marketingChannels: {
  //       ...formData.marketingChannels,
  //       [key]: !formData.marketingChannels[key],
  //     },
  //   });
  // };

  const nextQuestions = async () => {
    let answers = [];

    for (const key in questionForm) {
      if (Array.isArray(questionForm[key])) {
        answers.push({
          questionId: parseInt(key),
          answer: questionForm[key].join(","),
        });
      } else {
        answers.push({ questionId: parseInt(key), answer: questionForm[key] });
      }
    }

    let postdata = {
      answers,
    };
    console.log("post data", postdata);

    dispatch(showLoader());
    await updateMultipleQuestions(postdata)
      .then((res) => {
        console.log("res", res);
        createFormData(res.newQuestions);
        setConversation((prev) => ({
          ...prev,
          last_primary_questions: res.newQuestions,
        }));
      })
      .catch((err) => {        
        Swal.fire({
          icon: "error",
          title:
            err?.response?.data?.llmResponse?.details?.message || err?.response?.data?.llmResponse?.message ||
            err?.message ||
            "Something went wrong!!",
          text: "",
          // confirmButtonColor: "#3085d6",
          timer: 4000,
          timerProgressBar: true,
        });
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const previousStep = async ()=>{
    console.log(conversation);
    if(conversation?.last_primary_questions.length){
      const setNumber = conversation?.last_primary_questions[0].set_number-1;
      console.log(setNumber);
      const data = {
        goalId: conversation?.last_primary_questions[0].goal_id,
        setNumber: setNumber
      }
      dispatch(showLoader());
      await getPreviousQuestions(data)
      .then(res=>{
        console.log(res)
        createFormData(res.questions);
        setConversation((prev) => ({
          ...prev,
          last_primary_questions: res.questions,
        }));
      })
      .catch(err=>{
        Swal.fire({
          icon: "error",
          title:
            err?.response?.data?.llmResponse?.details?.message || err?.response?.data?.llmResponse?.message ||
            err?.message ||
            "Something went wrong!!",
          text: "",
          timer: 4000,
          timerProgressBar: true,
        });
      })
      .finally(()=>{
        dispatch(hideLoader());
      })
    }
  }

  const submitQuestions = async () => {
    console.log("submit questions", questionForm);
    let answers = [];

    for (const key in questionForm) {
      if (Array.isArray(questionForm[key])) {
        answers.push({
          questionId: parseInt(key),
          answer: questionForm[key].join(","),
        });
      } else {
        answers.push({ questionId: parseInt(key), answer: questionForm[key] });
      }
    }

    let postdata = {
      answers,
    };
    
    dispatch(showLoader());
    await submitMultipleQuestions(postdata)
      .then((res) => {
        console.log("res", res);
        if (res?.accessToken) {
          dispatch(loginUser(res.accessToken));
        }
        navigate(`/user/chatbot?chatid=${res.conversationId}`);
      })
      .catch((err) => {
        dispatch(hideLoader());
        console.log("err", err);
      });
  };

  const navigatePage = (page)=>{
    setupCompleted?navigate(`/user/${page}`):'';
  }

  return (
    <div className="goal_background py-[40px] px-[24px] lg:px-[60px] lg:px-[140px]">
      <div className="flex items-center justify-center">
        <div className="w-full flex justify-between items-center max-w-[900px] px-[42px] lg:px-[72px]">
          <div className="hidden md:flex items-center gap-4">
            <button type="button"
              className="flex items-center gap-2 text-[#0A0A0A] text-sm font-normal"
              onClick={(e)=>navigatePage('checkin')}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33337 1.3335V4.00016" stroke={`${setupCompleted?'#1F6CFD':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.6666 1.3335V4.00016" stroke={`${setupCompleted?'#1F6CFD':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z" stroke={`${setupCompleted?'#1F6CFD':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 6.6665H14" stroke={`${setupCompleted?'#1F6CFD':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="hidden md:block">Start daily check-in</p>
            </button>
            <button type="button"
              className="flex items-center gap-2 text-[#0A0A0A] text-sm font-normal"
              onClick={(e)=>navigatePage('insights')}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_3376_469)">
              <g clipPath="url(#clip1_3376_469)">
              <path d="M8.00004 14.6668C11.6819 14.6668 14.6667 11.6821 14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 8.00004 1.3335C4.31814 1.3335 1.33337 4.31826 1.33337 8.00016C1.33337 11.6821 4.31814 14.6668 8.00004 14.6668Z" stroke={`${setupCompleted?'#9E21FB':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke={`${setupCompleted?'#9E21FB':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.99996 9.33317C8.73634 9.33317 9.33329 8.73622 9.33329 7.99984C9.33329 7.26346 8.73634 6.6665 7.99996 6.6665C7.26358 6.6665 6.66663 7.26346 6.66663 7.99984C6.66663 8.73622 7.26358 9.33317 7.99996 9.33317Z" stroke={`${setupCompleted?'#9E21FB':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              </g>
              <defs>
              <clipPath id="clip0_3376_469">
              <rect width="16" height="16" fill="white"/>
              </clipPath>
              <clipPath id="clip1_3376_469">
              <rect width="16" height="16" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              Review goals for this week
            </button>
            <button type="button"
              className="flex items-center gap-2 text-[#0A0A0A] text-sm font-normal"
              onClick={(e)=>navigatePage('goals')}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_3376_242)">
              <path d="M10.6666 4.6665H14.6666V8.6665" stroke={`${setupCompleted?'#F98B1B':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.6667 4.6665L9.00004 10.3332L5.66671 6.99984L1.33337 11.3332" stroke={`${setupCompleted?'#F98B1B':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_3376_242">
              <rect width="16" height="16" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              Show progress insights
            </button>            
          </div>
          <div className="flex md:hidden flex items-center gap-4">
            <button type="button"
              className="flex items-center gap-2 text-[#0A0A0A] text-sm font-normal"
              onClick={(e)=>navigatePage('checkin')}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33337 1.3335V4.00016" stroke={`${setupCompleted?'#1F6CFD':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.6666 1.3335V4.00016" stroke={`${setupCompleted?'#1F6CFD':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z" stroke={`${setupCompleted?'#1F6CFD':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 6.6665H14" stroke={`${setupCompleted?'#1F6CFD':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button type="button"
              className="flex items-center gap-2 text-[#0A0A0A] text-sm font-normal"
              onClick={(e)=>navigatePage('insights')}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_3376_469)">
              <g clipPath="url(#clip1_3376_469)">
              <path d="M8.00004 14.6668C11.6819 14.6668 14.6667 11.6821 14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 8.00004 1.3335C4.31814 1.3335 1.33337 4.31826 1.33337 8.00016C1.33337 11.6821 4.31814 14.6668 8.00004 14.6668Z" stroke={`${setupCompleted?'#9E21FB':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke={`${setupCompleted?'#9E21FB':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.99996 9.33317C8.73634 9.33317 9.33329 8.73622 9.33329 7.99984C9.33329 7.26346 8.73634 6.6665 7.99996 6.6665C7.26358 6.6665 6.66663 7.26346 6.66663 7.99984C6.66663 8.73622 7.26358 9.33317 7.99996 9.33317Z" stroke={`${setupCompleted?'#9E21FB':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              </g>
              <defs>
              <clipPath id="clip0_3376_469">
              <rect width="16" height="16" fill="white"/>
              </clipPath>
              <clipPath id="clip1_3376_469">
              <rect width="16" height="16" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </button>
            <button type="button"
              className="flex items-center gap-2 text-[#0A0A0A] text-sm font-normal"
              onClick={(e)=>navigatePage('goals')}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_3376_242)">
              <path d="M10.6666 4.6665H14.6666V8.6665" stroke={`${setupCompleted?'#F98B1B':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.6667 4.6665L9.00004 10.3332L5.66671 6.99984L1.33337 11.3332" stroke={`${setupCompleted?'#F98B1B':'#4B5563'}`} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_3376_242">
              <rect width="16" height="16" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </button>            
          </div>
          <div>
            <p
              className="flex items-center gap-2 text-xs font-medium text-[#1E3A8A] px-2 py-2 cursor-pointer"
              onClick={() => navigate("/goal/create")}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 6H9.5" stroke="#1E3A8A" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 2.5V9.5" stroke="#1E3A8A" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              New Goal
            </p>
          </div>
        </div>
      </div>      
      <div className="flex items-center justify-center my-[8px] px-[16px]">
        <div className="ai-border-sty w-full max-w-3xl bg-white border border-[#ffffff]-200 rounded-2xl shadow-sm p-[20px] sm:p-[32px] md:p-[40px]">
          {/* Header */}
          <div className="flex justify-between text-[14px] font-medium text-[#4B5563] mb-[8px]">
            <span>Getting to know you</span>
            {conversation !== null &&
              conversation?.last_primary_questions.length && (
                <span className="font-medium text-[#1E3A8A]">
                  Step {conversation?.last_primary_questions[0].set_number} of 3
                </span>
              )}
          </div>

          {/* Progress bar */}
          {conversation !== null &&
            conversation?.last_primary_questions.length && (
              <div className="w-full h-[12px] bg-[#E4E4E4] rounded-full mb-[8px]">
                <div
                  className={`w-${conversation?.last_primary_questions[0].set_number}/3 h-full bg-[#1E3A8A] rounded-full`}
                ></div>
              </div>
            )}

          {/* AI Request box */}
          <div className="w-full max-w-3xl mt-[16px] mx-auto mb-[8px]">
            <div className="bg-gradient-to-r from-[#FAF5FF] to-[#ECFEFF] border border-[#E9D4FF] rounded-[16px] px-[16px] py-[24px]">
              <div className="flex items-center">
                <img
                  src={creategoal}
                  alt="Create Icon"
                  className="w-[28px] h-[28px]"
                />
                <p className="text-[14px] text-[#4B5563] ml-[8px]">
                  Your request:
                </p>
              </div>

              <h2 className="text-[12px] sm:text-[16px] font-[600] text-[#0A0A0A] ml-[30px] mt-[6px]">
                {conversation?.first_user_message?.message}
              </h2>
            </div>
          </div>

          {/* Title Section */}
          <div>
            <h2 className="text-[12px] sm:text-[24px] font-[700] text-[#0A0A0A] mb-[4px]">
              Please answer the following questions.
            </h2>
            <p className="text-[#848282] text-[12px] mb-[12px]">
              This helps us personalize your AI coaching experience from day
              one.
            </p>
          </div>

          {/* Inputs */}
          {conversation !== null &&
            conversation?.last_primary_questions.length && (
              <div className="max-w-3xl mx-auto bg-white rounded-lg">
                {conversation?.last_primary_questions.map((question, index) => (
                  <div key={`qu-${index}`} className="w-full mb-[16px]">
                    <label className="block text-[12px] font-[400] text-[#848282] mb-[2px]">
                      {question.question} *
                    </label>
                    {question.type === "text" && (
                      <input
                        type="text"
                        placeholder={
                          question?.placeholder || "Type your answer"
                        }
                        name={question.id}
                        value={questionForm[question.id]}
                        onChange={handleChange}
                        className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] placeholder-[#181818] placeholder:font-[500]"
                      />
                    )}
                    {question.type === "number" && (
                      <input
                        type="number"
                        placeholder={
                          question?.placeholder || "Type your answer"
                        }
                        name={question.id}
                        value={questionForm[question.id]}
                        onChange={handleChange}
                        className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] placeholder-[#181818] placeholder:font-[500]"
                      />
                    )}
                    {question.type === "date" && (
                      <input
                        type="date"
                        name={question.id}
                        value={questionForm[question.id]}
                        onChange={handleChange}
                        className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] placeholder-[#181818] placeholder:font-[500]"
                      />
                    )}
                    {question.type === "time" && (
                      <input
                        type="time"
                        name={question.id}
                        value={questionForm[question.id]}
                        onChange={handleChange}
                        className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] placeholder-[#181818] placeholder:font-[500]"
                      />
                    )}
                    {question.type === "option" && (
                      <select
                        name={question.id}
                        placeholder={question?.placeholder || "Select"}
                        value={questionForm[question.id]}
                        onChange={handleChange}
                        className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] font-[500] text-[#181818] bg-white
                        appearance-none bg-no-repeat bg-right-[12px] select-arrow cursor-pointer"
                      >
                        <option value="">Select</option>
                        {question.options.split(",").map((option, idx) => (
                          <option
                            key={`opt-${idx}-${question.id}`}
                            value={option}
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                    {question.type === "multiselect" && (
                      <div className="flex gap-[15px] flex-wrap">
                        {question.options.split(",").map((option, idx) => (
                          <div
                            key={`multi-${idx}-${question.id}`}
                            onClick={() =>
                              handleMultiOptions(question.id, option)
                            }
                            className={`checkbox-card cursor-pointer border rounded-[8px] px-[16px] py-[10px] w-[250px] 
                      ${
                        questionForm[question.id].includes(option)
                          ? "border-[#E4E4E4] bg-[#EEF4FF]"
                          : "border-[#DBDBDB]"
                      }
                      `}
                          >
                            <div className="flex gap-[20px] items-center">
                              <input
                                type="checkbox"
                                checked={questionForm[question.id].includes(
                                  option
                                )}
                                readOnly
                              />
                              <div>
                                <h4 className="text-[12px] font-[500] text-[#0A0A0A]">
                                  {option}
                                </h4>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="w-full flex items-center justify-between mt-10 gap-[5px]">
                  {/* Back Button */}
                  {conversation.last_primary_questions[0].set_number > 1 ? (
                    <button 
                      type="button"
                      className="flex items-center gap-[8px] px-[12px] py-[8px] border-[1px] border-[#E4E4E4] rounded-[8px] bg-[#FFFFFF] text-[#1E3A8A] text-[14px] hover:bg-gray-50 transition"
                      onClick={previousStep}
                    >
                      <FaArrowLeftLong />
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  {/* Next Button */}
                  {conversation.last_primary_questions[0].set_number < 3 && (
                    <button
                      disabled={goNext?false:true}
                      type="button"
                      className={`flex items-center gap-[8px] px-[12px] py-[8px] border-[1px] border-[#E4E4E4] rounded-[8px] text-[#FFFFFF] text-[14px] transition ${goNext?'bg-[#1E3A8A]':'bg-[#868686]'}`}
                      onClick={nextQuestions}
                    >
                      Next
                      <FaArrowRightLong />
                    </button>
                  )}
                  {conversation.last_primary_questions[0].set_number === 3 && (
                    <button
                      disabled={goNext?false:true}
                      type="button"
                      className={`flex items-center gap-[8px] px-[12px] py-[8px] border-[1px] border-[#E4E4E4] rounded-[8px] text-[#FFFFFF] text-[14px] transition ${goNext?'bg-[#1E3A8A]':'bg-[#868686]'}`}
                      onClick={submitQuestions}
                    >
                      Submit
                      <FaArrowRightLong />
                    </button>
                  )}
                </div>
              </div>
            )}
          {/* <div className="max-w-3xl mx-auto  bg-white rounded-lg mt-4">
          <div className="mb-[12px]">
            <label className="block text-[12px] font-[400] text-[#4B5563]">
              What challenges are you facing right now?
            </label>
            <input
              type="text"
              name="challenges"
              value={formData.challenges}
              onChange={handleChange}
              placeholder="Real Estate Business"
              className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] placeholder-[#181818] placeholder:font-[500]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[12px] font-[400] text-[#4B5563]">
              What opportunities do you see this quarter?
            </label>

            <select
              name="opportunities"
              value={formData.opportunities}
              onChange={handleChange}
              className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] font-[500] text-[#181818] bg-white"
            >
              <option value="" disabled>
                2–10 employees
              </option>
              <option value="1-2">1–2 employees</option>
              <option value="2-10">2–10 employees</option>
              <option value="10-20">10–20 employees</option>
              <option value="20-50">20–50 employees</option>
              <option value="50+">50+ employees</option>
            </select>
          </div>

          <label className="text-[12px] text-[#4B5563] block mb-[10px] mt-[12px]">
            Which marketing channels are you currently using?
          </label>

          <div className="flex gap-[15px] flex-wrap">
            <div
              onClick={() => handleMarketingCard("socialMedia")}
              className={`checkbox-card cursor-pointer border rounded-[8px] p-[16px] w-[250px] 
              ${
                formData.marketingChannels.socialMedia
                  ? "border-[#E4E4E4] bg-[#EEF4FF]"
                  : "border-[#DBDBDB]"
              }
              `}
            >
              <div className="flex gap-[20px] items-center">
                <input
                  type="checkbox"
                  checked={formData.marketingChannels.socialMedia}
                  readOnly
                />
                <div>
                  <h4 className="text-[12px] font-[500] text-[#0A0A0A]">
                    Social Media
                  </h4>
                </div>
              </div>
            </div>

            <div
              onClick={() => handleMarketingCard("paidAds")}
              className={`checkbox-card cursor-pointer border rounded-[12px] p-[16px] w-[250px] 
              ${
                formData.marketingChannels.paidAds
                  ? "border-[#1E3A8A] bg-[#EEF4FF]"
                  : "border-[#DBDBDB]"
              }
              `}
            >
              <div className="flex gap-[20px] items-center">
                <input
                  type="checkbox"
                  checked={formData.marketingChannels.paidAds}
                  readOnly
                />
                <div>
                  <h4 className="text-[12px] font-[500] text-[#0A0A0A]">
                    Paid ads
                  </h4>
                </div>
              </div>
            </div>

            <div
              onClick={() => handleMarketingCard("emailMarketing")}
              className={`checkbox-card cursor-pointer border rounded-[12px] p-[16px] w-[250px] 
              ${
                formData.marketingChannels.emailMarketing
                  ? "border-[#1E3A8A] bg-[#EEF4FF]"
                  : "border-[#DBDBDB]"
              }
              `}
            >
              <div className="flex gap-[20px] items-center">
                <input
                  type="checkbox"
                  checked={formData.marketingChannels.emailMarketing}
                  readOnly
                />
                <div>
                  <h4 className="text-[12px] font-[500] text-[#0A0A0A]">
                    Email Marketing
                  </h4>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleMarketingCard("seoWebsite")}
              className={`checkbox-card cursor-pointer border rounded-[12px] p-[16px] w-[250px] 
              ${
                formData.marketingChannels.seoWebsite
                  ? "border-[#1E3A8A] bg-[#EEF4FF]"
                  : "border-[#DBDBDB]"
              }
              `}
            >
              <div className="flex gap-[20px] items-center">
                <input
                  type="checkbox"
                  checked={formData.marketingChannels.seoWebsite}
                  readOnly
                />
                <div>
                  <h4 className="text-[12px] font-[500] text-[#0A0A0A]">
                    SEO & website
                  </h4>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleMarketingCard("offlineMarketing")}
              className={`checkbox-card cursor-pointer border rounded-[12px] p-[16px] w-[250px] 
              ${
                formData.marketingChannels.offlineMarketing
                  ? "border-[#1E3A8A] bg-[#EEF4FF]"
                  : "border-[#DBDBDB]"
              }
              `}
            >
              <div className="flex gap-[20px] items-center">
                <input
                  type="checkbox"
                  checked={formData.marketingChannels.offlineMarketing}
                  readOnly
                />
                <div>
                  <h4 className="text-[12px] font-[500] text-[#0A0A0A]">
                    Offline marketing
                  </h4>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleMarketingCard("nonenotSure")}
              className={`checkbox-card cursor-pointer border rounded-[12px] p-[16px] w-[250px] 
              ${
                formData.marketingChannels.nonenotSure
                  ? "border-[#1E3A8A] bg-[#EEF4FF]"
                  : "border-[#DBDBDB]"
              }
              `}
            >
              <div className="flex gap-[20px] items-center">
                <input
                  type="checkbox"
                  checked={formData.marketingChannels.nonenotSure}
                  readOnly
                />
                <div>
                  <h4 className="text-[12px] font-[500] text-[#0A0A0A]">
                    None/Not sure
                  </h4>
                </div>
              </div>
            </div>
            <section className="w-full max-w-4xl mx-auto mt-2 sm:mt-[12px] ">
              <div className="flex items-center gap-2 mb-[12px]">
                <span className="text-[12px] leading-[16px] font-[400] text-[#4B5563]">
                  Describe your business situation in your own words (optional)
                </span>
              </div>

              <div className="bg-[#F8FAFC] border-[2px] border-[#E5F2FF] rounded-[16px] p-[16px]">
                <textarea
                  className="text-border-sty w-full bg-transparent outline-none resize-none text-[#D1D5DC] font-400 placeholder:text-[12px] leading-[16px] no-border font-[400]"
                  rows={3}
                  placeholder="e.g., I want to launch my first product by Q2 and build a sustainable morning routine..."
                ></textarea>
              </div>
            </section>
            <div className="w-full flex items-center justify-between mt-10 gap-[5px]">
              <button className="flex items-center gap-[8px] p-[12px] border-[1px] border-[#E4E4E4] rounded-[8px] bg-[#FFFFFF] text-[#1E3A8A] text-[14px] hover:bg-gray-50 transition">
                <FaArrowLeftLong />
                Back
              </button>

              <button className="flex items-center gap-[8px] p-[12px] border-[1px] border-[#E4E4E4] rounded-[8px] bg-[#1E3A8A] text-[#FFFFFF] text-[14px] hover:bg-gray-50 transition">
                Next
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default AiQuestion;
