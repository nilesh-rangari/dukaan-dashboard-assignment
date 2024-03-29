import storeImageHD from '../assets/storeImageHD.png'

import downArrow from '../assets/DownArrow.svg'
import homeIcon from '../assets/home Icon.svg'
import ordersIcon from '../assets/orders Icon.svg'
import productsIcon from '../assets/products Icon.svg'
import deliveryIcon from '../assets/delivery Icon.svg'

import marketingIcon from '../assets/marketing Icon.svg'
import analyticsIcon from '../assets/analytics Icon.svg'
import paymentsIcon from '../assets/payments Icon.svg'
import toolsIcon from '../assets/tools Icon.svg'

import discountsIcon from '../assets/discounts Icon.svg'
import audienceIcon from '../assets/audience Icon.svg'
import appearanceIcon from '../assets/appearance Icon.svg'
import pluginsIcon from '../assets/plugins Icon.svg'

import creditsIcon from '../assets/credits Icon.svg'


function Navbar() {
    return(
        // main sidebar container
        <div className='bg-[#1E2640] flex flex-col justify-between h-[1498px] w-[224px] px-[8px] py-[16px]'>
        {/* sidebar container */}

            {/* top section container */}
            <div>
                    {/* top profile section */}
                <div className="flex justify-between items-center w-[192px] h-[42px] mx-[8px] mb-[24px]">
                    <div className='flex'>
                        <div className='w-[40px] h-[40px]' >
                            <img src={storeImageHD} alt="store image" className='w-[40px] h-[40px] rounded-[4px]' />
                        </div>
                        <div className='ml-[12.5px]'>
                            <h1 className='text-[15px] leading-[22px] font-medium text-white'>Nishyam</h1>
                            <p className='text-[13px] leading-[16px] font-normal text-white underline opacity-80' >Visit Store</p>
                        </div>
                    </div>
                    <div className='w-[20px] h-[20px]'>
                        <img src={downArrow} alt="Down Arrow" />
                    </div>
                </div>

                {/* menu container */}

                <div className='flex items-center py-[8px] px-[16px] mb-[4px]'>
                    <img src={homeIcon} alt="home icon" className='w-[20px] h-[20px] opacity-80' />
                    <div>
                      <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px] opacity-80'>Home</h1>
                    </div>
                </div>
                <div className='flex items-center py-[8px] px-[16px] mb-[4px]'>
                    <img src={ordersIcon} alt="home icon" className='w-[20px] h-[20px] opacity-80' />
                    <div>
                    <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px] opacity-80'>Orders</h1>
                    </div>
                </div>

                <div className='flex items-center py-[8px] px-[16px] mb-[4px]'>
                    <img src={productsIcon} alt="home icon" className='w-[20px] h-[20px] opacity-80' />
                    <div>
                    <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px] opacity-80'>Products</h1>
                    </div>
                </div>
                <div className='flex items-center py-[8px] px-[16px] mb-[4px]'>
                    <img src={deliveryIcon} alt="home icon" className='w-[20px] h-[20px] opacity-80' />
                    <div>
                        <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px] opacity-80'>Delivery</h1>
                    </div>
                </div>

                <div className='flex items-center py-[8px] px-[16px] mb-[4px]'>    
                    <img src={marketingIcon} alt="home icon" className='w-[20px] h-[20px] opacity-80' />
                    <div>
                    <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px] opacity-80'>Marketing</h1>
                    </div>
                </div>
                <div className='flex items-center py-[8px] px-[16px] mb-[4px]'>
                    <img src={analyticsIcon} alt="home icon" className='w-[20px] h-[20px] opacity-80' />
                    <div>
                    <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px] self-center opacity-80'>Analytics</h1>
                    </div>
                </div>

                <div className='flex items-center py-[8px] px-[16px] mb-[4px] bg-[#FFFFFF1A]'>
                    <img src={paymentsIcon} alt="home icon" className='w-[20px] h-[20px]' />
                    <div>
                    <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px]'>Payments</h1>
                    </div>
                </div>
                <div className='flex items-center py-[8px] px-[16px] mb-[4px]'>
                    <img src={toolsIcon} alt="home icon" className='w-[20px] h-[20px] opacity-80' />
                    <div>
                        <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px] opacity-80'>Tools</h1>
                    </div>
                </div>

                <div className='flex items-center py-[8px] px-[16px] mb-[4px]'>
                    <img src={discountsIcon} alt="home icon" className='w-[20px] h-[20px] opacity-80' />
                    <div>
                    <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px] opacity-80'>Discounts</h1>
                    </div>
                </div>
                <div className='flex items-center py-[8px] px-[16px] mb-[4px]'>
                    <img src={audienceIcon} alt="home icon" className='w-[20px] h-[20px] opacity-80' />
                    <div>
                    <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px] opacity-80'>Audience</h1>
                    </div>
                </div>

                <div className='flex items-center py-[8px] px-[16px] mb-[4px]'>
                    <img src={appearanceIcon} alt="home icon" className='w-[20px] h-[20px] opacity-80' />
                    <div>
                    <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px] opacity-80'>Appearance</h1>
                    </div>
                </div>
                <div className='flex items-center py-[8px] px-[16px] mb-[4px]'>
                    <img src={pluginsIcon} alt="home icon" className='w-[20px] h-[20px] opacity-80' />
                    <div>
                    <h1 className='text-white text-[14px] leading-[20px] font-medium ml-[12px] opacity-80'>Plugins</h1>
                    </div>
                </div>
            </div>

            {/* bottom credits card */}
            <div>
                <div className="flex items-center bg-[#353C53] w-[192px] h-[54px] ml-[8px] rounded-[4px] mt-[16px]">
                            <div className='bg-[#FFFFFF1A] ml-[12px] flex justify-center items-center rounded-[4px] w-[36px] h-[36px]' >
                                <img src={creditsIcon} alt="credits Icon" />
                            </div>
                            <div className='ml-[12px]'>
                                <h1 className='text-[13px] leading-[16px] font-normal text-white'>Available credits</h1>
                                <p className='text-[16px] leading-[24px] font-medium text-white' >222.10</p>
                            </div>
                    </div>
            </div>
       
    </div>
    )
}

export default Navbar;