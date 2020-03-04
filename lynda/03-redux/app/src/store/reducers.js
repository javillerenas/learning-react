import C from "../constants";
import { combineReducers } from "redux";

/**
 *
 * @param {*} state Number: represents the goal
 * @param {*} action { type: String, payload: Number }
 */
export const goal = (state = 10, action) =>
  action.type === C.SET_GOAL ? parseInt(action.payload) : state;

/**
 *
 * @param {*} state
 * @param {*} action { type: String, payload: {}}
 */
export const skyDay = (state = null, action) =>
  action.type === C.ADD_DAY ? action.payload : state;

/**
 *
 * @param {*} state
 * @param {*} action
 */
export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state, action.payload];

    case C.CLEAR_ERROR:
      return state.length > 0 ? removeFromArray(state, action.payload) : state;

    default:
      return state;
  }
};

function removeFromArray(array, toRemove) {
  return array.filter(item => item !== toRemove);
}

export const allSkiDays = (state = [], action) => {
  switch (action.type) {
    case C.ADD_DAY:
      return (state.find(item => item === action.payload)) ? state : [...state, action.payload];

    case C.REMOVE_DAY:
      return state.filter(day => day !== action.payload);

    default:
      return state;
  }
};

export const fetching = (state = false, action) => {
  switch (action.type) {
    case C.FETCH_RESORT_NAMES:
      return true;

    case C.CANCEL_FETCHING:
      return false;

    case C.CHANGE_SUGGESTIONS:
      return false;

    default:
      return state;
  }
};

export const suggestions = (state = [], action) => {
  switch (action.type) {
    case C.CLEAR_SUGGESTIONS:
      return [];

    case C.CHANGE_SUGGESTIONS:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  allSkiDays,
  goal,
  errors,
  resortNames: combineReducers({
    fetching,
    suggestions
  })
});
