<template>
  <p class="head">Offered Gymnasiums</p>
  <v-sheet class="mx-auto">
    <v-slide-group show-arrows class="pa-4">
      <v-slide-group-item
        v-for="n in 10"
        :key="n"
        v-slot="{ isSelected, toggle }"
      >
        <v-card class="mx-2" max-width="270">
          <v-img
            class="align-end"
            height="150"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          >
          </v-img>
          <v-card-title class="font-weight-bold"
            >THE MECCA GYM {{ n }}</v-card-title
          >

          <v-card-subtitle class="pt-4">
            Since 1970 For body building.
          </v-card-subtitle>

          <v-card-text>
            <div class="text-secondary d-flex justify-end">280EGP / Month</div>
          </v-card-text>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useGymStore } from "@/stores/GymsStore";

export default defineComponent({
  name: "OfferedComponent",
  data() {
    return {};
  },
  methods: {
    ...mapActions(useGymStore, ["getGyms"]),
  },
  created() {
    this.getGyms();
  },
});
</script>
<style scoped></style>
