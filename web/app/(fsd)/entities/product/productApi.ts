import { API_ENDPOINTS } from "@/app/(fsd)/shared/api/endpoints";
import { instance } from "@/app/(fsd)/shared/api/instance";
import { IProduct } from "./interfaces";

export const fetchProducts = async () => {
  try {
    const response = await instance.get(API_ENDPOINTS.PRODUCT);
    return response.data as { data: IProduct[]; count: number };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchProductById = async (id: string) => {
  try {
    const response = await instance.get(`${API_ENDPOINTS.PRODUCT}/${id}`);
    return response.data as IProduct;
  } catch (error) {
    return Promise.reject(error);
  }
};
