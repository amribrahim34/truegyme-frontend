<template>
  <div class="main-card">
    <v-card class="item-card" v-for="n in 5">
      <div class="flex">
        <div>
          <v-img
            class="bg-white"
            width="200"
            :aspect-ratio="3"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
        </div>
        <div>
          <p class="text-h5 font-weight-bold">THE MECCA GYM</p>
          <p class="description-text">Since 1970 For body building.</p>
          <p class="description-text">2932 N Eagle Rd #101, Maadi, Cairo</p>
          <p class="price-text font-weight-bold">Start from 280EGP / Month</p>
        </div>
      </div>
      <!-- <v-card-text> This is content </v-card-text> -->
    </v-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResultsComponent",
  data() {
    return {};
  },
  methods: {},
});
</script>
<style scoped>
.main-card {
  margin: 50px;
  /* max-width: 800px; */
  width: 100%;
}
.flex {
  display: flex;
}
.description-text {
  color: #898989;
}

.price-text {
  color: #043682;
}
.item-card {
  margin-bottom: 50px;
}
</style>
