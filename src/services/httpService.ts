import axios from "axios"
import config from "./config.json"
import { toast } from "sonner"

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    toast.error(`مشکلی رخ داده (${error.response.status})`, {
      duration: 2000,
      id: "error-toast",
    })
    return Promise.reject(error)
  }
)

const httpService = (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: Object | null
) => {
  const tokenInfo = JSON.parse(localStorage.getItem("loginToken")!)
  return axios({
    url: config.onlineAPI + url,
    method,
    data,
    headers: {
      Authorization: tokenInfo ? `Bearer ${tokenInfo}` : null,
      "Content-Type": "application/json",
    },
  })
}
export default httpService
