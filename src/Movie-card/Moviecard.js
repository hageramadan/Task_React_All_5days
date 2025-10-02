import { Link } from "react-router-dom";
import "./MovieCard.css";

import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../Redux/Action/watchlistAction";

function MovieCard(props) {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.MyWatchlist.watchlist);

  const isFav = watchlist.some((movie) => movie.id === props.id);

  const toggleFav = () => {
    if (!isFav) {
      dispatch(
        addToWatchlist({
          id: props.id,
          title: props.title,
          image: props.image,
          description: props.description,
          path: props.path,
        })
      );
    } else {
      dispatch(removeFromWatchlist(props.id));
    }
  };

  return (
    <div className="card movie-card h-100 shadow-sm">
      <img
        src={props.image}
        className="card-img-top movie-img h-75"
        alt={props.title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        {props.description && (
          <p className="card-text text-muted small">{props.description}</p>
        )}
        <div className="d-flex align-items-center justify-content-between">
          <div className="mt-auto">
            {props.path && (
              <Link to={props.path} className="btn btn-primary w-100">
                {props.btn}
              </Link>
            )}
          </div>
          <i
            className={`${isFav ? "fa-solid text-danger" : "fa-regular"} fa-heart font-size ms-3`}
            onClick={toggleFav}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
