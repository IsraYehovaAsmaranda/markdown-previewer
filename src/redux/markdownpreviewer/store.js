import { createStore } from "redux";
import markdownReducer from "./reducer";

const store = createStore(markdownReducer);

export default store;