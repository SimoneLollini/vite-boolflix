<script>
import { store } from "../store.js";
import SearchBar from './SearchBar.vue';
export default {
    name: 'AppHeader',
    components: {
        SearchBar,
    }, data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">
            <img class="logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="">
            <SearchBar @CallSearch="store.SearchForMovie" />
        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    .container {
        height: 20vh;

        img.logo {
            width: 150px;
        }
    }

}
</style>