<script>
import { store } from "../store.js";
import MovieCard from "../components/MovieCard.vue";

export default {
    name: 'AppMain',
    components: {
        MovieCard,
    },
    data() {
        return {
            store
        }
    }, methods: {

    }
}
</script>

<template>
    <div class="container pt-4">
        <div class="row row-cols-4">
            <MovieCard v-for="movie in store.movies" />
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</template>

<style lang="scss" scoped>

</style>