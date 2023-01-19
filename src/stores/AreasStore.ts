import { defineStore } from "pinia";
import CityType from "@/types/CityType";
import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const useAreasStore = defineStore("AreasStore", {
  state: () => ({
    areas: [],
  }),
  actions: {
    getAreas(): void {
      axios.get(`${url}/areas/api`).then((response) => {
        this.areas = response.data;
      });
    },
  },
});
