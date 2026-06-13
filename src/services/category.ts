import httpService from "./httpService"

export const getCategoriesService = (id: string | null) => {
  return httpService(`/admin/categories${id ? `?parent=${id}` : ""}`, "GET")
}
