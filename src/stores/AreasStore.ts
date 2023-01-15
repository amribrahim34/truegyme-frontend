import { defineStore } from "pinia";
import CityType from "@/types/CityType";
import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const useAreasStore = defineStore("AreasStore", {
  state: () => ({
    areas: [],
  }),
  actions: {
    async getAreas(): Promise<void> {
      await axios.get(`${url}/areas/api`).then(function (response) {
        this.areas = response.data;
      });
    },
  },
});
