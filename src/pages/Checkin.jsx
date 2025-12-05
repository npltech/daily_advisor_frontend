import React from 'react'

const Checkin = () => {
  return (
    <div className="w-full h-full bg-[#F5F7FA] px-[40px] pb-[60px] pt-[24px]">
      <h2 className="text-[20px] sm:text-[24px] leading-[28px] font-[800] text-[#0A0A0A] mb-[5px]">
        Daily Check-in
      </h2>
      <p className="text-[#4B5563] font-[400] text-[14px] leading-[18px] mb-[20px]">
        Track and update your goals
      </p>
      <div className='w-full flex justify-center items-center items-stretch gap-[16px] mt-[24px]'>
        <div className='w-[40%] flex flex-col gap-[12px]'>
          <div className='p-4 bg-[#FFFFFF] rounded-md flex justify-between items-center'>
            <div>
              <p className='text-[#4B5563] text-xs font-normal'>Total Task</p>
              <p className='text-[#0A0A0A] text-2xl font-bold mt-[8px]'>19</p>
            </div>
            <div className='flex justify-center items-center bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB] p-[8px] rounded-md'>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.66667 4.1665H3.33333C2.8731 4.1665 2.5 4.5396 2.5 4.99984V8.33317C2.5 8.79341 2.8731 9.1665 3.33333 9.1665H6.66667C7.1269 9.1665 7.5 8.79341 7.5 8.33317V4.99984C7.5 4.5396 7.1269 4.1665 6.66667 4.1665Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 14.1667L4.16667 15.8333L7.5 12.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8335 5H17.5002" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8335 10H17.5002" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8335 15H17.5002" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className='w-full flex justify-between items-center gap-[12px]'>
            <div className='w-[50%] p-4 bg-[#FFFFFF] rounded-md flex justify-between items-center'>
              <div>
                <p className='text-[#4B5563] text-xs font-normal'>Completed</p>
                <p className='text-[#00C950] text-2xl font-bold mt-[8px]'>3</p>
              </div>
              <div className='flex justify-center items-center bg-gradient-to-r from-[#00C950] to-[#00BC7D] p-[8px] rounded-md'>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9998 5L5.83317 14.1667L1.6665 10" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.3335 8.3335L12.0835 14.5835L10.8335 13.3335" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className='w-[50%] p-4 bg-[#FFFFFF] rounded-md flex justify-between items-center'>
              <div>
                <p className='text-[#4B5563] text-xs font-normal'>Pending</p>
                <p className='text-[#FFD607] text-2xl font-bold mt-[8px]'>16</p>
              </div>
              <div className='flex justify-center items-center bg-gradient-to-r from-[#FFD607] to-[#FE9A00] p-[8px] rounded-md'>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2936_1787)">
                <path d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 6.6665V9.99984" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 13.3335H10.0083" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_2936_1787">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[60%] p-4 bg-[#FFFFFF] rounded-md'>
          <div className='flex items-center gap-[8px]'>
            <div className='flex justify-center items-center bg-gradient-to-r from-[#1E3A8A] to-[#05102D] p-[8px] rounded-md'>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_2936_1834" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
              <path d="M20 0H0V20H20V0Z" fill="white"/>
              </mask>
              <g mask="url(#mask0_2936_1834)">
              <path d="M6.14141 4.32715C6.32891 3.55632 7.42474 3.55632 7.61224 4.32715L8.12891 6.45215C8.19557 6.72715 8.41224 6.94381 8.68724 7.01048L10.8122 7.52715C11.5831 7.71465 11.5831 8.81048 10.8122 8.99798L8.68724 9.51465C8.41224 9.58132 8.19557 9.79798 8.12891 10.073L7.61224 12.198C7.42474 12.9688 6.32891 12.9688 6.14141 12.198L5.62474 10.073C5.55807 9.79798 5.34141 9.58132 5.06641 9.51465L2.94141 8.99798C2.17057 8.81048 2.17057 7.71465 2.94141 7.52715L5.06641 7.01048C5.34141 6.94381 5.55807 6.72715 5.62474 6.45215L6.14141 4.32715Z" fill="white"/>
              <path d="M10.6998 1.95801C10.6832 1.95801 10.6665 1.94551 10.6665 1.92884C10.6665 1.91217 10.6832 1.89551 10.6998 1.89551C10.7165 1.89551 10.729 1.91217 10.729 1.92884C10.729 1.94551 10.7165 1.95801 10.6998 1.95801Z" fill="white"/>
              <path d="M14.5196 4.0168C14.6071 3.65846 15.1155 3.65846 15.203 4.0168L15.4405 5.00013C15.4696 5.1293 15.5655 5.22513 15.6946 5.2543L16.678 5.4918C17.0363 5.5793 17.0363 6.08763 16.678 6.17513L15.6946 6.41263C15.5655 6.4418 15.4696 6.53763 15.4405 6.6668L15.203 7.65013C15.1155 8.00846 14.6071 8.00846 14.5196 7.65013L14.2821 6.6668C14.253 6.53763 14.1571 6.4418 14.028 6.41263L13.0446 6.17513C12.6863 6.08763 12.6863 5.5793 13.0446 5.4918L14.028 5.2543C14.1571 5.22513 14.253 5.1293 14.2821 5.00013L14.5196 4.0168Z" fill="white"/>
              <path d="M16.9467 11.5251C16.4862 11.5251 16.1108 11.1547 16.1108 10.6942C16.1108 10.2338 16.4862 9.8584 16.9467 9.8584C17.4071 9.8584 17.7775 10.2338 17.7775 10.6942C17.7775 11.1547 17.4071 11.5251 16.9467 11.5251Z" fill="white"/>
              <path d="M3.05507 14.9977C2.59461 14.9977 2.21924 14.6274 2.21924 14.1669C2.21924 13.7064 2.59461 13.3311 3.05507 13.3311C3.51553 13.3311 3.8859 13.7064 3.8859 14.1669C3.8859 14.6274 3.51553 14.9977 3.05507 14.9977Z" fill="white"/>
              <path d="M12.3254 11.7479C12.442 11.2729 13.1129 11.2729 13.2295 11.7479L13.5504 13.052C13.592 13.2229 13.7212 13.3562 13.892 13.3979L15.2004 13.7145C15.6754 13.8312 15.6754 14.502 15.2004 14.6187L13.892 14.9395C13.7212 14.9812 13.592 15.1104 13.5504 15.2812L13.2295 16.5895C13.1129 17.0645 12.442 17.0645 12.3254 16.5895L12.0087 15.2812C11.967 15.1104 11.8337 14.9812 11.6629 14.9395L10.3587 14.6187C9.88369 14.502 9.88369 13.8312 10.3587 13.7145L11.6629 13.3979C11.8337 13.3562 11.967 13.2229 12.0087 13.052L12.3254 11.7479Z" fill="white"/>
              </g>
              </svg>
            </div>
            <div className='text-[#0A0A0A] text-xl font-bold'>AI Daily Recommendations</div>
          </div>
          <div className='text-[#4B5563] text-sm font-normal mt-[8px]'>
            <p>Focus on completing your customer feedback tasks early today. Your engagement metrics are trending up—maintain momentum by addressing the identified pain points. Consider allocating extra time to marketing activities this afternoon.</p>
          </div>
        </div>
      </div>
      <div className='mt-[12px] bg-[#FFFFFF] rounded-md p-4'>
        <p className='text-[#0A0A0A] text-sm font-medium'>Marketing & Visibility</p>
        <p className='text-[#4B5563] text-xs font-normal mt-[4px]'>0 of 3 completed</p>
        <div className='mt-[8px]'>
          <div className="flex justify-between text-[#4B5563] font-[400] text-[14px] leading-[18px] mb-[10px]">
            <span>Progress</span>
            <span>0%</span>
          </div>
          <div className="w-full h-[8px] bg-[#F2F2F2] rounded-[16px] overflow-hidden mb-[20px]">
            <div
              className="h-full bg-[#E6C26B] rounded-[16px] transition-all duration-700"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
        <div className='bg-[#F8F9FF] p-[12px] flex items-center gap-[12px] rounded-md'>          
          <span className="w-[12px] h-[12px] border border-[#E4E4E4] rounded-full flex items-center justify-center text-xs">
            
          </span>
          <div>
            <p className='text-sm font-medium text-[#0A0A0A]'>Review Yesterday's Best-Performing Channel</p>
            <p className='text-xs font-normal text-[#4B5563] mt-[4px]'>Check which channel performed better: social, email, website, ads.</p>
          </div>
        </div>      
        <div className='bg-[#F8F9FF] p-[12px] flex items-center gap-[12px] rounded-md mt-[12px]'>          
          <span className="w-[12px] h-[12px] border border-[#E4E4E4] rounded-full flex items-center justify-center text-xs">
            
          </span>
          <div>
            <p className='text-sm font-medium text-[#0A0A0A]'>Create or Share One Value-Based Content Piece</p>
            <p className='text-xs font-normal text-[#4B5563] mt-[4px]'>A post, email, story, tip, or short update.</p>
          </div>
        </div>      
        <div className='bg-[#F8F9FF] p-[12px] flex items-center gap-[12px] rounded-md mt-[12px]'>          
          <span className="w-[12px] h-[12px] border border-[#E4E4E4] rounded-full flex items-center justify-center text-xs">
            
          </span>
          <div>
            <p className='text-sm font-medium text-[#0A0A0A]'>Monitor Your Top Competitor's Activity</p>
            <p className='text-xs font-normal text-[#4B5563] mt-[4px]'>See if they launched new offers, content, or pricing (AI Scan available).</p>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default Checkin