import React, { useEffect, useState } from "react";
import creategoal from "../assets/images/creategoal.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../store/slices/loaderSlice";
import { lastConversation } from "../apis/conversationApi";
import { submitMultipleQuestions, updateMultipleQuestions } from "../apis/questionApi";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/slices/authSlice";

const AiQuestion = () => {
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
  const [questionForm, setQuestionForm] = useState({});

  useEffect(() => {
    dispatch(showLoader());
    const getQuestions = () => {
      fetchLastConversation();
    };
    getQuestions();
  }, []);

  const fetchLastConversation = async () => {
    await lastConversation()
      .then((res) => {
        if(res.last_primary_questions.length>0){
          createFormData(res.last_primary_questions);
        }
        console.log(res);
        setConversation(res);
        dispatch(hideLoader());
      })
      .catch(() => {

      })
      .finally(()=>{
        dispatch(hideLoader());
      });
  };

  const createFormData = (data) => {
    const form_data = {};

    data.forEach(value => {
      if(value.answer){
        form_data[value.id] = value.type==='multiselect'?value.answer.split(','):value.answer;
      }else{
        form_data[value.id] = value.type==='multiselect'?[]:'';
      }      
    })
    console.log('form data', form_data);
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
    
    for(const key in questionForm){
      if(Array.isArray(questionForm[key])){
        answers.push({questionId: parseInt(key), answer: questionForm[key].join(',')});
      }else{
        answers.push({questionId: parseInt(key), answer: questionForm[key]});
      }
    }

    let postdata = {
      answers
    };
    console.log('post data', postdata);

    dispatch(showLoader());
    await updateMultipleQuestions(postdata)
      .then((res)=>{
        console.log('res', res);
        createFormData(res.newQuestions);
        setConversation((prev)=>({
          ...prev,
          last_primary_questions: res.newQuestions
        }));
      })
      .catch((err)=>{
        console.log('err', err);
      })
      .finally(()=>{
        dispatch(hideLoader());
      });
  };

  const submitQuestions = async () => {
    console.log('submit questions', questionForm);
    let answers = [];
    
    for(const key in questionForm){
      if(Array.isArray(questionForm[key])){
        answers.push({questionId: parseInt(key), answer: questionForm[key].join(',')});
      }else{
        answers.push({questionId: parseInt(key), answer: questionForm[key]});
      }
    }

    let postdata = {
      answers
    };
    console.log('post data', postdata);

    dispatch(showLoader());
    await submitMultipleQuestions(postdata)
      .then((res)=>{
        console.log('res', res);        
        if (res?.accessToken) {
          dispatch(loginUser(res.accessToken));
        }
        navigate(`/user/chatbot?chatid=${res.conversationId}`);
      })
      .catch((err)=>{
        dispatch(hideLoader());
        console.log('err', err);
      });
  };

  return (
    <div className="flex items-center justify-center bg-white my-[10px] sm:my-[16px] md:my-[20px] px-[16px]">
      <div className="ai-border-sty max-w-[900px] w-[60%] bg-white border border-[#ffffff]-200 rounded-[24px] shadow-sm p-[40px] p-[20px] sm:p-[32px] md:p-[40px]">
        {/* Header */}
        <div className="flex justify-between text-[14px] font-medium text-[#4B5563] mb-[8px]">
          <span>Getting to know you</span>
          {conversation!==null && conversation?.last_primary_questions.length && <span className="font-medium text-[#1E3A8A]">Step {conversation?.last_primary_questions[0].set_number} of 3</span>}
        </div>

        {/* Progress bar */}
        {conversation!==null && conversation?.last_primary_questions.length && <div className="w-full h-[12px] bg-[#E4E4E4] rounded-full mb-[8px]">
          <div className={`w-${conversation?.last_primary_questions[0].set_number}/3 h-full bg-[#1E3A8A] rounded-full`}></div>
        </div>}

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
          <p className="text-[#4B5563] text-[12px] mb-[12px]">
            This helps us personalize your AI coaching experience from day one.
          </p>
        </div>

        {/* Inputs */}
        {conversation!==null && conversation?.last_primary_questions.length && <div className="max-w-3xl mx-auto bg-white rounded-lg">
          {conversation?.last_primary_questions.map((question, index)=>(
            <div key={`qu-${index}`} className="w-full mb-[12px]">
              <label className="block text-[12px] font-[400] text-[#4B5563]">
                {question.question} *
              </label>
              {question.type==='text' && <input
                type="text"
                name={question.id}
                value={questionForm[question.id]}
                onChange={handleChange}
                placeholder="Type your answer"
                className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] placeholder-[#181818] placeholder:font-[500]"
              />}
              {question.type==='number' && <input
                type="number"
                name={question.id}
                value={questionForm[question.id]}
                onChange={handleChange}
                placeholder="Type your answer"
                className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] placeholder-[#181818] placeholder:font-[500]"
              />}
              {question.type==='date' && <input
                type="date"
                name={question.id}
                value={questionForm[question.id]}
                onChange={handleChange}
                className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] placeholder-[#181818] placeholder:font-[500]"
              />}
              {question.type==='time' && <input
                type="time"
                name={question.id}
                value={questionForm[question.id]}
                onChange={handleChange}
                className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] placeholder-[#181818] placeholder:font-[500]"
              />}
              {question.type==='option' && 
                <select
                  name={question.id}
                  value={questionForm[question.id]}
                  onChange={handleChange}
                  className="mt-[4px] w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px] text-[12px] font-[500] text-[#181818] bg-white"
                >
                  {question.options.split(',').map((option, idx)=>(
                    <option key={`opt-${idx}-${question.id}`} value={option}>{option}</option>
                  ))}                  
                </select>
              }
              {question.type==='multiselect' &&
                <div className="flex gap-[15px] flex-wrap">
                  {question.options.split(',').map((option, idx)=>(
                    <div
                      key={`multi-${idx}-${question.id}`}
                      onClick={() => handleMultiOptions(question.id, option)}
                      className={`checkbox-card cursor-pointer border rounded-[8px] p-[16px] w-[250px] 
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
                          checked={questionForm[question.id].includes(option)}
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
              }
            </div>            
          ))}
          <div className="w-full flex items-center justify-between mt-10 gap-[5px]">
            {/* Back Button */}
            {conversation.last_primary_questions[0].set_number>1 ? <button className="flex items-center gap-[8px] p-[12px] border-[1px] border-[#E4E4E4] rounded-[8px] bg-[#FFFFFF] text-[#1E3A8A] text-[14px] hover:bg-gray-50 transition">
              <FaArrowLeftLong />
              Back
            </button>:
            <div></div>}
            {/* Next Button */}
            {conversation.last_primary_questions[0].set_number<3 && <button type="button" className="flex items-center gap-[8px] p-[12px] border-[1px] border-[#E4E4E4] rounded-[8px] bg-[#84822] text-[#FFFFFF] text-[14px] hover:bg-[#1E3A8A] transition"
              onClick={nextQuestions}
            >
              Next
              <FaArrowRightLong />
            </button>}
            {conversation.last_primary_questions[0].set_number===3 && <button type="button" className="flex items-center gap-[8px] p-[12px] border-[1px] border-[#E4E4E4] rounded-[8px] bg-[#1E3A8A] text-[#FFFFFF] text-[14px] hover:bg-gray-50 transition"
              onClick={submitQuestions}
            >
              Submit
              <FaArrowRightLong />
            </button>}
          </div>          
        </div>}
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
  );
};

export default AiQuestion;
