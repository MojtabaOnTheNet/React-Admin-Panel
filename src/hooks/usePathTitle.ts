import { useReducer } from "react"

export const usePathTitle = () => {
  const reducer = (state: string, action: { type: string }) => {
    switch (action.type) {
      case "/Categories":
        state = "مدیریت گروه محصولات"
        return state
      case "/Products":
        state = "مدیریت محصولات"
        return state
      case "/Brands":
        state = "مدیریت برندها"
        return state
      case "/Guarantees":
        state = "مدیریت گارانتی‌ها"
        return state
      case "/Colors":
        state = "مدیریت رنگ‌ها"
        return state
      case "/Discounts":
        state = "مدیریت تخفیف‌ها"
        return state
      case "/Carts":
        state = "مدیریت سبدها"
        return state
      case "/Orders":
        state = "مدیریت سفارشات"
        return state
      case "/Send-Type":
        state = "مدیریت نحوه ارسال"
        return state
      case "/Users":
        state = "مشاهده کاربران"
        return state
      case "/Roles":
        state = "مشاهده نقش‌ها"
        return state
      case "/َAccess":
        state = "مشاهده مجوزها"
        return state
      case "/Questions":
        state = "سوال‌ها"
        return state
      case "/Opinions":
        state = "نظرها"
        return state
      default:
        return "خوش اومدی مجتبی!"
    }
  }
  return useReducer(reducer, "")
}
