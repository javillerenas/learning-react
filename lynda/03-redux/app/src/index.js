import C from "./constants";
import { goal } from "./store/reducers";

/** Initial State */
const state = 10;

/** Action to change state */
const action = {
  type: C.SET_GOAL,
  payload: 15
}

/** change the state through the action */
const nextState = goal(state, action)

/** test */
console.log(`

  init goal: ${state}
  action ${JSON.stringify(action)}
  new goal: ${nextState}

`)