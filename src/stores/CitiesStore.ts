// stores/counter.js
import { defineStore } from "pinia";
import CityType from "@/types/CityType";
import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const useCitiesStore = defineStore("CitiesStore", {
  state: () => ({
    cities: [],
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    getCities(): void {
      axios.get(`${url}/cities/api`).then((response) => {
        this.cities = response.data;
      });
    },
  },
});
