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
            <div class="vote">Voto: "{{ movie.vote_average }}"</div>
            <!-- /.vote -->
        </div>

    </div>
    <!-- /.col -->
</template>

<style lang="scss" scoped>

</style>