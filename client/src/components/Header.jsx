import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdAdd, MdEdit, MdLogout, MdOutlineClose, MdOutlineDelete, MdOutlineInfo, MdOutlineMenuOpen } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useCurrentUserQuery } from '../redux/slices/userSlice';
import { FaRegUserCircle } from "react-icons/fa";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
const Header = () => {
	const navigate = useNavigate();
	const { data: user = [] } = useCurrentUserQuery();
	const userToken = Cookies.get('userToken')
	const [authToken, setAuthToken] = useState(false);
	const [showDropList , setShowDropList] = useState(false);
	useEffect(() => {
		if (userToken) {
			setAuthToken(true);
		} else {
			setAuthToken(false)
		}
	}, [userToken])
	console.log(user);
	const [showMenu, setShowMenu] = useState(true);
	const handleLogout = () => {
		Cookies.remove('userToken')
		window.location.reload();
		setTimeout(() => {
			navigate('/');
			toast.success('successfully logout')
		},2000)
	}

	const dropDownMenu = (
		<div className='text-start bg-[#fff]  text-black
		w-[55%] md:w-[45%] lg:w-[25%] 
		absolute right-[30%] top-[45%] md:right-[48%] md:top-[32%] lg:right-14 lg:top-16 p-5
		shadow rounded space-y-3 capitalize z-40 text-lg'>
			<Link to='/add_recipe' className='cursor-pointer flex flex-row justify-start items-center gap-5'> <MdAdd size={25}/> <span>Add Recipe</span></Link>
			<Link to='/recipe' className='cursor-pointer flex flex-row justify-start items-center gap-5'><MdOutlineInfo size={20}/> <span>your Recipe</span></Link>
			<Link to='/profile' className='cursor-pointer flex flex-row justify-start items-center gap-5'><CgProfile size={20}/> <span>Profile</span></Link>
			<Link to='/editProfile' className='cursor-pointer flex flex-row justify-start items-center gap-5'> <MdEdit size={20}/> <span>Edit Profile</span></Link>
			<Link onClick={() => handleLogout()} className='cursor-pointer flex flex-row justify-start items-center gap-5'> <MdLogout size={20}/> <span>Logout</span></Link>
			<Link to='/delete_account' className='cursor-pointer flex flex-row justify-start items-center gap-5 text-red-500'> <MdOutlineDelete size={20}/> <span>Delete account</span></Link>
		</div>
	)
	return (
		<header className="w-full shadow fixed left-0 right-0 top-0 p-4 z-30 bg-[#292D32]">
			<div className='w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10'>
				<div className='w-full flex flex-row justify-between gap-5 lg:w-[30%] relative'>
					<h1 className="text-3xl">🍇 Recipe<span className="text-[#00A699]">Realm</span></h1>
					{
						showMenu ? <MdOutlineMenuOpen onClick={() => setShowMenu(!showMenu)} className='block lg:hidden absolute right-0 top-2' size={30} />
							: <MdOutlineClose onClick={() => setShowMenu(!showMenu)} className='block lg:hidden absolute right-0 top-2' size={30} />
					}
				</div>
				<ul className={`w-full lg:w-[70%] flex flex-col justify-start items-start space-y-5 lg:space-y-0 lg:flex-row lg:justify-evenly lg:items-center ${showMenu ? 'hidden lg:flex lg:flex-row' : 'block h-[90vh] lg:h-fit'}`}>
					<Link className='text-xl ml-4 lg:ml-0' to='/' >Home</Link>
					<Link className='text-xl ml-4 lg:ml-0' to='/recipe' >Recipe</Link>
					<Link className='text-xl ml-4 lg:ml-0' to='/about' >About</Link>
					<Link className='text-xl ml-4 lg:ml-0' to='/contact' >Contact</Link>
					{
						authToken == true ? <div onClick={() => setShowDropList(!showDropList)} className='ml-3 lg:ml-0 flex flex-row justify-start items-center w-fit p-1 gap-3 cursor-pointer'>
							<FaRegUserCircle size={30} className=' text-white'/>
							<span>{user?.message?.username}</span>
						</div>
				: <Link className='text-xl ml-4 lg:ml-0 px-5 py-2 rounded shadow bg-[#00A699] text-white' to='/login' >Login</Link>
					}
					{
						showDropList && dropDownMenu
					}

				</ul>
			</div>
		</header>
	)
}

export default Header