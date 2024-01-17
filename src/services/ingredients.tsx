import { API } from "@/constants/api";
import axios from "axios";

export const getListIngredients = async () => {
  return await axios
    .get(`${API.ingredient.list}`)
    .then(function (response) {
      
      return response.data;
    })
    .catch(function (error) {
    })
    .finally(function () {
    });
};
