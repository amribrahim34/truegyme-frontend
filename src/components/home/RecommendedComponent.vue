<template>
  <p class="head">Recommended Gymnasiums</p>
  <v-sheet class="mx-auto">
    <v-slide-group show-arrows class="pa-4">
      <v-slide-group-item
        v-for="(gym, index) in gyms"
        :key="index"
        v-slot="{ isSelected, toggle }"
      >
        <v-col cols="3">
          <v-card class="mx-2">
            <v-img class="align-end" height="150" :src="gym.image" cover>
            </v-img>
            <v-card-title class="font-weight-bold">{{ gym.name }}</v-card-title>

            <v-card-subtitle class="pt-4">
              {{ gym.about }}
            </v-card-subtitle>

            <v-card-text>
              <div class="text-secondary d-flex justify-end">
                {{ gym.price }}EGP / Month
              </div>
            </v-card-text>
          </v-card></v-col
        >
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapWritableState } from "pinia";
import { useGymStore } from "@/stores/GymsStore";

export default defineComponent({
  name: "RecommendedComponent",
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useGymStore, ["gyms"]),
  },
  methods: {
    ...mapActions(useGymStore, ["getGyms"]),
  },
  created() {
    this.getGyms();
  },
});
</script>
<style scoped>
.head {
  color: #043682;
  font-family: "Inter";
  font-weight: 700;
  font-size: 24px;
}
</style>
