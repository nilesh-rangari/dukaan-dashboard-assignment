import searchIcon from '../assets/search Icon.svg'
import sortIcon from '../assets/sort Icon.svg'
import downloadIcon from '../assets/download Icon.svg'
import infoIcon from '../assets/info Icon.svg'
import triangleIcon from '../assets/triangle Icon.svg'
import previousIcon from '../assets/previous Icon.svg'
import nextIcon from '../assets/next Icon.svg'
import TransactionItem from './TransactionItem'


let transactionsList = [
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    },
    {
        "orderId":"#281209",
        "orderDate":"7 July, 2023",
        "orderAmount":"₹1,278.23",
        "transactionFees":"₹22",
    }
]



function Transactions(){

    return(
        <div>
            <h1 className='text-[20px] leading-[28px] font-medium text-[#1A181E] mb-[20px]'>Transactions | This Month</h1>
            {/* transactions card */}
            <div className='shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] pb-[24px] px-[12px] pt-[12px]'>
                {/* searchbar container */}
                <div className='flex justify-between pb-[12px]'>
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

                {/* transactions list items */}            
                <>
                {transactionsList.map((item) => <TransactionItem key={item.orderId} orderId={item.orderId} orderDate={item.orderDate} orderAmount={item.orderAmount} transactionFees={item.transactionFees} />)}
                </>
                

                {/* page navigation container */}
                <div className='flex justify-center items-center mt-[24px]'>
                    <div className='flex w-[610px] gap-[24px]'>
                        <button type='button' className='flex items-center border border-[#D9D9D9] rounded-[4px]'>
                        <img src={previousIcon} alt="previous Icon" className='p-[6px]' />
                            <p className='py-[6px] pr-[12px] text-[14px] leading-[20px] font-medium text-[#4D4D4D]'>Previous</p>
                        </button>
                        <div className='flex justify-between items-center gap-[8px]'>
                            <button type='button' className='w-[28px] h-[28px] text-[14px] leading-[20px] font-normal text-[#4D4D4D]'>1</button>
                            <button type='button' className='w-[28px] h-[28px] text-[14px] leading-[20px] font-normal text-[#4D4D4D]'>...</button>
                            <button type='button' className='w-[28px] h-[28px] bg-[#146EB4] text-[14px] leading-[20px] font-medium text-white rounded-[4px]'>10</button>
                            <button type='button' className='w-[28px] h-[28px] text-[14px] leading-[20px] font-normal text-[#4D4D4D]'>11</button>
                            <button type='button' className='w-[28px] h-[28px] text-[14px] leading-[20px] font-normal text-[#4D4D4D]'>12</button>
                            <button type='button' className='w-[28px] h-[28px] text-[14px] leading-[20px] font-normal text-[#4D4D4D]'>13</button>
                            <button type='button' className='w-[28px] h-[28px] text-[14px] leading-[20px] font-normal text-[#4D4D4D]'>14</button>
                            <button type='button' className='w-[28px] h-[28px] text-[14px] leading-[20px] font-normal text-[#4D4D4D]'>15</button>
                            <button type='button' className='w-[28px] h-[28px] text-[14px] leading-[20px] font-normal text-[#4D4D4D]'>16</button>
                            <button type='button' className='w-[28px] h-[28px] text-[14px] leading-[20px] font-normal text-[#4D4D4D]'>17</button>
                        <button type='button' className='w-[28px] h-[28px] text-[14px] leading-[20px] font-normal text-[#4D4D4D]'>18</button>
                        </div>
                        <button type='button' className='flex items-center border border-[#D9D9D9] rounded-[4px]'>
                            <p className='py-[6px] pl-[12px] text-[14px] leading-[20px] font-medium text-[#4D4D4D]'>Next</p>
                            <img src={nextIcon} alt="next Icon" className='p-[6px]' />
                        </button>
                    </div>
                </div>
                </div>

        </div>
    )
}

export default Transactions