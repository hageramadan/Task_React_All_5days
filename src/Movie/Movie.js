// Movie.js
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { LoaderAction } from "../Redux/Action/LoaderAction";
import MySpinner from "../MySpinner";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const apiKey = "368ee4001a9ead5e59a59319dd1356d6"; 
  const baseUrl = "https://api.themoviedb.org/3";

  const MySpinnerStatus = useSelector((state)=>state.MyLoader.loading)
  const dispacth = useDispatch();

  useEffect(() => {
    axios
      .get(`${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        // MySpinner=false;
        setMovie(res.data)
       dispacth(LoaderAction(false))
      
      }
    )

      .catch((err) => console.log(err));
  }, [dispacth , id]);

  return (
    MySpinnerStatus ? <MySpinner/> : 
  !movie ? <MySpinner/> :
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={movie.title}
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-md-8 p-4 d-flex flex-column">
            <h2 className="mb-3">{movie.title}</h2>
            <p className="text-muted">
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p className="text-muted">
              <strong>Rating:</strong> ⭐ {movie.vote_average} / 10
            </p>
            <p className="lead">{movie.overview}</p>

            <div className="mt-auto">
              <Link to="/" className="btn btn-outline-primary me-2">
                Back to Movies
              </Link>
              {movie.homepage && (
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Visit Official Page 
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
