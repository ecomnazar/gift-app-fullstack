import { IProduct } from "@/app/(fsd)/entities/product/interfaces";
import { localStorageGetCart } from "../localstorage/cart";

export const useGetCart = (): IProduct[] | null => {
  const cart = localStorageGetCart();
  return cart ? JSON.parse(cart) : null;
};
