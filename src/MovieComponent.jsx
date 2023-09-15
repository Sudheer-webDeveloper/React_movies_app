import Moviesdata from "./Moviesdata";

import Movie from "./Movie";

import './movies.css'

const fetchMovieData = () => {
  return Moviesdata;
};

const MovieComponent = () => {
  const fetchingMovie = fetchMovieData();

  return (
    <div className="movie-container">
      <h2>Movies</h2>

      <ul className="movie-list">
        {fetchingMovie.map((movie) => (
          <Movie movie={movie} key={movie.id} />

        //   <Movie title ={title} year ={year} rating ={rating} runtime ={runtime} poster= {poster} key ={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default MovieComponent;
