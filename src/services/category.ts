import type { categoryData } from "@/Dashboard/Categories/ChangeForm"
import httpService from "./httpService"

export const getCategoriesService = (id?: string | null) => {
  return httpService(`/admin/categories${id ? `?parent=${id}` : ""}`, "GET")
}

export const getCategoryService = (id: string) => {
  return httpService(`/admin/categories/${id}`, "GET")
}

// Convert incoming data(including images) into formData and fix boolean fields
function toCategoryFormData(data: categoryData) {
  const formData = new FormData()

  formData.append("title", data.title)

  if (data.description) {
    formData.append("descriptions", data.description)
  }

  if (data.parent_id) {
    formData.append("parent_id", String(data.parent_id))
  }

  if (data.image) {
    formData.append("image", data.image)
  }
  formData.append("is_active", data.is_active ? "1" : "0")
  formData.append("show_in_menu", data.show_in_menu ? "1" : "0")

  console.log(data)

  return formData
}

export const postCategoryService = (data: categoryData) => {
  return httpService("/admin/categories", "POST", toCategoryFormData(data))
}

export const updateCategoryService = (data: categoryData, id: string) => {
  return httpService(`/admin/categories/${id}`, "PUT", toCategoryFormData(data))
}
