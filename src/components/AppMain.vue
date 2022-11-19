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
    <main class="text-white">
        <section class="contents_wrapper" v-if="store.isVisible">
            <div class="container pt-4">
                <div class="tv_show_wrapper" v-if="store.shows.length !== 0">
                    <h2>Serie TV</h2>
                    <div class="row row-cols-4">
                        <TvShowCard :show="show" v-for="show in store.shows" />
                    </div>
                </div>
                <!-- /.tv show -->

                <div class="movies_wrapper" v-if="store.movies.length !== 0">
                    <h2>Film</h2>
                    <div class="row row-cols-4">
                        <MovieCard :movie="movie" v-for="movie in store.movies" />
                    </div>
                </div>
                <!-- /.movie -->
                <div class="no_result bg-danger" v-if="store.movies.length == 0 && store.shows.length == 0">
                    <div class="banner_not_found d-flex justify-content-center align-items-center">
                        <h2>
                            <div class="emoji">
                                :(
                            </div>
                            <div class="text">
                                Ci dispiace non abbiamo trovato nulla!
                            </div>
                        </h2>

                    </div>
                </div>
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

.banner_not_found {
    height: 400px;
    margin-bottom: 1.5rem;

    .emoji {
        margin: auto;
        transform: rotate(90deg);
        font-size: 4rem;
        width: 80px;
        aspect-ratio: 1/1;
    }
}
</style>