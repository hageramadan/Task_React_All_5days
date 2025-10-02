
const INITIAL_STATE = {
    list:[]
};
export default function MovieReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_MOVIE":
            return{
             list : action.payload

            }

        default:
            return state;
    }
}