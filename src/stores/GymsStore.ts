import { defineStore } from "pinia";
import CityType from "@/types/CityType";
import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const useGymStore = defineStore("GymStore", {
  state: () => ({
    gyms: [],
  }),
  actions: {
    async getGyms(): Promise<void> {
      await axios.get(`${url}/gyms/api`).then(function (response) {
        console.log(response);
        this.gyms = response.data;
      });
      //   return this.cities;
    },
  },
});
