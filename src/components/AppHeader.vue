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
        <SearchBar @CallSearch="store.SearchForMovie" />
    </header>
</template>

<style lang="scss" scoped>

</style>