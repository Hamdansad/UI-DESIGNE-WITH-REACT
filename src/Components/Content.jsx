import React from 'react'
import pink from '../assets/pink.png'
import green from '../assets/green.png'
import brown from '../assets/brown.png'
function Content() {
    return (
        <div className='w-screen h-[85%]'>
            <div className='w-screen h-[30%]'>
            </div>
            <div className='w-screen  lg:h-[70%]   bg-[#203139] rounded-t-[20%] lg:rounded-t-full flex justify-evenly  items-center  flex-col lg:flex-row gap-[30px]'>
                <div className='w-[50%] h-[50%] lg:w-[18%] lg:h-[68%]  bg-[#9f277e] rounded-full flex justify-center items-center flex-col gap-[5px]'>
                    <img className='w-[50%] lg:w-[70%]  lg:mt-[-25%] mt-[-20%]' src={pink} alt="" />
                    <div className='lg:w-[30%] lg:h-[15%] bg-white text-center rounded-md'>
                        <p>$9.99</p>
                    </div>
                    <p className='text-[10px] lg:text-xl text-white text-center'>Unicorn Frappuccino</p>
                    <p className='text-white text-center text-[10px]'>Add to order +</p>
                </div>
                <div className='w-[50%] h-[50%] lg:w-[18%] lg:h-[68%] bg-[#668247] rounded-full lg:mt-[-15%] flex justify-center items-center flex-col gap-[5px]'>
                    <img className='w-[50%] lg:w-[70%] lg:mt-[-25%] mt-[-20%]' src={green} alt="" />
                    <div className='lg:w-[30%] lg:h-[15%] bg-white text-center rounded-md'>
                        <p>$9.99</p>
                    </div>
                    <p className='text-[10px] lg:text-xl text-white text-center'>Matcha Green</p>
                    <p className='text-white text-center text-[10px]'>Add to order +</p>
                </div>
                <div className='w-[50%] h-[50%] lg:w-[18%] lg:h-[68%] bg-[#bd9150] rounded-full  flex justify-center items-center flex-col'>
                    <img className='w-[100%]  lg:mt-[-15%] mt-[-20%]' src={brown} alt="" />
                    <div className='lg:w-[30%] lg:h-[15%] bg-white text-center rounded-md'>
                        <p>$9.99</p>
                    </div>
                    <p className='lg:text-xl text-white text-center text-[10px]'>Coffee Lette</p>
                    <p className='text-white text-center text-[10px]'>Add to order +</p>
                </div>
            </div>
        </div>
    )
}

export default Content