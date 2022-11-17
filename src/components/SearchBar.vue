<script>
import { store } from "../store.js";
export default {
    name: 'SearchBar',
    emits: ['CallSearch'],
    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <div class="search_bar gap-1">
        <input class="form-control w-25" @keyup.enter="$emit('CallSearch')" type="text" placeholder="Search"
            v-model="store.MovieToSearch">
        <button class="btn btn-danger" @click="$emit('CallSearch')">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
.search_bar {
    margin-top: 5%;
    display: flex;
    justify-content: center;
}
</style>