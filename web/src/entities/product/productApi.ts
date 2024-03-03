import { API_ENDPOINTS } from "@/src/shared/api/endpoints";
import { instance } from "@/src/shared/api/instance";

interface Props {
  data: Array<any>;
  count: number;
}

export const fetchProducts = async () => {
  const response = await instance.get(API_ENDPOINTS.PRODUCT);
  return response.data as Props;
};
