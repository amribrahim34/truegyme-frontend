<template>
  <v-app :theme="theme">
    <header-component></header-component>
    <v-img src="../src/assets/find.png"></v-img>
    <v-main>
      <v-container>Content area</v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import HeaderComponent from "../src/components/HeaderComponent.vue";
import { defineComponent } from "vue";

// import { ref } from "vue";
export default defineComponent({
  components: { HeaderComponent },
});
// const theme = ref("light");

// function onClick() {
//   theme.value = theme.value === "light" ? "dark" : "light";
// }
</script>
