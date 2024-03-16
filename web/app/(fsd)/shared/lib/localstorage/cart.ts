export const localStorageGetCart = () =>
  typeof window !== "undefined" ? localStorage.getItem("cart") : false;

export const localStorageSetCart = (data: string) =>
  localStorage.setItem("cart", data);
