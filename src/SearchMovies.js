function SearchMovies({ movies, searchTerm, deleteMovie }) {
  if (movies.length === 0) {
    return (
      <p className="empty-text">No movies added yet.</p>
    );
  }

  // if (movies.length > 0 && searchTerm) {
  //   return (
  //     <ul>
  //       {movies.map((movie) => (
  //         <li key={movie.id} className="movie-item">
  //           <span>
  //             {movie.title} — {movie.rating}
  //           </span>

  //           <button
  //             onClick={() => deleteMovie(movie.id)}
  //             className="delete-btn"
  //           >
  //             ❌
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} className="movie-item">
          <span>
            {movie.title} — {movie.rating}
          </span>

          <button
            onClick={() => deleteMovie(movie.id)}
            className="delete-btn"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SearchMovies;
