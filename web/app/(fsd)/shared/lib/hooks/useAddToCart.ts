import React from "react";
import { useGetCart } from "./useGetCart";
import { IProduct } from "@/app/(fsd)/entities/product/interfaces";

interface Props {
  data: IProduct;
}

export const useAddToCart = ({ data }: Props) => {
  const cart = useGetCart();
  const addToCart = () =>
    cart
      ? localStorage.setItem("cart", JSON.stringify([...cart, data]))
      : localStorage.setItem("cart", JSON.stringify([data]));

  return addToCart;
};
