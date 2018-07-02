import { combineReducers } from "redux";
import lists from "./lists";

const gnomesApp = combineReducers({
	lists
});

export default gnomesApp;