"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "./categoryApi";

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => fetchCategories(),
  });
};
