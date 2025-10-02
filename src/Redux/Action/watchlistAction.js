// Redux/Action/WatchlistAction.js
export const addToWatchlist = (movie) => {
  return {
    type: "ADD_TO_WATCHLIST",
    payload: movie,
  };
};

export const removeFromWatchlist = (id) => {
  return {
    type: "REMOVE_FROM_WATCHLIST",
    payload: id,
  };
};
