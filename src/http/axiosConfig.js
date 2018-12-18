import axios from 'axios'
import qs from 'qs'
const baseURL = 'http://127.0.0.1:3000/mock/18/admin/'
const instance = axios.create({
  baseURL,
  timeout: 1000
})
instance.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.headers = { 'content-type': 'application/x-www-form-urlencoded' }
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => {
    console.log('客户端请求失败！', err)
  }
)
instance.interceptors.response.use(
  res => {
    const { status, data } = res
    if (status === 200 && data.code === 0) {
      return data.data
    }
    return data.data
  },
  err => {
    console.log('服务器响应失败！', err)
  }
)
export default instance