import dropdownIcon from '../assets/dropdown Icon.svg'

function Overview() {
    return(
        <div className="w-[1216px] p-[32px] bg-[#FAFAFA]">
            <div className="flex justify-between mb-[24px]">
                <div>
                    <h1 className='text-[20px] leading-[28px] font-medium text-[#1A181E]'>Overview</h1>
                </div>
                <div className="">
                    <button className="w-[137px] flex items-center  border border-[#D9D9D9] rounded-[4px] ">
                            <p className='text-[16px] leading-[24px] font-normal text-[#4D4D4D] pl-[14px] pr-[7px] py-[6px]'>Last Month</p>
                            <img src={dropdownIcon} alt="dropdown Icon" className='w-[16px] h-[16px]'/>
                    </button>
                </div>
            </div>
            {/* cards container */}
            <div className="flex justify-between gap-[20px]">
                {/* card1 */}
                <div className="p-[20px] bg-white shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] w-[566px] rounded-[8px]">
                    <p className="text-[16px] leading-[24px] font-normal text-[#4D4D4D] mb-[16px]">Online Orders</p>
                    <h1 className="text-[32px] leading-[38px] font-medium text-[#1A181E]">231</h1>
                </div>
                {/* card2 */}
                <div className="p-[20px]  bg-white shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] w-[566px] rounded-[8px]">
                    <p className="text-[16px] leading-[24px] font-normal text-[#4D4D4D] mb-[16px]">Amount received</p>
                    <h1 className="text-[32px] leading-[38px] font-medium text-[#1A181E]">₹23,92,312.19</h1>
                </div>
            </div>
        </div>
    )
}

export default Overview