import { API_ENDPOINTS } from "@/src/shared/api/endpoints";
import { instance } from "@/src/shared/api/instance";

export const fetchCategories = async () => {
  const response = await instance.get(API_ENDPOINTS.CATEGORY);
  return response.data;
};
