"use client";
import { localStorageSetItemToCart } from "../localstorage/cart";
import { useGetCart } from "./useGetCart";
import { IProduct } from "@/app/(fsd)/entities/product/interfaces";

export const useAddToCart = (data: IProduct) => {
  const cart = useGetCart();
  const checkedData = cart
    ? JSON.stringify([...cart, data])
    : JSON.stringify([data]);
  const addToCart = () => localStorageSetItemToCart(checkedData);

  return addToCart;
};
