import axiosInstance from './axiosConfig'
export const ajax = (url, method = "post") => {
  const paramsKey = method === 'post' ? 'data' : 'params'
  return (params = {}) => {
    return new Promise((resolve, reject) => {
      axiosInstance({
        url,
        method,
        [paramsKey]: params
      }).then(res => resolve(res), err => reject(err))
    })
  }
}