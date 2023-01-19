// stores/counter.js
import { defineStore } from "pinia";
import CityType from "@/types/CityType";
import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const usePartnersStore = defineStore("PartnersStore", {
  state: () => ({
    partners: [],
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    getPartners(): Promise<void> {
      axios.get(`${url}/partners/api`).then((response) => {
        this.partners = response.data;
      });
    },
  },
});
