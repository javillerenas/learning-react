import expect from "expect";
import C from "./constants";
import appReducer from "./store/reducers";
import initialState from "./initialState.json";

let state = initialState;

console.log(`
  initial state
  ==============
  goal: ${state.goal}
  resorts: ${JSON.stringify(state.allSkiDays)}
  fetching: ${state.resortNames.fetching}
  suggestions: ${state.resortNames.suggestions}
`);

const NEW_GOAL = 2;
state = appReducer(state, {
  type: C.SET_GOAL,
  payload: NEW_GOAL
});
expect(state.goal).toEqual(NEW_GOAL);

const NEW_SKY_DAY = {
    resort: "Mt CHarleston",
    date: "2020-1-15",
    powder: true,
    backcountry: false
}
state = appReducer(state, {
  type: C.ADD_DAY,
  payload: NEW_SKY_DAY
});
expect(state.allSkiDays).toContain(NEW_SKY_DAY)

console.log(`
  next state
  ==============
  goal: ${state.goal}
  resorts: ${JSON.stringify(state.allSkyDays)}
  fetching: ${state.resortNames.fetching}
  suggestions: ${state.resortNames.suggestions}
`);
