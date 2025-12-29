import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { addMovie } from "./addMovies";
import SearchMovies from "./SearchMovies";

function App() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("⭐ 1 Star");
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const newMovie = () => {
    addMovie({
      name,
      rating,
      movies,
      setMovies,
      setName,
    });
  };

  const deleteMovie = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this movie?"
  );

  if (!confirmDelete) return;

  setMovies((prevMovies) =>
    prevMovies.filter((movie) => movie.id !== id)
  );
};

 const clearMovies = () => {
  const confirmClear = window.confirm(
    "Are you sure you want to clear the entire watchlist?"
  );

  if (!confirmClear) return;

  setMovies([]);
};


  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* CAROUSEL */}
      <div className="carousel-wrapper">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3500"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img1.jpg" alt="Slide 1" />
            </div>

            <div className="carousel-item">
              <img src="/img2.jpg" alt="Slide 2" />
            </div>

            <div className="carousel-item">
              <img src="/img3.jpg" alt="Slide 3" />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="main-layout">
        {/* LEFT: ADD MOVIE */}
        <div className="movie-card">
          <div className="form-group">
            <label>Movie Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter movie name..."
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option>⭐ 1 Star</option>
              <option>⭐⭐ 2 Stars</option>
              <option>⭐⭐⭐ 3 Stars</option>
              <option>⭐⭐⭐⭐ 4 Stars</option>
              <option>⭐⭐⭐⭐⭐ 5 Stars</option>
            </select>
          </div>

          <button onClick={newMovie} className="add-btn">
            Add to Watchlist
          </button>
        </div>

        {/* RIGHT: WATCHLIST */}
        <div className="movie-card">
          <div className="list-section">
            <input
              type="search"
              className="thin-search"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="watchlist-header">
            <h3>Movies in Watchlist: {movies.length}</h3>
            <button className="clear-btn" onClick={clearMovies}>Clear all</button>
          </div>

            {filteredMovies.length === 0 && searchTerm ? (
              <p className="empty-text">
                No movies found. Try a different search!
              </p>
            ) : (
              <SearchMovies
                movies={filteredMovies}
                deleteMovie={deleteMovie}
              />
            )}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
