import React from "react";
import MovieCard from "../component/MovieCard";

export default function DisplayMovies(props) {
  const { movies } = props;
  const moviecards =
    props.length > 0 ? (
      movies.map((movie) => (
        <li key={movie.imdbID}>
          <MovieCard movie />
        </li>
      ))
    ) : (
      <li key={movies.imdbID}>
        <MovieCard movie={movies} />
      </li>
    );

  return <ul>{moviecards}</ul>;
}
