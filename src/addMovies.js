export function addMovie({name,rating,movies,setMovies,setName,}) {
  if (!name || name.trim() === "") {
    alert("Please enter a valid movie name");
    return;
  }

  const newMovie = {
    id: Date.now(),
    title: name.trim(),
    rating,
  };

  setMovies([...movies, newMovie]);
  setName("");
}
