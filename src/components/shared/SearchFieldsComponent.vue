<template>
  <v-row class="filters-div">
    <v-col sm="4" md="3">
      <p class="filter">City</p>
      <v-select
        label="Select Your city"
        variant="underlined"
        v-model="city"
        :items="cities"
        clearable
      ></v-select>
    </v-col>
    <v-col sm="4" md="3">
      <p class="filter">Area</p>
      <v-select
        label="Select Your area"
        variant="underlined"
        v-model="area"
        clearable
        :items="areas"
      ></v-select>
    </v-col>
    <v-col sm="4" md="3">
      <p class="filter">Search By Name</p>
      <br />
      <input type="text" class="search-text" v-model="name" />
    </v-col>
    <v-col sm="4" md="3">
      <div class="botton">
        <router-link to="/search">
          <v-btn
            icon="mdi-magnify"
            rounded="lg"
            color="secondary"
            @click="search"
          ></v-btn>
        </router-link>
        <!-- <v-btn icon="md  i-magnify" rounded="lg" color="secondary"></v-btn> -->
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapWritableState } from "pinia";
import { useGymStore } from "@/stores/GymsStore";

export default defineComponent({
  name: "SearchFieldsComponent",
  data() {
    return {
      name: "",
      area: "",
      city: "",
      cities: ["Cairo", "Giza"],
      areas: ["Nasr City", "Maadi", "Doki", "Haram", "Faisal"],
    };
  },
  computed: {
    ...mapWritableState(useGymStore, ["gyms"]),
  },
  methods: {
    ...mapActions(useGymStore, ["getGyms"]),
    search() {
      const params = {
        name: this.name,
        area: this.area,
        city: this.city,
      };
      this.getGyms(params);
    },
  },
});
</script>
<style scoped>
.img-container {
  display: flex;
  justify-content: center;
}
.filters-div {
  position: absolute;
  z-index: 2;
  display: flex;
  align-self: center;
  width: 1102px;
  max-width: 100%;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 1px 40px 3px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.filter {
  color: #043682;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
}
.search-text {
  border: none;
  border-bottom: 2px solid rgb(165, 165, 165);
}
.botton {
  display: flex;
  height: 100%;
  width: 100%;
  justify-items: center;
}
</style>
