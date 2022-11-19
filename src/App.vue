<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store.js";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  }
}


</script>

<template>
  <AppHeader />
  <div class="wrapper">
    <AppMain />
  </div>
</template>

<style lang="scss" scoped>

</style>
