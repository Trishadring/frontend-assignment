import dotenv from 'dotenv';

dotenv.config();

const baseUrl = "https://api.themoviedb.org/3/movie";
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

const TMDB = () => {
  const url = `${baseUrl}/now_playing?api_key=${apiKey}`;
	return fetch(url)
		.then( response => response.json() )
  	.then( data => data.results );
}


export default TMDB;