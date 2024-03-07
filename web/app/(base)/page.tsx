import React from "react";
import { fetchCategories } from "@/app/(fsd)/entities/category/categoryApi";
import { HomePage } from "@/app/(fsd)/pages/home-page";

const Home = async () => {
  // const data = await fetchCategories()
  // console.log(data);

  return (
    <>
      <HomePage />
    </>
  );
}

export default Home