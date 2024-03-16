import { IProduct } from "@/app/(fsd)/entities/product/interfaces";
import { localStorageSetCart } from "../localstorage/cart";
import { useGetCart } from "./useGetCart";

export const useRemoveFromCart = (data: IProduct) => {
  const cart = useGetCart();
  const deletedData = cart?.map((item) => item.id !== data.id);
  const removeFromCart = () => {
    localStorageSetCart(JSON.stringify(deletedData));
  };
  return removeFromCart;
};
