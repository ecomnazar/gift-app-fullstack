import { API_ENDPOINTS } from "@/app/(fsd)/shared/api/endpoints";
import { instance } from "@/app/(fsd)/shared/api/instance";

export const fetchCategories = async () => {
  const response = await instance.get(API_ENDPOINTS.CATEGORY);
  return response.data;
};
