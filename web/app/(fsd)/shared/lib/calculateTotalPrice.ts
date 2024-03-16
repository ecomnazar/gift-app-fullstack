import { IProduct } from "../../entities/product/interfaces";

export const calculateTotalPrice = (data: IProduct[]) => {
  let totalPrice = 0;
  for (let index = 0; index < data.length; index++) {
    totalPrice += data[index].price;
  }
  return totalPrice;
};
