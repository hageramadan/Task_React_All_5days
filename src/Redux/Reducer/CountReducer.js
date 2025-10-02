
const initialState = {
  counter: 0
};

const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_ACTION":
      return {
        counter: action.payload  
      };
    default:
      return state;
  }
};

export default CountReducer;
