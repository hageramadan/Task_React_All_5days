// Watchlist.js
import { useSelector } from "react-redux";
import MovieCard from "../Movie-card/Moviecard";

function Watchlist() {
  const watchlist = useSelector((state) => state.MyWatchlist.watchlist);

  return (
    <div className="container mt-4">
      <h2>My Watchlist</h2>
      <div className="row">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div key={movie.id} className="col-md-3 mb-3">
              <MovieCard {...movie} btn="View Details" />
            </div>
          ))
        ) : (
          <p>No movies in your watchlist yet.</p>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
