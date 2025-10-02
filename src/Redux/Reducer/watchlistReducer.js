// Redux/Reducer/WatchlistReducer.js
const initialState = {
  watchlist: [],
};

const WatchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      // اتأكد إن الفيلم مش موجود
      const exists = state.watchlist.find(
        (item) => item.id === action.payload.id
      );
      if (exists) return state;
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };

    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default WatchlistReducer;
