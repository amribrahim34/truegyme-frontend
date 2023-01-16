<template>
  <v-card elevation="6" class="card">
    <v-card-title class="card-header">
      <i class="fa-solid fa-filter"></i>
      <!-- <v-icon icon="fa:fas fa-filter"></v-icon> -->
      Filter</v-card-title
    >
    <v-card-text>
      <div class="filter-group">
        <p class="field-title">Gender</p>
        <v-select
          :items="items"
          label="Gender"
          clearable
          chips
          variant="solo"
        ></v-select>
      </div>

      <div class="filter-group">
        <p class="field-title">Subscriptions</p>
        <v-select
          :items="items"
          label="subscriptions"
          clearable
          chips
          variant="solo"
        ></v-select>
      </div>

      <div class="filter-group">
        <p class="field-title">price range</p>
        <div class="price-filter">
          <v-text-field clearable label="min" variant="solo"></v-text-field>
          <v-text-field clearable label="max" variant="solo"></v-text-field>
        </div>
      </div>

      <div class="filter-group">
        <p class="field-title">Near by</p>
        <v-select
          :items="items"
          label="near by"
          clearable
          chips
          variant="solo"
        ></v-select>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn variant="flat" color="secondary">filter</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FiltersComponent",
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  methods: {},
});
</script>
<style scoped>
.card {
  margin-top: 80px;
  margin-left: 30px;
  margin-bottom: 80px;
  max-width: 300px;
  padding: 10px;
}
.field-title {
  font-weight: 600;
  font-size: larger;
  margin-bottom: 5px;
}
.filter-group {
  margin: 15px 5px;
}
.card-header {
  color: #043682;
}

.price-filter {
  display: flex;
  justify-content: space-between;
}
</style>
