import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const PopularRecipe = () => {
	const RecipeData = [
		{
			"id":1,
			"title":"fast food",
			"description":"Welcome to RecipeShare! Share, Discover, and Delight in Delicious Recipe",
			"avatar":"./images/mareefo.jpg"
		},
		{
			"id":2,
			"title":"fast food",
			"description":"Welcome to RecipeShare! Share, Discover, and Delight in Delicious Recipe",
			"avatar":"./images/mareefo.jpg"
		},
		{
			"id":3,
			"title":"fast food",
			"description":"Welcome to RecipeShare! Share, Discover, and Delight in Delicious Recipe",
			"avatar":"./images/mareefo.jpg"
		},
		{
			"id":4,
			"title":"fast food",
			"description":"Welcome to RecipeShare! Share, Discover, and Delight in Delicious Recipe",
			"avatar":"./images/mareefo.jpg"
		}
	]
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	return (
		<div className="w-full p-5 mt-10">
			<h1 className=" text-2xl text-center capitalize text-[#00A699]">🍇 Popular Recipes</h1>
			<div className="mt-10">
				<Carousel responsive={responsive}>
					{
						RecipeData.map(data => {
							return <div className="w-full space-y-2 p-1" key={data.id}>
								<img className="w-full h-72" src={data.avatar} alt="" />
								<div className="space-y-1 text-start">
									<p>{data.title}</p>
									<p>{data.description}</p>
								</div>
							</div>
						})
					}
				</Carousel>
			</div>
		</div>
	)
}

export default PopularRecipe