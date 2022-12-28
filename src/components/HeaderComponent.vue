<template>
  <v-app-bar>
    <div class="app-bar">
      <div class="true-gym">
        <p>TRUE GYM</p>
      </div>

      <!-- <v-spacer></v-spacer> -->
      <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="onClick"
      ></v-btn>
      <!-- <v-card class="d-flex justify-center">das</v-card> -->
      <div>
        <v-btn color="secondary">Documentation</v-btn>
        <v-btn color="secondary">contact us</v-btn>
      </div>
      <v-btn variant="flat" color="secondary">login</v-btn>
    </div>
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    onClick() {
      this.theme == "dark" ? "light" : "dark";
      this.$vuetify.theme.dark = true;
    },
  },
});

// const theme = ref("light");
</script>
<style scoped>
.true-gym {
  align-self: center;
  color: #043682;
  font-weight: bold;
}
.app-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 5px;
}
</style>
