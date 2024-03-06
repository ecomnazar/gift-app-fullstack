import { localStorageGetCart } from "../localstorage/cart";

export const useGetCart = () => {
  const cart = localStorageGetCart();
  return cart ? JSON.parse(cart) : null;
};
