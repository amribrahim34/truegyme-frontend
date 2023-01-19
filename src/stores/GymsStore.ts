import { defineStore } from "pinia";
import CityType from "@/types/CityType";
import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const useGymStore = defineStore("GymStore", {
  state: () => {
    return {
      gyms: [],
    };
  },
  actions: {
    getGyms(): Promise<void> {
      axios.get(`${url}/gyms/api`).then(function (response) {
        // console.log(response.data);
        this.gyms = response.data;
        // console.log(gymsArr);
      });
      // this.gyms = gymsArr;
      //   return this.cities;
    },
  },
});
