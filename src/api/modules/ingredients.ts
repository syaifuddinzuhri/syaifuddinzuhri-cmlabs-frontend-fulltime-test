import { useQuery } from "react-query";
import api from "../api";
import { API } from "@/constants/api";

const useGetIngredientsAll = () =>
  useQuery(
    ["GetIngredientsAll"],
    () => {
      return api.get<Response.Api<any>>(API.ingredient.list);
    },
    {
      retry: 0,
      cacheTime: 0,
    }
  );

export { useGetIngredientsAll };
