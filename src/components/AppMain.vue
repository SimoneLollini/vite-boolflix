<script>
import { store } from "../store.js";
import MovieCard from "../components/MovieCard.vue";

export default {
    name: 'AppMain',
    components: {
        MovieCard,
    }, props: {
        movie: Object
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <main>
        <div class="container pt-4">
            <div class="row row-cols-4">
                <MovieCard :movie="movie" v-for="movie in store.movies" />
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </main>
</template>

<style lang="scss" scoped>

</style>