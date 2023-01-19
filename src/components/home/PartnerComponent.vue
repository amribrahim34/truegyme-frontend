<template>
  <p class="head">Partner Gymnasiums</p>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col cols="12" md="3" v-for="(partner, index) in partners">
          <v-item v-slot="{ active, toggle }">
            <v-img height="150" :src="partner.image" cover></v-img>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapWritableState } from "pinia";
import { usePartnersStore } from "@/stores/PartnersStore";

export default defineComponent({
  name: "PartnerComponent",
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(usePartnersStore, ["partners"]),
  },
  methods: {
    ...mapActions(usePartnersStore, ["getPartners"]),
  },
  created() {
    this.getPartners();
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
