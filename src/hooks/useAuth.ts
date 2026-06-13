import { getUserService } from "@/services/auth"
import { useEffect, useState } from "react"

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken")!)
    if (loginToken) {
      ;(async function () {
        try {
          const response = await getUserService()
          setIsLogin(response.status == 200 ? true : false)
          setIsLoading(false)
        } catch (error) {
          localStorage.removeItem("loginToken")
          setIsLogin(false)
          setIsLoading(false)
        }
      })()
    } else {
      setIsLogin(false)
      setIsLoading(false)
    }
  }, [])

  return [isLoading, isLogin]
}
