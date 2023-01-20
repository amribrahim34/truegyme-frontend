<template>
  <div class="main-card">
    <v-card class="item-card" v-for="(gym, index) in gyms">
      <div class="flex">
        <div>
          <v-img
            class="bg-white"
            width="200"
            :aspect-ratio="3"
            :src="gym.image"
          ></v-img>
        </div>
        <div>
          <p class="text-h5 font-weight-bold">{{ gym.name }}</p>
          <p class="description-text">{{ gym.about }}</p>
          <!-- <p class="price-text font-weight-bold">Start from 280EGP / Month</p> -->
        </div>
      </div>
      <!-- <v-card-text> This is content </v-card-text> -->
    </v-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapWritableState } from "pinia";
import { useGymStore } from "@/stores/GymsStore";

export default defineComponent({
  name: "ResultsComponent",
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useGymStore, ["gyms"]),
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
