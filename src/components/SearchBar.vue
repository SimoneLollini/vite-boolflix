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
    <input class="form-control" @keyup.enter="$emit('CallSearch')" type="text" placeholder="Search"
        v-model="store.MovieToSearch">
    <button class="btn btn-danger" @click="$emit('CallSearch')">Cerca</button>
</template>

<style lang="scss" scoped>

</style>