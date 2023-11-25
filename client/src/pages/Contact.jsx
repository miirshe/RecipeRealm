import { ErrorMessage, Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { MdLocalPhone, MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
const Contact = () => {
	return (
		<div className="mt-24 w-full p-4 ">
			<p className="p-5 text-start text-lg space-x-3"> <Link to='/'>Home</Link> / <span className=" text-[#00A699]">Contact Us</span></p>
			<div className="mt-10 w-full p-1 space-y-4">
				<h1 className="text-3xl text-start text-[#00A699]">Get in touch</h1>
				<div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-start space-y-3 gap-4">
					<div className="w-full">
						<Formik>
							<Form className="w-full grid grid-cols-1 justify-start space-y-3">
								<div className="w-full grid grid-cols-2 justify-start gap-3">
									<div className="w-full">
										<Field className="outline-[#00A699] w-full p-3 rounded shadow" type="text" placeholder="Enter Your Name" name="name" />
										<ErrorMessage className=" text-red-500" name="name" />
									</div>
									<div className="w-full">
										<Field className="outline-[#00A699] w-full p-3 rounded shadow" type="text" placeholder="Enter Your Email" name="email" />
										<ErrorMessage className=" text-red-500" name="email" />
									</div>
								</div>
								<div className="w-full">
									<Field className="outline-[#00A699] w-full p-3 rounded shadow" type="text" placeholder="Enter Your Subject" name="subject" />
									<ErrorMessage className=" text-red-500" name="subject" />
								</div>
								<div className="w-full">
									<Field className="outline-[#00A699] w-full p-3 rounded shadow" as="textarea" placeholder="Enter Your Subject" name="subject" cols="40" rows="7" />
									<ErrorMessage className=" text-red-500" name="subject" />
								</div>
								<button className="bg-[#00A699] p-3 rounded shadow">Send Message</button>
							</Form>
						</Formik>
					</div>
					<div className="w-full bg-[#00A699] p-5 rounded shadow space-y-3">
						<h1 className="text-3xl tracking-widest">Contact Us</h1>
						<div className="w-full flex flex-col md:flex-row justify-start items-center gap-5">
							<span className="p-3 rounded-full bg-[#292D32]"> <MdLocationOn size={25}/></span>
							<p className="text-base md:text-lg tracking-widest capitalize">Address : mogadishu-somalia</p>
						</div>
						<div className="w-full flex flex-col md:flex-row justify-start items-center gap-5">
							<span className="p-3 rounded-full bg-[#292D32]"> <MdLocalPhone size={25}/></span>
							<p className="text-base md:text-lg tracking-widest">Phone : 252 618302314</p>
						</div>
						<div className="w-full flex flex-col md:flex-row justify-start items-center gap-5">
							<span className="p-3 rounded-full bg-[#292D32]"> <MdOutlineMailOutline size={25}/></span>
							<p className="text-base md:text-lg tracking-widest">Email : miirshe@gmail</p>
						</div>
						<div className="w-full flex flex-col md:flex-row justify-start items-center gap-5">
							<span className="p-3 rounded-full bg-[#292D32]"> <BiWorld size={25}/></span>
							<p className="text-base md:text-lg tracking-widest">Website : miirshe.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact