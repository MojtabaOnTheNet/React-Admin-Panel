import { useReducer } from "react"

export const usePathTitle = () => {
  const reducer = (state: string, action: { type: string }) => {
    if (action.type.startsWith("/shop/categories/")) {
      state = `زیر مجموعه‌های محصول شماره ${action.type.split("/").pop()}` // just get the number part
      return state
    }
    switch (action.type) {
      case "/shop/categories":
        state = "مدیریت گروه محصولات"
        return state
      case "/shop/products":
        state = "مدیریت محصولات"
        return state
      case "/shop/brands":
        state = "مدیریت برندها"
        return state
      case "/shop/guarantees":
        state = "مدیریت گارانتی‌ها"
        return state
      case "/shop/colors":
        state = "مدیریت رنگ‌ها"
        return state
      case "/shop/discounts":
        state = "مدیریت تخفیف‌ها"
        return state
      case "/carts":
        state = "مدیریت سبدها"
        return state
      case "/orders":
        state = "مدیریت سفارشات"
        return state
      case "/delivery":
        state = "مدیریت نحوه ارسال"
        return state
      case "/users":
        state = "مشاهده کاربران"
        return state
      case "/roles":
        state = "مشاهده نقش‌ها"
        return state
      case "/access":
        state = "مشاهده مجوزها"
        return state
      case "/questions":
        state = "سوال‌ها"
        return state
      case "/comments":
        state = "نظرات"
        return state
      default:
        return "خوش اومدی مجتبی!"
    }
  }
  return useReducer(reducer, "")
}
