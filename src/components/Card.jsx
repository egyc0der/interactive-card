import React from 'react'
import Logo from './card-logo.svg'
const Card = ({face,data}) => {
  return (
		<div
			className={`w-[25rem] md:w-[30rem] rounded-xl h-[14rem] md:h-[15rem]
                          ${
														face === "front"
															? "bg-bg-front md:bg-bg-front bg-no-repeat bg-cover md:mt-0  mb-[-65px] md:mb-0 ml-[20px] md:mr-[-10rem]"
															: "bg-bg-back md:bg-bg-back bg-no-repeat bg-cover md:bg-contain  md:mt-0 mb-[-97px] md:mb-0 mr-[20px] self-end md:mr-[-15rem]"
													}
                          
                          flex-shrink-0`}
		>
			{face === "front" ? (
				<div className='w-full h-full flex flex-col items-center  md:gap-4 shrink-0'>
					<div className=' w-[80%] h-[3rem] mt-6  md:my-6 shrink-0'>
						<img className='w-15 h-10' src={Logo} alt='' />
					</div>
					<div className=' w-[80%] md:h-[45px] h-[30px] mt-14 md:mt-3 shrink-0 flex items-center tracking-wider font-semibold text-slate-200 text-3xl md:text-4xl'>
						{data.cardnumber}
					</div>
					<div className=' w-[80%] md:h-[45px] h-[30px] mt-3 md:mt-1 shrink-0 flex items-center justify-between font-semibold text-slate-200'>
						<div>{data.cardholder}</div>
						<div>{data.exp_m}/{data.exp_y}</div>
					</div>
				</div>
			) : (
				<div className='w-full h-full flex items-center justify-center'>
					<div className=' text-slate-200 font-bold w-[81%] md:w-[75%] h-10 md:h-11 ml-5 md:mr-16 md:mt-0  flex items-center justify-end pr-3'>
						{data.cvc}
					</div>
				</div>
			)}
		</div>
	);
}

export default Card