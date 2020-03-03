import C from "../constants";

/**
 * 
 * @param {*} state Number: represents the goal
 * @param {*} action { type: String, payload: Number }
 */
export const goal = (state=10, action) => {
  if (action.type === C.SET_GOAL) {
    return parseInt(action.payload)
  } else {
    return state
  }
}