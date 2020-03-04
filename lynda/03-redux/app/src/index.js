import C from "./store/constants";
import appReducer from "./store/reducers";
import initialState from "!./store/initialState.json";
import { createStore } from "redux";

const store = createStore(appReducer, initialState);

console.log("init state", store.getState());
store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: "Mt Charleston",
    date: "2020-1-15",
    powder: true,
    backcountry: false
  }
})

console.log("curr state", store.getState());