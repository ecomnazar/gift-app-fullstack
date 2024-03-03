import React from "react";
import { fetchCategories } from "@/src/entities/category/categoryApi";
import { HomePage } from "@/src/pages/home-page";

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