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
            <SearchBar @CallSearch="store.searchForMovie" />
        </div>
    </header>
    <div class="hero_image"></div>
</template>

<style lang="scss" scoped>
header {
    height: 100vh;
    z-index: 1000;
    background-image: linear-gradient(rgba(0, 0, 0, 0.808), rgba(19, 19, 19, 0.109));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .container {
        margin-top: 2rem;

        img.logo {
            width: 180px;
        }
    }

}

.hero_image {
    height: 100vh;
    background: black;
    background-image: url(../assets/img/background_image.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
</style>