// Home.js
import { useEffect, useState } from "react";
import axios from "axios";
import MoviesList from "../MovieList/movieList";
import Pagination from "../pagination/pagination";

function Home() {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const apiKey = "368ee4001a9ead5e59a59319dd1356d6"; 
  const baseUrl = "https://api.themoviedb.org/3";

  useEffect(() => {
    const endpoint = keyword
      ? `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${keyword}&page=${page}`
      : `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;

    axios
      .get(endpoint)
      .then((res) => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  }, [page, keyword]);

  const handleSearch = (e) => {
    setKeyword(e.target.value);
    setPage(1);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Now Playing Movies</h1>

      {/* Search Box */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search movies..."
        value={keyword}
        onChange={handleSearch}
      />

      {/* Movies List */}
      <MoviesList    movies={movies} />

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}

export default Home;
