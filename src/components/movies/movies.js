import MovieRow from "../movieRow/movieRow";
import styles from "./movies.css";
import TMDB from "../../services/TMDB";
import { useState, useEffect } from 'react';

const Movies = () => {
  const [films, setFilms] = useState([]);
  
  useEffect( async () => {
    const films = await TMDB()
    setFilms(films);
    
  }, []);
  return(
  <div className='Container'>
    <h1 className="recent">Most Recent Movies</h1>
    <div className='Movie_Container'>
        {films.map((film) =>(
          <div key={film.id} className='movie-row'>
            <MovieRow film={film} />
          </div>   
        ))}
      </div>

  </div>
  )
}

export default Movies;