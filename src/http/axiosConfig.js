import axios from 'axios'
const baseURL = 'https://easy-mock.com/mock/5c0ccee39ae7bb46cb933da4/js'
const instance = axios.create({
  baseURL,
  timeout: 1000
})
