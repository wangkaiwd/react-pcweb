import { combineReducers } from 'redux'
import headerReducer from '@/layout/header/store/reducer'
const reducer = combineReducers({
  header: headerReducer
})
export default reducer
