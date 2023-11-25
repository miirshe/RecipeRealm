import { Link } from "react-router-dom"
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { SiLinktree } from "react-icons/si";
const Footer = () => {
	return (
		<div className="w-full p-5 mt-20">
			<footer className="w-full text-lg flex flex-col md:flex-row justify-center items-center p-1 text-start gap-10">
				<p className="text-center md:text-start"> &copy; All reserved  2023  <br className="block md:hidden"/>🍇 Recipe<span className="text-[#00A699]">Realm</span></p>
				<div className="w-fit flex flex-col  md:flex-row justify-start items-center gap-5">
					<p>Follow us </p>
					<div className="flex flex-row justify-start items-center gap-5">
						<Link to='https://github.com/Miirshe'> <FaGithubSquare size={20}/></Link>
						<Link to='https://facebook.com/Miirshe'> <MdFacebook size={20}/></Link>
						<Link to='https://www.linkedin.com/in/miirshe'><FaLinkedinIn size={20}/></Link>
						<Link to='https://linktr.ee/miirshe'><SiLinktree size={20}/></Link>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer