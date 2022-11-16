<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {

    }
  }, methods: {
    SearchForMovie() {
      console.log('hai invocato la funzione SearchForMovie');
    }
  }
}

</script>

<template>
  <AppHeader @CallSearch="SearchForMovie" />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss" scoped>

</style>
