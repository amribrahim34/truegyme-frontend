<template>
  <v-app>
    <header-component></header-component>
    <SearchFieldsComponent></SearchFieldsComponent>
    <v-img src="../src/assets/find.png" class="map-img"></v-img>
    <v-main>
      <v-container class="mt-15">
        <RecommendedComponent></RecommendedComponent>
        <OfferedComponent></OfferedComponent>
        <PartnerComponent></PartnerComponent>
      </v-container>
      <FooterComponent></FooterComponent>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import HeaderComponent from "../components/shared/HeaderComponent.vue";
import SearchFieldsComponent from "../components/shared/SearchFieldsComponent.vue";
import OfferedComponent from "../components/home/OfferedComponent.vue";
import RecommendedComponent from "../components/home/RecommendedComponent.vue";
import PartnerComponent from "../components/home/PartnerComponent.vue";
import FooterComponent from "../components/shared/FooterComponent.vue";
import { defineComponent } from "vue";
import { useCitiesStore } from "@/stores/CitiesStore";

export default defineComponent({
  components: {
    HeaderComponent,
    SearchFieldsComponent,
    RecommendedComponent,
    OfferedComponent,
    PartnerComponent,
    FooterComponent,
  },
});
</script>
<style scoped>
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

.filters-div {
  top: 400px;
}
</style>
