// http://localhost:5175/.     


function MovieCard(movie,changeStatus) {
  return (
    <div className="Movie-card">
        <h2>Title:</h2>{movie.title}
        <p>
            <b>Genre:</b>{movie.genre}
        </p>
        <p>
            <b>Rating:</b>{movie.rating}
        </p>
        <p>
            <b>Year:</b>{movie.year}
        </p>
        <p>
            <b>Status:</b>{" "}
            {movie.watched ? "Watched" : "Not Watched"}
        </p>
        <button onClick={(changeStatus)=>{}}>
            {movie.watched ? "Watch" : "Un Watched"}
        </button>
    </div>
  );
}

export default MovieCard;