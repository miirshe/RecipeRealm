import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import { Link } from "react-router-dom"
import { MdUploadFile } from "react-icons/md";
import { useCurrentUserQuery, useUpdateCurrentUserMutation } from "../redux/slices/userSlice";
import { useAddProfileMutation, useFetchUserProfileQuery, useUpdateProfileMutation } from "../redux/slices/ProfileSlice";
import { toast } from "react-toastify";
import axios from "axios";
const EditProfile = () => {
	const { data: current_user = [] } = useCurrentUserQuery();
	const { data: user_profile = [] } = useFetchUserProfileQuery();
	const [updateCurrentUser] = useUpdateCurrentUserMutation();
	const [addProfile] = useAddProfileMutation();
	const [updateProfile] = useUpdateProfileMutation();

	const userProfile = user_profile?.UserProfile || [];
	const user = current_user?.message || [];
	const [files, setFiles] = useState(null);
	const initialValues = {
		username: user?.username || '',
		email: user?.email || '',
		firstName: userProfile?.firstName || '',
		lastName: userProfile?.lastName || '',
		bio: userProfile?.bio || '',
		facebookLink: userProfile?.facebookLink || '',
		youtubeLink: userProfile?.youtubeLink || '',
		twitterLink: userProfile?.twitterLink || '',
		githubLink: userProfile?.githubLink || ''
	}
	const upload = async () => {
		try {
			const formData = new FormData();
			formData.append('file', files || '');
			const res = await axios.post('https://reciperealm-lf70.onrender.com/api/upload',formData);
			return res.data;
		} catch (error) {
			console.log('error : ',error.message);
		}
	}
	const handleFileUpload = (event) => {
		const uploadfile = event.target.files[0];
		if (uploadfile) {
			setFiles(uploadfile);
		}
	}

	const handleSubmit = async (values, { resetForm }) => {
		try {
			const avatar = await upload();
			const {
				username, email,
				firstName, lastName,
				bio, facebookLink,
				youtubeLink, twitterLink, githubLink } = values;
			if (!userProfile) {
				addProfile({
					firstName: firstName,
					lastName: lastName,
					bio: bio,
					facebookLink: facebookLink,
					youtubeLink: youtubeLink,
					twitterLink: twitterLink,
					githubLink: githubLink,
					avatar : avatar
				}).then((res) => {
					const status = res.status;
					if (status) {
						toast.success(res?.message)
					} else {
						toast.error(res?.message)
					}
				})
			} else {
				updateCurrentUser({
					username: username,
					email: email
				});
				updateProfile({
					firstName: firstName,
					lastName: lastName,
					bio: bio,
					facebookLink: facebookLink,
					youtubeLink: youtubeLink,
					twitterLink: twitterLink,
					githubLink: githubLink,
					avatar : avatar
				}).then((res) => {
					const status = res.status;
					if (status) {
						toast.success(res?.message)
					} else {
						toast.error(res?.message)
					}
				})
			}
			resetForm();
		} catch (error) {
			console.log(error.message);
		}
	}
	return (
		<div className="mt-24 w-full p-4">
			<p className="p-5 text-start text-lg space-x-3"> <Link to='/'>Home</Link> / <span className=" text-[#00A699]">Edit Profile</span></p>
			<div className="w-full md:w-[70%] mx-auto">
				<Formik
					enableReinitialize
					initialValues={initialValues} onSubmit={handleSubmit}>
					<Form className="p-3 space-y-5 text-black">
						<div className="w-full flex flex-col justify-center items-center relative space-y-2">
							<h1 className=" text-xl text-white">Profile picture</h1>
							<input className="hidden w-full rounded shadow outline-[#00A699]" type="file" accept="image/*" name="file" id="file"
								onChange={handleFileUpload} />
							<label className=" absolute left-[10%] md:left-[36%]  top-16 cursor-pointer p-2 bg-white rounded" htmlFor="file"><MdUploadFile className="inline" size={20} /> Edit</label>
							{files ? <img className="w-36 h-36 rounded-full shadow-2xl" src={URL.createObjectURL(files || ' ')} alt="" />
								: <img className="w-36 h-36 rounded-full shadow-2xl " src={userProfile?.avatar ? `uploads/${userProfile?.avatar}` : ''} alt="" />}
						</div>
						<div className="w-full grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-3">
							<div className="w-full space-y-2">
								<h1 className=" text-xl text-white">Username</h1>
								<Field type="text" className="w-full p-3 rounded shadow outline-[#00A699]" placeholder="Enter username" name="username" />
								<ErrorMessage name="username" className="text-red-500" />
							</div>
							<div className="w-full space-y-2">
								<h1 className=" text-xl text-white">Email</h1>
								<Field type="text" className="w-full p-3 rounded shadow outline-[#00A699]" placeholder="Enter email" name="email" />
								<ErrorMessage name="email" className="text-red-500" />
							</div>
						</div>
						<div className="w-full grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-3">
							<div className="w-full space-y-2">
								<h1 className=" text-xl text-white">First Name</h1>
								<Field type="text" className="w-full p-3 rounded shadow outline-[#00A699]" placeholder="Enter first name" name="firstName" />
								<ErrorMessage name="firstName" className="text-red-500" />
							</div>
							<div className="w-full space-y-2">
								<h1 className=" text-xl text-white">Last Name</h1>
								<Field type="text" className="w-full p-3 rounded shadow outline-[#00A699]" placeholder="Enter last name" name="lastName" />
								<ErrorMessage name="lastName" className="text-red-500" />
							</div>
						</div>
						<h1 className=" text-xl text-white">Bio</h1>
						<div className="w-full">
							<Field as="textarea" rows='8' className="w-full rounded shadow outline-[#00A699]" placeholder="Enter Bio" name="bio" />
							<ErrorMessage name="bio" className="text-red-500" />
						</div>
						<h1 className=" text-xl text-white">Social accounts</h1>
						<div className="mt-5 w-full grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-3">
							<div className="w-full">
								<Field type="text" className="w-full p-3 rounded shadow outline-[#00A699]" placeholder="Enter facebook link " name="facebookLink" />
								<ErrorMessage name="facebookLink" className="text-red-500" />
							</div>
							<div className="w-full">
								<Field type="text" className="w-full p-3 rounded shadow outline-[#00A699]" placeholder="Enter youtube link " name="youtubeLink" />
								<ErrorMessage name="youtubeLink" className="text-red-500" />
							</div>
						</div>
						<div className="w-full grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-3">
							<div className="w-full">
								<Field type="text" className="w-full p-3  rounded shadow outline-[#00A699]" placeholder="Enter twitter link " name="twitterLink" />
								<ErrorMessage name="twitterLink" className="text-red-500" />
							</div>
							<div className="w-full">
								<Field type="text" className="w-full p-3 rounded shadow outline-[#00A699]" placeholder="Enter github link " name="githubLink" />
								<ErrorMessage name="githubLink" className="text-red-500" />
							</div>
						</div>
						<button className="w-full md:w-[40%] p-3 rounded shadow text-white bg-[#00A699]" type="submit">submit</button>
					</Form>
				</Formik>
			</div>
		</div>
	)
}

export default EditProfile