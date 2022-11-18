<script>
import { store } from "../store.js";
import MovieCard from "../components/MovieCard.vue";
import TvShowCard from "../components/TvShowCard.vue";
export default {
    name: 'AppMain',
    components: {
        MovieCard,
        TvShowCard
    }, props: {
        movie: Object,
        show: Object,
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
        <section class="contents_wrapper" v-if="store.isVisible">
            <div class="container pt-4">

                <h2 class="text-white">Serie TV</h2>
                <div class="row row-cols-4">
                    <TvShowCard :show="show" v-for="show in store.shows" />
                </div>
                <!-- /.tv show -->
                <h2 class="text-white">Film</h2>

                <div class="row row-cols-4">
                    <MovieCard :movie="movie" v-for="movie in store.movies" />
                </div>
                <!-- /.movie -->

            </div>
            <!-- /.container -->
        </section>

    </main>
</template>

<style lang="scss" scoped>

</style>