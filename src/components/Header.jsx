import searchIcon from '../assets/search Icon.svg'
import howIcon from '../assets/how Icon.svg'

import expandIcon from '../assets/expand Icon.svg'
import notificationIcon from '../assets/notification Icon.svg'

function Header() {
    return(
        <div className="flex justify-between">
            <div className="flex items-center">
                <h1 className='text-[15px] leading-[22px] font-normal text-[#1A181E]'>Payments</h1>
                <div className='flex items-center pl-[16px]'>
                    <img src={howIcon} alt="how Icon" />
                   <p className='text-[12px] leading-[16px] font-normal text-[#4D4D4D] pl-[6px]'>How it works</p>
                </div>
            </div>
            {/* searchbar */}
            <div className='flex items-center '>
                <button className='absolute pl-[16px]'>
                    <img src={searchIcon} alt="search Icon" className='h-[16px] w-[16px] ' />
                </button>
                <input type="search" placeholder="Search features, tutorials, etc." className='py-[9px] pr-[12px] pl-[40px] rounded-[6px] h-[40px] w-[400px] placeholder-[#808080] bg-[#F2F2F2] outline-none ' />
            </div>
            {/* icons group */}
            <div className='flex gap-[12px]'>
                <img src={notificationIcon} alt="notification Icon" />
                <img src={expandIcon} alt="expand Icon" />
            </div>
        </div>
    )
}

export default Header