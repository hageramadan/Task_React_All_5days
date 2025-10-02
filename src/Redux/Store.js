import { applyMiddleware, createStore } from "redux";
import CombineReducer from "./Reducer/CombineReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

 const MyStore = createStore(CombineReducer, composeWithDevTools(applyMiddleware(thunk)))
 export default MyStore