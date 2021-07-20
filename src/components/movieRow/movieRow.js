import styles from "./movieRow.css";

const MovieRow = ({film}) => {
   const posterUrl = 'https://image.tmdb.org/t/p/w780/' + film.poster_path; 
  return(
  <div class="contain" >
    <img className='movieImg' src={posterUrl} alt='img' />
    <div className="score">
      <div className="rating">{film.vote_average}</div>
    </div>
    <div className="movieTitles">
      <p className="Title">{film.title}</p>
    </div>
  </div>
  )
}

export default MovieRow;