import {combineReducers} from "redux";
import attractionsReducer from "./attractionsReducer";

const rootReducer = combineReducers({
    attractions: attractionsReducer
});

export default rootReducer;
