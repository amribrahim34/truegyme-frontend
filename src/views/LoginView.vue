<template>
  <v-app>
    <header-component></header-component>
    <!-- <SearchFieldsComponent></SearchFieldsComponent> -->
    <!-- <v-img src="../src/assets/find.png" class="map-img"></v-img> -->
    <v-main>
      <div class="d-flex mb-5 justify-content-around">
        <div class="w-100">
          <!-- <v-img aspect-ratio="1.1" src="../src/assets/login.png" cover></v-img> -->

          <v-card width="700">
            <v-img
              aspect-ratio="1.1"
              src="../src/assets/login.png"
              cover
              class="text-white"
            >
              <div class="text-h1">
                <p class="">
                  <b> Sign In </b>
                </p>
                <p class="">
                  <b>Now</b>
                </p>
              </div>
            </v-img>
          </v-card>
        </div>
        <div class="w-75 d-flex flex-column justify-center">
          <v-form ref="form">
            <v-text-field v-model="email" label="Email" required></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <div class="d-flex flex-column">
              <v-btn color="success" class="mt-4"> login </v-btn>
            </div>
          </v-form>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </v-main>
    <!-- <p>login</p> -->
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
  data() {
    return {
      show1: false,
      show2: true,
      password: "",
      email: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
});
</script>
<style scoped></style>
