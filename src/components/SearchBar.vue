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
    <div class="search_bar gap-2 pt-2">
        <input class="form-control" @keyup.enter="$emit('CallSearch')" type="text" placeholder="Search"
            v-model="store.MovieToSearch">
        <button class="btn_danger" @click="$emit('CallSearch')">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.search_bar {
    display: flex;
    justify-content: center;

    input {
        height: 30px;
    }

    .btn_danger {
        background-color: $bf_danger;
        border: none;
        border-radius: 5px;
        color: $light;
        font-size: 0.9rem;
        font-weight: 300;
    }
}
</style>