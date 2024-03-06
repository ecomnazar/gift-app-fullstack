export const localStorageGetCart = () =>
  typeof window !== "undefined" ? localStorage.getItem("cart") : false;
