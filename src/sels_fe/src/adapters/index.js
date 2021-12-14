import axios from "axios"
import { store } from "../index"

const baseURL = `http://127.0.0.1:8000/api/`

const api = axios.create({
  baseURL,
})

api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("access_token")
    config.headers = {
      Authorization: accessToken && `Bearer ${accessToken}`,
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (next) => {
    return Promise.resolve(next)
  },
  (error) => {
    store.dispatch({
      type: "REQUEST_FAIL",
      message: error.message,
      error: error.response.data,
    })
  }
)

export default api
export { baseURL }
