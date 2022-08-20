import React, { useState,useEffect } from 'react'
import Done from "./icon-complete.svg";
import {Form,Field, Formik, ErrorMessage} from 'formik';
import * as yup from 'yup';	

const FormCmpnt = ({onFormSubmit}) => {
	const initiaValues = {
			cardholder: "",
			cardnumber: "",
			exp_m: "",
			exp_y: "",
			cvc: "",
		};
	const [formData,setFormData] = useState(initiaValues)
	const [isFormSubmitted,setIsFormSubmitted] = useState(false)
	const handleSubmit = (formikData) => {
		console.log("formikData", formikData);
		onFormSubmit(formikData);
		setIsFormSubmitted(true);
	}
	const handleDone = () => {
		window.location.reload();
	}
	useEffect(() => {
	  setFormData(initiaValues);
		onFormSubmit(formData);
	}, [])
	const validationSchema = yup.object().shape({
		cardholder: yup.string().required("Card Holder is required!"),
		cardnumber: yup
			.string()
			.matches(
				"(\\d{4})\\s(\\d{4})\\s(\\d{4})\\s(\\d{4})",
				"Wrong format, numbers only!"
			)
			.required("Card Number is required!"),
		exp_m: yup.string().required("Can't be blank!"),
		exp_y: yup.string().required("Can't be blank!"),
		exp_y: yup.string().required("Can't be blank!"),
		cvc: yup.string().required("Can't be blank!"),
	});
  return (
		<div className='w-full h-full flex items-end md:items-center pb-10 md:pb-0 justify-center'>
			<div
				className='w-[90%] md:w-[40%] h-[80%] md:h-[50%] 
                      flex flex-col justify-center items-center md:pt-10'
			>
				{isFormSubmitted ? (
					<div className='w-full h-full flex flex-col items-center justify-center gap-10'>
						<img src={Done} alt='' />
						<div className='text-3xl tracking-widest font-bold text-slate-900'>
							THANK YOU!
						</div>
						<div className='text-lg tracking-widest font-semibold text-slate-500'>
							We've added your card details
						</div>
						<button
							onClick={handleDone}
							className='mt-12 rounded-lg w-full bg-slate-900 hover:bg-slate-600 duration-500 py-4 text-white font-semibold'
						>
							Continue
						</button>
					</div>
				) : (
					<Formik
						initialValues={initiaValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						{({ errors, touched }) => (
							<Form className='w-full h-full flex flex-col items-center'>
								<label className='block self-start text-lg font-semibold tracking-[0.2em] mb-2'>
									CARDHOLDER NAME
								</label>
								<Field
									placeholder='JANE APPLESEED'
									name='cardholder'
									type='text'
									className={`outline-none border ${
										errors.cardholder ? "border-red-700" : "border-black"
									} 
											w-[95%] mx-2 rounded-lg h-[13%] px-2 text-3xl mb-2`}
								/>
								{errors.cardholder && touched.cardholder && (
									<div className='text-red-700 text-left w-full mb-4'>
										{errors.cardholder}
									</div>
								)}
								<label className='block self-start text-lg font-semibold tracking-[0.2em] mb-2'>
									CARD NUMBER
								</label>
								<Field
									placeholder='0000 0000 0000 0000'
									name='cardnumber'
									type='text'
									className={`outline-none border ${
										errors.cardnumber ? "border-red-700" : "border-black"
									}
									 w-[95%] mx-2 rounded-lg h-[13%] px-2 text-3xl mb-2`}
								/>
								{errors.cardnumber && touched.cardnumber && (
									<div className='text-red-700 text-left w-full mb-4'>
										{errors.cardnumber}
									</div>
								)}
								<div className='flex items-center justify-start w-full h-[13%]'>
									<label className='rounded-lg h-[100%] tracking-[0.2em] w-[22%] text-lg font-semibold  mb-0 ml-0 '>
										EXP. DATE
									</label>
									<label className='rounded-lg h-[100%] tracking-[0.2em] w-[20%] text-lg font-semibold mb-0 ml-0 px-2'>
										(MM/YY)
									</label>
									<label className='rounded-lg h-[100%] tracking-[0.2em] w-[40%] text-lg font-semibold mb-0 ml-16 px-2'>
										CVC
									</label>
								</div>
								<div className='flex items-center justify-start w-full h-[13%]'>
									<Field
										placeholder='00'
										name='exp_m'
										className={`rounded-lg h-[100%]  w-[20%] outline-none 
										border ${errors.exp_m ? "border-red-700" : "border-black"} 
										text-lg font-semibold  mb-2 ml-2 px-2`}
									/>

									<Field
										placeholder='00'
										name='exp_y'
										className={`rounded-lg h-[100%]  w-[20%] outline-none 
										border ${errors.exp_y ? "border-red-700" : "border-black"} 
										text-lg font-semibold mb-2 ml-2 px-2`}
									/>
									<Field
										placeholder='12345'
										name='cvc'
										className={`rounded-lg h-[100%]  w-[30%] outline-none 
										border ${errors.cvc ? "border-red-700" : "border-black"} 
										text-lg font-semibold mb-2 ml-14 px-2`}
									/>
								</div>
								<div className='flex items-center justify-start w-full h-[13%]'>
									{errors.exp_m && touched.exp_m && (
										<div className='text-red-700 text-left  mb-4'>
											{errors.exp_m}
										</div>
									)}
									{errors.exp_y && touched.exp_y && (
										<div className='text-red-700 text-left ml-4  mb-4'>
											{errors.exp_y}
										</div>
									)}
									{errors.cvc && touched.cvc && (
										<div className='text-red-700 text-left ml-12 mb-4'>
											{errors.cvc}
										</div>
									)}
								</div>
								<button
									type='submit'
									className='mt-12 rounded-lg w-full bg-slate-900 hover:bg-slate-600 duration-500 py-4 text-white font-semibold'
								>
									Confirm
								</button>
							</Form>
						)}
					</Formik>
				)}
			</div>
		</div>
	);
}


export default FormCmpnt;