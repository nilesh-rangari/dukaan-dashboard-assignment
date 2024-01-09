import searchIcon from '../assets/search Icon.svg'
import sortIcon from '../assets/sort Icon.svg'
import downloadIcon from '../assets/download Icon.svg'
import infoIcon from '../assets/info Icon.svg'
import triangleIcon from '../assets/triangle Icon.svg'
import previousIcon from '../assets/previous Icon.svg'
import nextIcon from '../assets/next Icon.svg'




function Transactions(){
    return(
        <div>
            <h1 className='text-[20px] leading-[28px] font-medium text-[#1A181E] mb-[20px]'>Transactions | This Month</h1>
            
            {/* searchbar container */}
            <div className='flex justify-between p-[12px]'>
                {/* searchbar */}
                <div className='flex items-center w-[248px]'>
                    <button className='absolute pl-[16px]'>
                        <img src={searchIcon} alt="search Icon" className='h-[14px] w-[14px] ' />
                    </button>
                    <input type="search" placeholder="Search by order ID..." className='py-[10px] pr-[16px] pl-[38px] border border-[#D9D9D9] rounded-[4px] h-[40px] w-[400px] placeholder-[#999999] bg-[#FFFFFF] outline-none ' />
                </div>
                {/* sort and download */}
                <div className='flex gap-[12px]'>
                    <button className='text-[16px] leading-[24px] font-normal text-[#4D4D4D] flex items-center px-[12px] py-[6px] border border-[#D9D9D9] rounded-[4px]'>
                        Sort 
                        <img src={sortIcon} alt="sort Icon" className='pl-[6px]' /></button>
                    <button className='border border-[#D9D9D9] rounded-[4px] p-[8px]'>
                        <img src={downloadIcon} alt="download Icon" />
                    </button>
                </div>
            </div>
            {/* columns details */}
            <div className='flex items-center justify-between px-[10px] py-[12px] bg-[#F2F2F2] rounded-[4px]'>
                <div className='w-[246px] mr-[40px]'>
                   <h1 className='text-[14px] leading-[20px] font-medium text-[#4D4D4D]'>Order ID</h1>
                </div>
                <div className='flex items-center w-[246px] mr-[40px]'>
                    <h1 className='text-[14px] leading-[20px] font-medium text-[#4D4D4D]'>Order date</h1>
                    <img src={triangleIcon} alt="triangle Icon" className='ml-[4px]' />
                </div>
                <div className='w-[246px] flex justify-end  mr-[40px]'>
                    <h1 className='text-[14px] leading-[20px] font-medium text-[#4D4D4D]'>Order amount</h1>
                </div>
                <div className='flex items-center w-[246px] justify-end'>
                    <h1 className='text-[14px] leading-[20px] font-medium text-[#4D4D4D]'>Transaction fees</h1>
                    <img src={infoIcon} alt="info Icon"  className='ml-[4px]'/>
                </div>
            </div>
            {/* transactions list item */}
            <div className='flex items-center justify-between px-[12px] py-[14px] bg-[#FFFFFF] rounded-[4px]'>
                <div className='w-[246px] mr-[40px]'>
                   <h1 className='text-[14px] leading-[20px] font-medium text-[#146EB4]'>#281209</h1>
                </div>
                <div className='flex items-center w-[246px] mr-[40px]'>
                    <h1 className='text-[14px] leading-[20px] font-normal text-[#1A181E]'>7 July, 2023</h1>
                </div>
                <div className='w-[246px] flex justify-end  mr-[40px]'>
                    <h1 className='text-[14px] leading-[20px] font-normal text-[#1A181E]'>₹1,278.23</h1>
                </div>
                <div className='flex items-center w-[246px] justify-end'>
                    <h1 className='text-[14px] leading-[20px] font-normal text-[#1A181E]'>₹22</h1>
                </div>
            </div>

            {/* page navigation container */}
            <div className='flex justify-center items-center'>
                <div className='flex w-[610px] gap-[24px]'>
                    <button className='flex items-center border border-[#D9D9D9] rounded-[4px]'>
                      <img src={previousIcon} alt="previous Icon" className='p-[6px]' />
                        <p className='py-[6px] pr-[12px] text-[14px] leading-[20px] font-medium text-[#4D4D4D]'>Previous</p>
                    </button>
                    <div className='flex justify-between items-center gap-[8px]'>
                        <button className='w-[28px] h-[28px]'>1</button>
                        <button className='w-[28px] h-[28px]'>...</button>
                        <button className='w-[28px] h-[28px]'>10</button>
                        <button className='w-[28px] h-[28px]'>11</button>
                        <button className='w-[28px] h-[28px]'>12</button>
                        <button className='w-[28px] h-[28px]'>13</button>
                        <button className='w-[28px] h-[28px]'>14</button>
                        <button className='w-[28px] h-[28px]'>15</button>
                        <button className='w-[28px] h-[28px]'>16</button>
                        <button className='w-[28px] h-[28px]'>17</button>
                    <button className='w-[28px] h-[28px]'>18</button>
                    </div>
                    <button className='flex items-center border border-[#D9D9D9] rounded-[4px]'>
                        <p className='py-[6px] pl-[12px] text-[14px] leading-[20px] font-medium text-[#4D4D4D]'>Next</p>
                        <img src={nextIcon} alt="next Icon" className='p-[6px]' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Transactions