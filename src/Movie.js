import React from 'react';

function Movie({ movie }) {
  return (
    <div className="movie">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400x400"} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Type}</p>
    </div>
  );
}


export default Movie;
