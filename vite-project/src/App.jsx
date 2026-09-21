import {useState}  from "react";
import movies from "./data/movies";
import MovieCard from "./components/MovieCard";

function App() {
  const [movie,setMovies]=userState(Movies)
  function changeStatus(id){

    setMovies;{
      movie.map((movie)=>{
        if (movie.id===id){
          return{
            ...movie,

          };
          const totalmovies=movies.length;
          const watchedmovies=movies.filter
          const unwatchedemovies=movies.filter
        }
      })
    }
  }

  return (
    <div className="container">
      <div className="stats">
        <h1>Movie-Board</h1>
        <p>Total Movies:</p>
          {totalmovies}
        <p>Unwatched Movies:</p>
          {unwatchedmovies}
        <p>Watched Movies</p>
          {watchedmovies}
      </div>
      {watchedmovies===0(
        <h3>No more movies to watch</h3>
      )}

    </div>
  )
}

export default App