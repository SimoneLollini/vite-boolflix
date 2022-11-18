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
                <div class="tv_show_wrapper">
                    <h2 class="text-white">Serie TV</h2>
                    <div class="row row-cols-4">
                        <TvShowCard :show="show" v-for="show in store.shows" />
                    </div>
                </div>
                <!-- /.tv show -->

                <div class="movies_wrapper">
                    <h2 class="text-white">Film</h2>
                    <div class="row row-cols-4">
                        <MovieCard :movie="movie" v-for="movie in store.movies" />
                    </div>
                </div>
                <!-- /.movie -->
            </div>
            <!-- /.container -->
        </section>
    </main>
</template>

<style lang="scss" scoped>
h2 {
    padding-top: 1.75rem;
    font-size: 2rem;
    font-weight: bolder;
    margin-bottom: -1rem;
}

.movies_wrapper {
    padding-top: 3rem;
}
</style>