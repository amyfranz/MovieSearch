import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="MovieCard">
      <div className="movie-heading">
        <h2 className="title">{`${movie.Title} - ${movie.Year}`}</h2>
        <h3 className="ratings">{movie.imdbRating} stars</h3>
      </div>
      <div className="movie-content">
        <div className="movie-poster">
          <img
            src={movie.Poster}
            className="poster"
            alt={`${movie.title} poster`}
          />
        </div>
        <div className="movie-info">
          <p className="plot">
            <b>Plot:</b> {movie.Plot}
          </p>
          <p className="directors">
            <b>Director:</b> {movie.Director}
          </p>
          <p className="actors">
            <b>Actors:</b> {movie.Actors}
          </p>
        </div>
      </div>
    </div>
  );
}
