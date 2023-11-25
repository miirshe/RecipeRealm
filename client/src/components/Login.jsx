import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiHide, BiShowAlt } from "react-icons/bi";
import { toast } from 'react-toastify';
import { useLoginUserMutation } from '../redux/slices/userSlice';
const Login = () => {
	const [showPassword , setShowPassword ] = useState('password');
	const [loginUser] = useLoginUserMutation();
	const navigate = useNavigate();
	const initialValues = {
		email : '',
		password: ''
	}
	const onSubmit = (values) => {
		try {
			console.log(values);
			const { email , password} = values;
			loginUser({
				email : email,
				password : password
			}).unwrap().then((res) => {
				const status = res.status
				if(status){
					toast.success(res.message);
					navigate('/')
				}else{
					toast.error(res.message);
				}
			})
		} catch (error) {
			console.log(error.message);
		}
	}
  return (
	<div className='mt-28 md:mt-40 lg:mt-28 w-full p-2 md:p-4'>
		<div className='w-full md:w-[40%] lg:w-[30%] mx-auto p-1 md:p-2'>
			<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}>
				<Form className='w-full text-black p-3 md:p-5 flex flex-col justify-start items-start gap-3 space-y-5 bg-white
				rounded shadow'>
					<h1 className='text-2xl uppercase w-full text-[#00A699] tracking-tighter text-center'>Login</h1>
					<div className='w-full space-y-2'>
						<Field className="w-full border-2  border-[#00A699] outline-[#00A699] p-3 rounded shadow" type="text" placeholder= "Enter your email" name="email"/>
						<ErrorMessage name='email' className='text-red-500'/>
					</div>
					<div className='w-full space-y-2 relative'>
						<Field className="w-full p-3 rounded shadow border-2 border-[#00A699] outline-[#00A699]" type={`${showPassword}`} placeholder= "Enter your password" name="password"/>
						{ showPassword == 'password' ? <BiHide onClick={()=>setShowPassword("text")} className=' cursor-pointer absolute right-5 top-3' size={20}/> : <BiShowAlt onClick={()=>setShowPassword("password")} className='cursor-pointer absolute right-5 top-3' size={20}/>}
						<ErrorMessage name='password' className='text-red-500'/>
					</div>
					<button className='w-full p-3 rounded shadow  bg-[#00A699] text-white' type='submit'>Login</button>
					<p className='w-full text-center'>I do not have account <Link className=' text-lg text-[#00A699]' to='/register'>Register</Link></p>
				</Form>
			</Formik>
		</div>
	</div>
  )
}

export default Login