<template>
  <v-row class="filters-div">
    <v-col sm="4" md="3">
      <p class="filter">City</p>
      <v-select label="Select Your city" variant="underlined"></v-select>
    </v-col>
    <v-col sm="4" md="3">
      <p class="filter">Area</p>
      <v-select label="Select Your area" variant="underlined"></v-select>
    </v-col>
    <v-col sm="4" md="3">
      <p class="filter">Search By Name</p>
      <br />
      <input type="text" class="search-text" />
    </v-col>
    <v-col sm="4" md="3">
      <div class="botton">
        <v-btn icon="mdi-magnify" rounded="lg" color="secondary"></v-btn>
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FiltersComponent",
  data() {
    return {};
  },
  methods: {},
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
  top: 400px;
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
