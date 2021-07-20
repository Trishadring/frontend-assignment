import NavBar from "./navbar/navbar";
import TMDB from "../services/TMDB"
import Movies from "./movies/movies";




const App = () => {


	return(
		<div>
      <NavBar/>
      <Movies />
		</div>
	)
}

export default App;