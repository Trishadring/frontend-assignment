import styles from "./movieRow.css";

const MovieRow = ({film}) => {
   const posterUrl = 'https://image.tmdb.org/t/p/w780/' + film.poster_path;

  return(
  <div >
    <img src={posterUrl} alt='img' className='movieImg'/>
    <p className="Title">{film.title}</p>
    <p className="score">{film.vote_average}</p>
  </div>
  )
}

export default MovieRow;