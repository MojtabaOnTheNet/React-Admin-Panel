// import type { categoryData } from "@/Dashboard/Categories/ChangeForm"
import httpService from "./httpService"

export const getCategoriesService = (id?: string | null) => {
  return httpService(`/admin/categories${id ? `?parent=${id}` : ""}`, "GET")
}

// export const postCategoryService = (data: categoryData) => {
//   // return httpService(`/admin/categories${id ? `?parent=${id}` : ""}`, "GET")
// }
