<template>
  <v-app-bar>
    <div class="app-bar">
      <div class="true-gym">
        <router-link to="/">
          <p>TRUE GYM</p>
        </router-link>
      </div>
      <div>
        <a href="/public/Group 124 - TrueGYM Project.docx" download>
          <v-btn color="secondary">Documentation</v-btn>
        </a>
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
    return {};
  },
  methods: {},
});
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
