export const localStorageGetCart = () =>
  typeof window !== "undefined" ? localStorage.getItem("cart") : false;

export const localStorageSetItemToCart = (data: string) =>
  localStorage.setItem("cart", data);
