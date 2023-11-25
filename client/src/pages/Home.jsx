import { ChefInfo, Navbar, PopularRecipe } from '../config'
const Home = () => {
  return (
	<div>
		<Navbar/>
		<PopularRecipe/>
		<ChefInfo/>
	</div>
  )
}

export default Home