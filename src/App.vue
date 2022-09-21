<template>
  <div class="main-container">
    <the-forms></the-forms>
  </div>
</template>

<script>
import TheForms from "./components/TheForms.vue";

export default {
  name: "App",
  components: {
    TheForms,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
