import {combineReducers} from "redux";
import quizReducer from "../reducers/quiz";
import createReducer from "../reducers/create";

export default combineReducers({
    quiz: quizReducer,
    create: createReducer
})