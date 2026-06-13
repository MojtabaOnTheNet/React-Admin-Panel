import axios from "axios"
import config from "./config.json"

const httpService = (
  url: string,
  method: "GET" | "POST",
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
