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
    getGyms(params): void {
      axios.get(`${url}/gyms/api`, { params }).then((response) => {
        this.gyms = response.data;
      });
    },
  },
});
