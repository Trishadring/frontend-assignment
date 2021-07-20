import styles from "./movieRow.css";

const MovieRow = ({film}) => {
   const posterUrl = 'https://image.tmdb.org/t/p/w780/' + film.poster_path; 
  return(
  <div class="contain" >
    <img className='movieImg' src={posterUrl} alt='img' />
    <div className="movieTitles">
      <p className="Title">{film.title}</p>
      {/* <p className="score">{film.vote_average}</p> */}
    </div>
  </div>
  )
}

export default MovieRow;