<template>
  <v-app>
    <header-component></header-component>
    <v-img src="../src/assets/search.png" class="map-img"></v-img>
    <SearchFieldsComponent></SearchFieldsComponent>

    <v-main>
      <!-- <v-container class="mt-15">
        <RecommendedComponent></RecommendedComponent>
        <OfferedComponent></OfferedComponent>
        <PartnerComponent></PartnerComponent>
      </v-container>-->
      <div class="side">
        <FiltersComponent></FiltersComponent>
        <ResultsComponent></ResultsComponent>
      </div>

      <FooterComponent></FooterComponent>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import HeaderComponent from "../components/shared/HeaderComponent.vue";
import SearchFieldsComponent from "../components/shared/SearchFieldsComponent.vue";
import FiltersComponent from "../components/search/FiltersComponent.vue";
import ResultsComponent from "../components/search/ResultsComponent.vue";
import FooterComponent from "../components/shared/FooterComponent.vue";
import { defineComponent } from "vue";
import { useCitiesStore } from "@/stores/CitiesStore";

export default defineComponent({
  components: {
    HeaderComponent,
    SearchFieldsComponent,
    FooterComponent,
    FiltersComponent,
    ResultsComponent,
  },
});
</script>
<style scoped>
.filters-div {
  top: 110px;
}
.side {
  display: flex;
  /* justify-content: space-between; */
  margin-top: 80px;
}
</style>
