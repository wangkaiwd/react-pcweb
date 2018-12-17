import { CLOSE_EXPAND, OPEN_EXPAND } from './actionTypes'
const defaultState = {
  expand: false
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case CLOSE_EXPAND:
      return {
        ...state,
        expand: action.expand
      }
    case OPEN_EXPAND:
      return {
        ...state,
        expand: action.expand
      }
    default:
      return state
  }
}
