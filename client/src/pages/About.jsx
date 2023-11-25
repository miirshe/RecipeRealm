import { Link } from "react-router-dom"

const About = () => {
	return (
		<div className="mt-24 w-full p-4">
			<p className="text-start p-5 text-lg space-x-3"> <Link to='/'>Home</Link> / <span className=" text-[#00A699]">About Us</span></p>
			<div className="mt-14 w-full grid grid-cols-1 lg:grid-cols-2 justify-start p-2 gap-5">
				<img className="rounded" src="./images/mareefo.jpg" alt="" />
				<div className="w-full">
					<p className="text-justify lg:text-start"> <span className=" text-[#00A699] text-xl">RecipeRealm</span> is a comprehensive platform that aims to connect food enthusiasts, home cooks,
						and professional chefs from around the world. It offers a centralized hub where users can share,
						explore, and learn from a diverse collection of recipes. With a focus on user engagement and nutritional awareness,
						RecipeRealm strives to foster a vibrant community passionate about culinary experiences.</p>
					<p className=" text-justify lg:text-start mt-3">
						<span className=" text-[#00A699] text-xl">Vission</span>  Our vision is to empower individuals to discover, create,
						and share culinary masterpieces by providing them with a user-friendly platform.
						RecipeRealm aspires to become the go-to destination for recipe enthusiasts,
						offering a vast range of high-quality recipes, expert advice,
						and a supportive community that encourages creativity and exploration in the kitchen.
					</p>
					<p className="text-justify lg:text-start mt-3">
						<span className=" text-[#00A699] text-xl">Mission</span> Our mission is to build a robust backend system that enables users to share and browse recipes seamlessly.
						We aim to create an inclusive, engaging, and interactive environment where users can connect with fellow food lovers,
						discover new flavors, and enhance their cooking skills. By incorporating user roles, nutritional information,
						and an intuitive interface, RecipeRealm will serve as a valuable resource for individuals at all levels of culinary expertise
					</p>
				</div>
			</div>
			<div className="w-full p-1">
			<h1 className="text-start text-3xl text-[#00A699] tracking-widest">Features</h1>
				<div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5">
					<div className="w-fit flex flex-row justify-start items-center gap-4">
						<p className="px-3 py-2 rounded-full bg-[#00A699] text-xl">01</p>
						<p>User Role</p>
					</div>
					<div className="w-fit flex flex-row justify-start items-center gap-4">
						<p className="px-3 py-2 rounded-full bg-[#00A699] text-xl">02</p>
						<p>Recipe Management</p>
					</div>
					<div className="w-fit flex flex-row justify-start items-center gap-4">
						<p className="px-3 py-2 rounded-full bg-[#00A699] text-xl">03</p>
						<p>Social Interaction</p>
					</div>
					<div className="w-fit flex flex-row justify-start items-center gap-4">
						<p className="px-3 py-2 rounded-full bg-[#00A699] text-xl">04</p>
						<p>Rating and Reviews</p>
					</div>
					<div className="w-fit flex flex-row justify-start items-center gap-4">
						<p className="px-3 py-2 rounded-full bg-[#00A699] text-xl">05</p>
						<p>Nutritional Information</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About