import { IProduct } from "@/app/(fsd)/entities/product/interfaces";
import { localStorageSetItemToCart } from "../localstorage/cart";
import { useGetCart } from "./useGetCart";

export const useRemoveFromCart = (data: IProduct) => {
  const cart = useGetCart();
  const deletedData = cart?.map((item) => item.id !== data.id);
  const removeFromCart = () => {
    localStorageSetItemToCart(JSON.stringify(deletedData));
  };
  return removeFromCart;
};
