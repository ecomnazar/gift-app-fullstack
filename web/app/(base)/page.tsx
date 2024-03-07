import React, { Suspense } from "react";
import { HomePage } from "@/app/(fsd)/pages/home-page";
import { fetchProducts } from "@/app/(fsd)/entities/product/productApi";

export const fetchCache = 'force-no-store'
const Home = async () => {
  const data = await fetchProducts()
  return (
    <>
      <HomePage data={data} />
    </>
  );
}

export default Home