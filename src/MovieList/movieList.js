// MoviesList.js
import { useEffect} from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { LoaderAction } from "../Redux/Action/LoaderAction";
// import MySpinner from "../MySpinner";
import MovieCard from "../Movie-card/Moviecard";
import { getMovies } from "../Redux/Action/MovieAction";

function MoviesList() {
  // const [movies, setMovies] = useState([]);
  // const loading = useSelector((state) => state.MyLoader.loading);
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.MyMovie.list);
  // const apiKey = "368ee4001a9ead5e59a59319dd1356d6";
  // const baseUrl = "https://api.themoviedb.org/3";
  useEffect(()=>{
    dispatch(getMovies())
  },[dispatch])

  // useEffect(() => {
    

  //   axios
  //     .get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
  //     .then((res) => {
  //       setMovies(res.data.results);
  //       dispatch(LoaderAction(false)); 
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       dispatch(LoaderAction(false));
  //     });
  // }, [dispatch]);

  // if (loading) {
  //   return <MySpinner />; 
  // }

  return (
    <div className="container mt-5">
      <div className="row ">
        {movieList.map((moviee) => (
          <div key={moviee.id} className="col-md-2 col-sm-4 mb-4">
            <MovieCard
              id={moviee.id}
              image={
                moviee.poster_path
                  ? `https://image.tmdb.org/t/p/w500${moviee.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              title={moviee.title.slice(0, 20)}
              description={moviee.overview.slice(0, 20) + "..."}
              path={`/movie/${moviee.id}`}
              btn="View Details"
            />
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default MoviesList;
