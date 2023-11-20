import axios from "axios"

const API_URL =
  typeof process !== "undefined"
    ? process.env.FAKE_STORE_API
    : undefined || "https://fakestoreapi.com"

export const GetAllProducts = async () => {
  const response = await axios.get(`${API_URL}/products`)
  return response.data
}

export const GetSingleProduct = (id: number) =>
  axios.get(`${API_URL}/products/${id}`).then((res) => res.data)

export const GetAllCategories = () =>
  axios.get(`${API_URL}/products/categories`).then((res) => res.data)

export const GetInCategory = (name: string) =>
  axios.get(`${API_URL}/products/category/${name}`).then((res) => res.data)
