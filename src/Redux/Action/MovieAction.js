import axios from "axios"

export const getMovies = () => {
     const apiKey = "368ee4001a9ead5e59a59319dd1356d6";
  const baseUrl = "https://api.themoviedb.org/3";
    return function(dispatch){
        return axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => dispatch ({
            type:"GET_MOVIE",
            payload:res.data.results
        }) )
      .catch((err) => {
        console.log(err);
      });
    }
}














// function getMovieDetails(){


//     const apiKey = "368ee4001a9ead5e59a59319dd1356d6";
//   const baseUrl = "https://api.themoviedb.org/3";
//     return function(){
//         return axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
//         .then((res) => dispatch ({
//             type:"GET_MOVIE_DETAILS",
//             payload:res.data
//         }) )
//       .catch((err) => {
//         console.log(err);
//       });
//     }
// }