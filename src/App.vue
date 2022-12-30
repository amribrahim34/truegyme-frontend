<template>
  <v-app>
    <header-component></header-component>
    <FiltersComponent></FiltersComponent>
    <v-img src="../src/assets/find.png" class="map-img"></v-img>
    <v-main>
      <v-container class="mt-15">
        <RecommendedComponent></RecommendedComponent>
        <OfferedComponent></OfferedComponent>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from "../src/components/HeaderComponent.vue";
import FiltersComponent from "../src/components/FiltersComponent.vue";
import OfferedComponent from "../src/components/OfferedComponent.vue";
import RecommendedComponent from "../src/components/RecommendedComponent.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    HeaderComponent,
    FiltersComponent,
    RecommendedComponent,
    OfferedComponent,
  },
});
</script>
<style>
.map-img {
  display: flex;
  align-self: center;
  height: 428px;
  width: 1217px;
  left: 0px;
  top: 0px;
  border-radius: 20px;
  z-index: 1;
}
.head {
  color: #043682;
  font-family: "Inter";
  font-weight: 700;
  font-size: 24px;
}
</style>
