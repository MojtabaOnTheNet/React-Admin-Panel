import type { loginData } from "@/Auth/Login"
import httpService from "./httpService"

export const loginService = (data: loginData) => {
  return httpService("/auth/login", "POST", {
    ...data,
    remember: data.remember ? 1 : 0,
  })
}

export const logoutService = () => {
  return httpService("/auth/logout", "GET")
}

export const getUserService = () => {
  return httpService("/auth/user", "GET")
}
