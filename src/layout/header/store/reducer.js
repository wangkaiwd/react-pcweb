import { CLOSE_EXPAND, OPEN_EXPAND, HOT_SEARCH } from './actionTypes'
const defaultState = {
  expand       : false,
  searchHotList: []
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
    case HOT_SEARCH: 
      return {
        ...state,
        searchHotList: action.data
      }
    default: 
      return state
  }
}
