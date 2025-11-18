import React from 'react'


const AiQuestion = () => {
  return (
     <div className="flex items-center justify-center bg-[#ffffff] my-[80px]">
      <div className="onboarding-border w-[900px] bg-[#ffffff] border-[1px] border-[#FFFFFF]-200 rounded-[24px] shadow-sm p-[40px]">
        {/* Header */}
        <div className="flex justify-between text-[14px] leading-[18px] font-[500] text-[#4B5563] mb-[20px]">
          <span>Getting to know you</span>
          <span className="font-medium text-[#1E3A8A]">Step 2 of 3</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-[12px] bg-[#E4E4E4] rounded-full mb-[20px]">
          <div className="w-2/3 h-[12px] bg-[#1E3A8A] rounded-full"></div>
        </div>
        </div>
        </div>
  )
}

export default AiQuestion