import axios from "axios"
import { useEffect, useState } from "react"

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken")!)
    if (loginToken) {
      ;(async function () {
        try {
          const response = await axios.get(
            "https://ecomadminapi.azhadev.ir/api/auth/user",
            {
              headers: {
                Authorization: `Bearer ${loginToken}`,
              },
            }
          )
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
