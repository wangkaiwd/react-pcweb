import { CLOSE_EXPAND, OPEN_EXPAND } from './actionTypes'
export const closeExpand = (expand) => ({
  type: CLOSE_EXPAND,
  expand
})
export const openExpand = (expand) => ({
  type: OPEN_EXPAND,
  expand
})
