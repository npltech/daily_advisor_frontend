import React, { useState } from "react";
import form1 from "../assets/images/form1.png";
import ind from "../assets/images/ind.png";
import goal from "../assets/images/goal.png";
import area2 from "../assets/images/area2.png";
import area1 from "../assets/images/area1.png";
import area3 from "../assets/images/area3.png";
import area4 from "../assets/images/area4.png";
import area5 from "../assets/images/area5.png";
import area6 from "../assets/images/area6.png";
import time from "../assets/images/time.png";
import next from "../assets/images/next.png";
import increase from "../assets/images/increase.png";
import start from "../assets/images/start.png";
import financial from "../assets/images/financial.png";
import work from "../assets/images/work.png";
import learn from "../assets/images/learn.png";
import build from "../assets/images/build.png";
import achieve from "../assets/images/achieve.png";
import improve from "../assets/images/improve.png";
import arrowleft from "../assets/images/arrowleft.png";
import pencil from "../assets/images/pencil.png";
import notification from "../assets/images/notification.png";
import check from "../assets/images/check.png";





const Onboarding = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="flex items-center justify-center bg-[#ffffff] my-[80px]">
      <div className="onboarding-border w-[900px] bg-[#ffffff] border-[1px] border-[#FFFFFF]-200 rounded-[24px] shadow-sm p-[40px]">
        {/* Header */}
        <div className="flex justify-between text-[14px] leading-[18px] font-[500] text-[#4B5563] mb-[20px]">
          <span>Getting to know you</span>
          <span className="font-medium text-[#1E3A8A]">Step 1 of 3</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-[12px] bg-[#E4E4E4] rounded-full mb-[20px]">
          <div className="w-1/3 h-[12px] bg-[#1E3A8A] rounded-full"></div>
        </div>

    {/* Form */}
        <form className="space-y-6">

          {/* Step 2 */}
      {false && <div>
        {/* Title */}
        <h2 className="text-[24px] leading-[28px] font-[700] text-[#0A0A0A] mb-[10px]">
          Tell us about yourself
        </h2>
        <p className="text-[#4B5563] font-[400] text-[14px] leading-[18px] mb-[20px]">
          This helps us personalize your AI coaching experience from day one.
        </p>

        {/* Name & Role */}
          <div className="flex flex-row gap-[20px]">
            <div className="form-group w-[50%]">
              <label className="text-[12px] font-[400] text-[#4B5563] mb-[8px] flex items-center gap-2">
                <img src={form1} alt="UserName Icon" className="w-4 h-4" />
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full h-[40px] border border-[#DBDBDB] rounded-[8px] p-[16px] text-[12px] leading-[16px] font-[400]"
              />
            </div>

            <div className="form-group w-[50%]">
              <label className="text-[12px] font-[400] text-[#4B5563] mb-[5px] flex items-center gap-2">
                <img src={ind} alt="Industry Icon" className="w-4 h-4" />
                Professional Role / Industry
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. UX & UI Designer, Entrepreneur, Student"
                className="w-full h-[40px] border border-[#DBDBDB] rounded-[8px] p-[16px] text-[12px] leading-[16px] font-[400]"
              />
            </div>
          </div>

          {/* Primary focus area */}
          <div>
            <label className=" focus-area text-[12px] font-[400] leading-[16px] text-[#4B5563] block mb-[10px] mt-[20px] flex items-center gap-2">
              <img src={goal} alt="Goal Icon" className="w-4 h-4" />
              Primary focus areas
            </label>
          </div>
        <div className="checkbox-grid flex gap-[15px] flex-wrap">
           <div class=" checkbox-card">
            <input type="checkbox" id="growth"/>
            <label for="growth" className="flex gap-[20px] items-center">
              <img src={area1} alt="Business Icon" className="w-4 h-4" />
              <div className="icon_content">
              <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Business Growth</h4>
              <p>Scale your company and lead teams</p>
              </div>
            </label>
          </div>

  <div className="checkbox-card">
    <input type="checkbox" id="personal"/>
    <label for="personal" className="flex gap-[20px] items-center">
      <img src={area2} alt="Growth Icon" className="w-4 h-4" />
              <div className="icon_content">
      <h4>Personal Growth</h4>
      <p>Self-improvement and mindfulness</p>
      </div>
    </label>
  </div>

  <div className="checkbox-card">
    <input type="checkbox" id="health"/>
    <label for="health" className="flex gap-[20px] items-center">
       <img src={area3} alt="Health Icon" className="w-4 h-4" />
      <div className="icon_content">
        <h4>Health & Wellness</h4>
      <p>Fitness, nutrition, and wellbeing</p>
      </div>
      
    </label>
  </div>

  <div className="checkbox-card">
    <input type="checkbox" id="career"/>
    <label for="career" className="flex gap-[20px] items-center">
      <img src={area4} alt="Career Icon" className="w-4 h-4" />
              <div className="icon_content">
      <h4>Career Development</h4>
      <p>Advance your professional journey</p>
      </div>
    </label>
  </div>

  <div className="checkbox-card">
    <input type="checkbox" id="balance"/>
    <label for="balance" className="flex gap-[20px] items-center">
      <img src={area5} alt="Life Icon" className="w-4 h-4" />
              <div className="icon_content">
      <h4>Life Balance</h4>
      <p>Harmony between work and personal life</p>
      </div>
    </label>
  </div>

  <div className="checkbox-card">
    <input type="checkbox" id="finance"/>
    <label for="finance" className="flex gap-[20px] items-center">
       <img src={area6} alt="Goals Icon" className="w-4 h-4" />
              <div className="icon_content">
      <h4>Financial Goals</h4>
      <p>Wealth building and money management</p>
      </div>
    </label>
  </div>
</div>         
{/* Timezone */}
            <div>
              <label className="text-[12px] leading-[16px] font-[400] text-[#4B5563] block mt-[30px]">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                Timezone
              </label>
              <select className="w-full h-[40px] border-[1px] border-[#DBDBDB] rounded-[8px] px-3 py-2 text-[12px] leading-[16px] font-[400] text-[#181818]">
                <option>India (IST)</option>
                <option>US (EST)</option>
                <option>UK (GMT)</option>
                <option>Australia (AEST)</option>
              </select>
            </div>
      </div>}


{/* Step 2 */}
      {false && <div>
        {/* Title */}
        <h2 className="text-[24px] leading-[28px] font-[700] text-[#0A0A0A] mb-[10px]">
          What are your goals
        </h2>
        <p className="text-[#4B5563] font-[400] text-[14px] leading-[18px] mb-[20px]">
          Select all that apply. Your AI coach will tailor daily insights around these goals.
        </p>

        {/* Name & Role */}
          <div className="flex flex-row gap-[20px]">
            <div className="form-group w-[50%]">
              <label className="text-[12px] font-[400] text-[#4B5563] mb-[8px] flex items-center gap-2">
                <img src={form1} alt="UserName Icon" className="w-4 h-4" />
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full h-[40px] border border-[#DBDBDB] rounded-[8px] p-[16px] text-[12px] leading-[16px] font-[400]"
              />
            </div>

            <div className="form-group w-[50%]">
              <label className="text-[12px] font-[400] text-[#4B5563] mb-[8px] flex items-center gap-2">
                <img src={ind} alt="Industry Icon" className="w-4 h-4" />
                Professional Role / Industry
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. UX & UI Designer, Entrepreneur, Student"
                className="w-full h-[40px] border border-[#DBDBDB] rounded-[8px] p-[16px] text-[12px] leading-[16px] font-[400]"
              />
            </div>
          </div>

          {/* Primary focus area */}
          <div>
            <label className="focus-area text-[12px] font-[400] leading-[16px] text-[#4B5563] block mb-[10px] mt-[20px] flex items-center gap-2">
              <img src={goal} alt="Goal Icon" className="w-4 h-4" />
              Select your goal
            </label>
          </div>
        <div className="checkbox-grid flex gap-[15px] flex-wrap">
           <div class="checkbox-card goal">
            <input type="checkbox" id="growth"/>
            <label for="growth" className="block">
              <img src={increase} alt="Increase Icon" className="w-4 h-4" />
              <div className="icon_content">
              <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Increase Productivity</h4>
              <p>Get more done in less time</p>
              </div>
            </label>
          </div>

  <div className="checkbox-card goal">
    <input type="checkbox" id="personal"/>
    <label for="personal" className="block">
      <img src={build} alt="Build Icon" className="w-4 h-4" />
              <div className="icon_content">
      <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Build Better Habits</h4>
      <p>Create sustainable routines</p>
      </div>
    </label>
  </div>

  <div className="checkbox-card goal">
    <input type="checkbox" id="health"/>
    <label for="health" className="block">
       <img src={achieve} alt="Achieve Icon" className="w-4 h-4" />
      <div className="icon_content">
        <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Achieve Career Goals</h4>
      <p>Advance your professional path</p>
      </div>
      
    </label>
  </div>

  <div className="checkbox-card goal">
    <input type="checkbox" id="career"/>
    <label for="career" className="block">
      <img src={improve} alt="Improve Icon" className="w-4 h-4" />
              <div className="icon_content">
      <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Improve Wellbeing</h4>
      <p>Mental and physical health</p>
      </div>
    </label>
  </div>

  <div className="checkbox-card goal">
    <input type="checkbox" id="balance"/>
    <label for="balance" className="block">
      <img src={financial} alt="Financial Icon" className="w-4 h-4" />
              <div className="icon_content">
      <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Financial Growth</h4>
      <p>Build wealth and security</p>
      </div>
    </label>
  </div>

  <div className="checkbox-card goal">
    <input type="checkbox" id="finance"/>
    <label for="finance" className="block">
       <img src={learn} alt="Learn Icon" className="w-4 h-4" />
              <div className="icon_content">
      <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Learn New Skills</h4>
      <p>Continuous education</p>
      </div>
    </label>
  </div>
   <div className="checkbox-card goal">
    <input type="checkbox" id="finance"/>
    <label for="finance" className="block">
       <img src={work} alt="Work Icon" className="w-4 h-4" />
              <div className="icon_content">
      <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Work-Life Balance</h4>
      <p>Harmony and fulfillment</p>
      </div>
    </label>
  </div>
   <div className="checkbox-card goal">
    <input type="checkbox" id="finance"/>
    <label for="finance" className="block">
       <img src={start} alt="Start Icon" className="w-4 h-4" />
              <div className="icon_content">
      <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Start a Business</h4>
      <p>Entrepreneurial journey</p>
      </div>
    </label>
  </div>
</div>         
            <div>
              <label className="text-[12px] leading-[16px] font-[400] text-[#4B5563] block mt-[30px]">
                <img src={pencil} alt="Pencil Icon" className="w-4 h-4" />
                Describe your top goal in your own words (optional)
              </label>
              <div className="flex items-start"> 
                  <textarea className=" text-areas w-full h-[116px] border border-[#E5F2FF] text-[#0A0A0A80] rounded-[12px] p-[16px] text-[12px] leading-[16px] font-[400]  ...">e.g., I want to launch my first product by Q2 and build a sustainable morning routine...</textarea>
                 </div>
              
            </div>
      </div>}




{/* Step 3 */}
        <div>
        {/* Title */}
        <h2 className="text-[24px] leading-[28px] font-[700] text-[#0A0A0A] mb-[10px]">
          Customize your experience
        </h2>
        <p className="text-[#4B5563] font-[400] text-[14px] leading-[18px] mb-[20px]">
          Set your preferences so we can adapt to your schedule and style.
        </p>

        {/* Name & Role */}
          <div className="flex flex-row gap-[20px]">
            <div className="form-group w-[100%]">
              <label className="text-[12px] font-[400] text-[#4B5563] mb-[8px] flex items-center gap-2">
                <img src={time} alt="time Icon" className="w-4 h-4" />
                Preferred Daily Check-in Time
              </label>
              <input type="time" placeholder="8:00 AM" className="w-full h-[52px] bg-[#F8FAFC] outline-none text-[14px] font-[500] placeholder:text-[#0A0A0A]-400 p-[16px] rounded-[12px] border-[#E5F2FF] border-[2px]"/>
            </div>
          </div>

          {/* Primary focus area */}
          <div>
            <label className="focus-area text-[12px] font-[400] leading-[16px] text-[#4B5563] block mb-[10px] mt-[20px] flex items-center gap-2">
              <img src={notification} alt="Notification Icon" className="w-4 h-4" />
              Notification Preferences
            </label>
          </div>
        <div className="checkbox-grid  flex gap-[15px] flex-wrap">
           <div class="checkbox-card goal notification">
            <input type="checkbox" id="growth"/>
            <label for="growth" className="block">
              <div className="icon_content">
              <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Daily check-in reminders</h4>
              <p>Get notified at your preferred time</p>
              </div>
            </label>
          </div>

  <div className="checkbox-card goal notification">
    <input type="checkbox" id="personal"/>
    <label for="personal" className="block">
              <div className="icon_content">
      <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Weekly progress summaries</h4>
      <p>Receive insights every Sunday</p>
      </div>
    </label>
  </div>

  <div className="checkbox-card goal notification">
    <input type="checkbox" id="health"/>
    <label for="health" className="block">
      <div className="icon_content">
        <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">AI-powered insights</h4>
      <p>Get notified when AI discovers patterns</p>
      </div>
    </label>
  </div>
  </div>
  <div>
            <label className="focus-area text-[12px] font-[400] leading-[16px] text-[#4B5563] block mb-[10px] mt-[20px] flex items-center gap-2">
              <img src={notification} alt="Notification Icon" className="w-4 h-4" />
              Communication Style
            </label>
          </div>
        <div className="checkbox-grid  flex gap-[8px] flex-wrap">
           <div class="checkbox-card goal Communication">
            <input type="checkbox" id="growth"/>
            <label for="growth" className="block">
              <div className="icon_content">
              <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Friendly</h4>
              <p>Warm, encouraging, and supportive tone</p>
              </div>
            </label>
          </div>

  <div className="checkbox-card goal Communication">
    <input type="checkbox" id="personal"/>
    <label for="personal" className="block">
              <div className="icon_content">
      <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Professional</h4>
      <p>Direct, concise, and business-focused</p>
      </div>
    </label>
  </div>

  <div className="checkbox-card goal Communication">
    <input type="checkbox" id="health"/>
    <label for="health" className="block">
      <div className="icon_content">
        <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Motivational</h4>
      <p>High-energy, inspiring, and ambitious</p>
      </div>
      
    </label>
  </div>
</div>   
 <div>
            <label className="focus-area text-[12px] font-[400] leading-[16px] text-[#4B5563] block mb-[10px] mt-[20px] flex items-center gap-2">
              <img src={check} alt="Check Icon" className="w-4 h-4" />
              Check-in Frequency
            </label>
          </div>
        <div className="checkbox-grid  flex gap-[15px] flex-wrap">
           <div class="checkbox-card goal notification">
            <input type="checkbox" id="growth"/>
            <label for="growth" className="block">
              <div className="icon_content">
              <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Every Day</h4>
              <p>Best for building consistency</p>
              </div>
            </label>
          </div>

  <div className="checkbox-card goal notification">
    <input type="checkbox" id="personal"/>
    <label for="personal" className="block">
              <div className="icon_content">
      <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Weekdays Only</h4>
      <p>Mon-Fri focus</p>
      </div>
    </label>
  </div>

  <div className="checkbox-card goal notification">
    <input type="checkbox" id="health"/>
    <label for="health" className="block">
      <div className="icon_content">
        <h4 className="text-[14px] leadind-[500] text-[#0A0A0A]">Custom Schedule</h4>
      <p>Pick specific days</p>
      </div>
    </label>
  </div>
  </div>      
      </div>

            <div className="flex justify-between items-center mt-[40px]">
               <button
                type="button"
                className="back-btn bg-[#FFFFFF] border-[1px] h-[48px] text-[#1E3A8A] font-[400] text-[14px] leading-[18px] hover:text-[#1E3A8A] transition p-[12px] rounded-[8px]" >
                <img src={arrowleft} alt="Left Icon" className=" arrowsty w-4 h-4 mb-[-2px] ml-[6px]" />
                Back
              </button>
              <button
                type="button"
                className="next-btn bg-[#1E3A8A] border-[1px] h-[48px] text-[#ffffff] font-[400] text-[14px] leading-[18px] hover:text-[#ffffff] transition p-[12px] rounded-[8px]" >
                Get Started
                <img src={next} alt="Next Icon" className="w-4 h-4 mb-[-2px] ml-[6px]" />
              </button>
            </div> 
        </form>        
                    
            <div className="flex justify-center items-center mt-[40px]">
            <button
              type="button"
              className="text-[#737373] font-[400] text-[14px] leading-[20px]hover:text-blue-700 transition border-none bg-[#ffffff]">
              Skip for now →
            </button>
            </div>
    </div>
    </div>
  );
};

export default Onboarding;
