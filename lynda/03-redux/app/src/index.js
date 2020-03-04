import C from "./constants";
import { goal, skyDay, errors } from "./store/reducers";
import expect from "expect";

/** Initial State */
const state = 10;

/** Action to change state */
const action = {
  type: C.SET_GOAL,
  payload: 15
};

/** change the state through the action */
const nextState = goal(state, action);
expect(nextState).toEqual(action.payload);

// ====== SKY DAY ========
const state2 = null;
const action2 = {
  type: C.ADD_DAY,
  payload: {
    resort: "Whistler",
    date: "2020-15-01",
    powder: true,
    backcountry: false
  }
};
const nextState2 = skyDay(state2, action2);
expect(nextState2).toEqual(action2.payload);

// ====== ERRORS ========
const errorState = ["random error"];
const errorActionAdd = {
  type: C.ADD_ERROR,
  payload: "added by Action"
};
const errorNextState = errors(errorState, errorActionAdd);
expect(errorNextState).toEqual([...errorState, errorActionAdd.payload]);

const errorActionClear = {
  type: C.CLEAR_ERROR,
  payload: "added by Action"
};
const errorNextState2 = errors(errorState, errorActionClear);
expect(errorNextState2).toEqual(errorState);
