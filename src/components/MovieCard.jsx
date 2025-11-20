function MovieCard({title,poster,rating}) {
  return (
    <div className='movie'>
      <img className='movie-poster' src={poster}/>
    <div className='movie-body'>
      <h3>{title}</h3>
      <p>{rating}</p>
    </div>
    </div>
  )
}

export default MovieCard