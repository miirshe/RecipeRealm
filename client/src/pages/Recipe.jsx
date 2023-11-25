import { Link } from 'react-router-dom'
const Recipe = () => {
	const RecipeData = [
		{
			"id": 1,
			"title": "fast food",
			"description": "Welcome to RecipeShare! Share, Discover, and Delight in Delicious Recipe",
			"avatar": "./images/mareefo.jpg"
		},
		{
			"id": 2,
			"title": "fast food",
			"description": "Welcome to RecipeShare! Share, Discover, and Delight in Delicious Recipe",
			"avatar": "./images/mareefo.jpg"
		},
		{
			"id": 3,
			"title": "fast food",
			"description": "Welcome to RecipeShare! Share, Discover, and Delight in Delicious Recipe",
			"avatar": "./images/mareefo.jpg"
		},
		{
			"id": 4,
			"title": "fast food",
			"description": "Welcome to RecipeShare! Share, Discover, and Delight in Delicious Recipe",
			"avatar": "./images/mareefo.jpg"
		}
	]
	return (
		<div className="mt-20 w-full p-4">
			<p className=" text-start p-3 text-lg space-x-3"> <Link to='/'>Home</Link> / <span className=" text-[#00A699]">Our Recipe</span></p>
			<div className='w-full mt-5 '>
				<input className="w-full md:w-[50%] p-3 rounded shadow outline-[#00A699]" type="text" placeholder="search for category or ingredients" />
				<div className='mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-center gap-5'>
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
				</div>
			</div>
		</div>
	)
}

export default Recipe