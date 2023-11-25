const ChefInfo = () => {
	return (
		<div className="w-full p-5 mt-5">
			<div className="w-full grid grid-cols-1 md:grid-cols-2 p-1 justify-start items-center space-y-3">
				<img className="w-96 h-96" src="./images/chef.png" alt="" />
				<div className="w-full text-start space-y-5">
					<h1 className=" text-[#00A699] text-3xl">Thank You, Our Esteemed Chefs!</h1>
					<p className=" leading-loose">We would like to express our deepest appreciation and gratitude to our esteemed chefs on RecipeRealm. Your exceptional culinary skills, creativity, and dedication to sharing your culinary masterpieces have made a significant impact on our platform and the lives of our users..</p>
				</div>
			</div>
		</div>
	)
}

export default ChefInfo