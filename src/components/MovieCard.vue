<script>
import { store } from "../store.js";
import LenguageFlag from './LenguageFlag.vue'
export default {
    name: 'MovieCard',
    props: {
        movie: Object
    },
    data() {
        return {
            store
        }
    }, components: {
        LenguageFlag,
    }
}
</script>

<template>
    <div class="col text-dark g-4">
        <div class="card">
            <div class="title">Titolo: "{{ movie.title }}"</div>
            <!-- /.title -->
            <div class="original_title">Titolo originale: "{{ movie.original_title }}"</div>
            <!-- /.original_title -->
            <div class="lenguage d-flex gap-1">
                <span>Lingua originale:</span>
                <LenguageFlag :movie="movie" />
            </div>
            <!-- /.lenguage -->
            <!-- <div class="vote">Voto: "{{ Math.ceil(movie.vote_average / 2) }}"</div> -->
            <div class="vote">
                <div class="vote_text"> Voto: {{ store.VoteCeil(movie.vote_average) }}/5</div>
                <div class="star_rating">
                    <img class="star" src="../assets/img/star.png" alt="star"
                        v-for="star in store.VoteCeil(movie.vote_average)">
                </div>
            </div>

            <!-- /.vote -->
            <div class="image">
                <img :src="store.API_URL_IMG + movie.poster_path" :alt="movie.title">
            </div>
            <!-- /.image -->
        </div>

    </div>
    <!-- /.col -->
</template>

<style lang="scss" scoped>
.star {
    width: 1rem;
    margin: 1%;
}
</style>