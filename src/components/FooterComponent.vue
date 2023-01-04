<template>
  <v-footer class="footer">
    <v-row>
      <v-col xs="10" sm="3">
        <ul>
          <li class="no-bullet"><b>TRUE GYM</b></li>
          <li>About Us</li>
          <li>Our Team</li>
          <li>Carrers</li>
        </ul>
      </v-col>
      <v-col xs="10" sm="3">
        <ul>
          <li class="no-bullet"><b>Pages</b></li>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </v-col>
      <v-col xs="10" sm="3">
        <ul>
          <li class="no-bullet"><b>Need Help?</b></li>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Privacy & Policy</li>
          <li>Contact Us</li>
        </ul>
        <div class="mt-3">
          <ul>
            <li class="no-bullet"><b>Follow Us on</b></li>
          </ul>
          <div class="social">
            <p>dfsd</p>
            <p>dfsd</p>
            <p>dfsd</p>
            <p>dfsd</p>
          </div>
        </div>
      </v-col>
      <v-col xs="10" sm="3">
        <ul>
          <li class="no-bullet"><b>Coming Soon</b></li>
          <li>dfsdfsd</li>
          <li>dfsdfsd</li>
          <li>dfsdfsd</li>
          <li>dfsdfsd</li>
          <li>dfsdfsd</li>
        </ul>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {};
  },
  methods: {},
});
</script>
<style scoped>
.no-bullet {
  list-style: none;
  font-weight: 600;
  font-size: 21px;
}
.footer {
  background-color: #043682;
  color: #ffffff;
  font-family: "Inter";
  /* display: flex;
  justify-content: space-around; */
}
.social {
  display: flex;
  justify-content: space-between;
}
</style>
