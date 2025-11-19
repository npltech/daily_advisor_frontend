import React, { useState } from "react";
import creategoal from "../assets/images/creategoal.png";

const AiQuestion = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMarketingCard = (key) => {
    setFormData({
      ...formData,
      marketingChannels: {
        ...formData.marketingChannels,
        [key]: !formData.marketingChannels[key],
      },
    });
  };

  return (
    <div className="flex items-center justify-center bg-white my-[80px]">
      <div className="ai-border-sty w-[900px] bg-white border border-[#ffffff]-200 rounded-[24px] shadow-sm p-[40px]">

        {/* Header */}
        <div className="flex justify-between text-[14px] font-medium text-[#4B5563] mb-[20px]">
          <span>Getting to know you</span>
          <span className="font-medium text-[#1E3A8A]">Step 2 of 3</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-[12px] bg-[#E4E4E4] rounded-full mb-[20px]">
          <div className="w-2/3 h-full bg-[#1E3A8A] rounded-full"></div>
        </div>

        {/* AI Request box */}
        <div className="w-full max-w-3xl mt-10 mx-auto mb-[20px]">
          <div className="bg-gradient-to-r from-[#FAF5FF] to-[#ECFEFF] border border-[#E9D4FF] rounded-[16px] px-[16px] py-[24px]">
            <div className="flex items-center">
              <img
                src={creategoal}
                alt="Create Icon"
                className="w-[28px] h-[28px]"
              />
              <p className="text-[14px] text-[#4B5563] ml-[8px]">Your request:</p>
            </div>

            <h2 className="text-[16px] font-[600] text-[#0A0A0A] ml-[30px] mt-[6px]">
              How can I improve my business strategy for the next quarter?
            </h2>
          </div>
        </div>

        {/* Title Section */}
        <div>
          <h2 className="text-[24px] font-[700] text-[#0A0A0A] mb-[10px]">
            What is your Current Situation
          </h2>
          <p className="text-[#4B5563] text-[14px] mb-[20px]">
            Select all that apply. Your AI coach will tailor daily insights around these goals.
          </p>
        </div>

        {/* Inputs */}
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg">

          {/* Challenges */}
          <div className="mb-6">
            <label className="block text-[12px] font-[500] text-[#4B5563]">
              What challenges are you facing right now?
            </label>
            <input
              type="text"
              name="challenges"
              value={formData.challenges}
              onChange={handleChange}
              placeholder="Real Estate Business"
              className="mt-2 w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px]"
            />
          </div>

          {/* Opportunities */}
          <div className="mb-6">
            <label className="block text-[12px] font-[500] text-[#4B5563]">
              What opportunities do you see this quarter?
            </label>
            <input
              type="text"
              name="opportunities"
              value={formData.opportunities}
              onChange={handleChange}
              placeholder="Real Estate Business"
              className="mt-2 w-full border border-[#DBDBDB] rounded-[8px] h-[40px] px-[16px]"
            />
          </div>

          {/* Marketing Channels */}
          <label className="text-[12px] text-[#4B5563] block mb-[10px] mt-[20px]">
            Which marketing channels are you currently using?
          </label>

          <div className="flex gap-[15px] flex-wrap">

            {/* CARD - Social Media */}
            <div
              onClick={() => handleMarketingCard("socialMedia")}
              className={`checkbox-card cursor-pointer border rounded-[8px] p-[16px] w-[250px] 
              ${formData.marketingChannels.socialMedia ? "border-[#E4E4E4] bg-[#EEF4FF]" : "border-[#DBDBDB]"}
              `}
            >
              <div className="flex gap-[20px] items-center">
                <input
                  type="checkbox"
                  checked={formData.marketingChannels.socialMedia}
                  readOnly
                />
                <div>
                  <h4 className="text-[14px] font-[500] text-[#0A0A0A]">Social Media</h4>
                  <p className="text-[12px] font-[400] leading-[16px] text-[#4B5563]">Promoting on social platforms</p>
                </div>
              </div>
            </div>

            {/* CARD - Email Marketing */}
            <div
              onClick={() => handleMarketingCard("emailMarketing")}
              className={`checkbox-card cursor-pointer border rounded-[12px] p-[16px] w-[250px] 
              ${formData.marketingChannels.emailMarketing ? "border-[#1E3A8A] bg-[#EEF4FF]" : "border-[#DBDBDB]"}
              `}
            >
              <div className="flex gap-[20px] items-center">
                <input
                  type="checkbox"
                  checked={formData.marketingChannels.emailMarketing}
                  readOnly
                />
                <div>
                  <h4 className="text-[14px] font-[500] text-[#0A0A0A]">Email Marketing</h4>
                  <p className="text-[12px] font-[400] leading-[16px] text-[#4B5563]">Sending marketing emails</p>
                </div>
              </div>
            </div>

            {/* Add your other cards (Paid Ads, SEO, etc.) the same way */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiQuestion;
