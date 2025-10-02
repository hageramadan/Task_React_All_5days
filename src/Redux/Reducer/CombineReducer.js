import { combineReducers } from "redux";
import LoaderReducer from "./LoaderReducer";
import CountReducer from "./CountReducer";
import WatchlistReducer from "./watchlistReducer";
import MovieReducer from "./MovieReducer";

export default combineReducers({
  MyLoader: LoaderReducer,
  MyCounter : CountReducer ,
   MyWatchlist: WatchlistReducer,
   MyMovie:MovieReducer
})