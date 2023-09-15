






const Movie = ({movie}) => {
  return (
    <li className="movie1" key={movie.id}>
      <div className="movie-class">
        <img src={movie.poster} alt="" width="300px" height="500px" />

        <p>
          The Movie Name is {movie.title} Realized in {movie.year}, the Movie
          Run tim is {movie.runtime}, with IMDb rating of {movie.rating} ! go
          and watch ! and make your Weekend so Special !
        </p>
      </div>
    </li>
  );
};


export default Movie;




// here {movie} is nothing but property props 
// in place of movie we can also pass values like this {poster, title , runtime, year , rating, id}
// {poster, title , runtime, year , rating, id} = {props} or  {movie}
// if we use movie then we have to pass like this inside {movie.title} ,{ movie.runtime}, {movie.year} etc 
// {poster, title , runtime, year , rating, id} if we use like this then we can pass directly like this {poster},{titile} ,  {year} 