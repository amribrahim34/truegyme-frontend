// stores/counter.js
import { defineStore } from "pinia";
import CityType from "@/types/CityType";
import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const useCitiesStore = defineStore("CitiesStore", {
  state: () => ({
    cities: [],
  }),
  getters: {
    getCities(): CityType[] {
      axios
        .get(`${url}/cities`, {
          params: {
            // ID: 12345,
          },
        })
        .then(function (response) {
          console.log(response);
        });
      return this.cities;
    },
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    // increment() {
    //   this.count++;
    // },
  },
});
