import { createStore } from "redux";
import rootReducer from "./reducer/main";

const store = createStore(rootReducer);

export default store;
