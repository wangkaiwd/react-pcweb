import { CLOSE_EXPAND, OPEN_EXPAND, HOT_SEARCH } from './actionTypes'
import { fetchSearchHot } from '@/api/header'
export const closeExpand = (expand) => ({
  type: CLOSE_EXPAND,
  expand
})
export const openExpand = (expand) => ({
  type: OPEN_EXPAND,
  expand
})
const hotSearch = (data) => {
  return {
    type: HOT_SEARCH,
    data
  }
}

export const getHotSearch = (params = {}) => {
  return (dispath) => {
    fetchSearchHot(params).then(
      res => {
        dispath(hotSearch(res.list))
      },
      err => { console.log(err) }
    )
  }
}
