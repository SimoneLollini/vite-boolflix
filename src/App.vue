<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./store.js";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store
    }
  }, methods: {
    SearchForMovie() {
      console.log('hai invocato la funzione SearchForMovie');
      // console.log(store.MovieToSearch);
      const url = `${store.API_URL + store.MyKey}&language=en-US&query=${store.MovieToSearch}+&page=1&include_adult=false`
      // console.log(url);
      store.callApi(url)

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
