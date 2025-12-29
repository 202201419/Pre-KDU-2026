import { toast } from "react-toastify";

function Watchlist({ movies, deleteMovie }) {

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );

    if (!confirmDelete) return;

    deleteMovie(id);
    // toast.success("Movie deleted successfully!");
  };

  // if (movies.length === 0) {
  //   return (
  //     <p className="empty-text">No movies added yet.</p>
  //   );
  // }

  // return (
  //   <ul className="watchlist">
  //     {movies.map((movie) => (
  //       <li key={movie.id} className="movie-item">
  //         <span>
  //           {movie.title} — {movie.rating}
  //         </span>

  //         <button
  //           onClick={() => handleDelete(movie.id)}
  //           className="delete-btn"
  //         >
  //           ❌
  //         </button>
  //       </li>
  //     ))}
  //   </ul>
  // );
}

export default Watchlist;
