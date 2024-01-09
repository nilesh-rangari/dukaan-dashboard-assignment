function TransactionItem({orderId,orderDate,orderAmount,transactionFees}) {
    return(
        <div className='flex items-center justify-between border-b border-b-[#E6E6E6] px-[12px] py-[14px] bg-[#FFFFFF] rounded-[4px]'>
                <div className='w-[246px] mr-[40px]'>
                   <h1 className='text-[14px] leading-[20px] font-medium text-[#146EB4]'>{orderId}</h1>
                </div>
                <div className='flex items-center w-[246px] mr-[40px]'>
                    <h1 className='text-[14px] leading-[20px] font-normal text-[#1A181E]'>{orderDate}</h1>
                </div>
                <div className='w-[246px] flex justify-end  mr-[40px]'>
                    <h1 className='text-[14px] leading-[20px] font-normal text-[#1A181E]'>{orderAmount}</h1>
                </div>
                <div className='flex items-center w-[246px] justify-end'>
                    <h1 className='text-[14px] leading-[20px] font-normal text-[#1A181E]'>{transactionFees}</h1>
                </div>
        </div>
    )
}

export default TransactionItem