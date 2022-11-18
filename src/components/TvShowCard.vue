<script>
import { store } from "../store.js";

export default {
    name: 'TvShowCard',
    props: {
        show: Object
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="col text-dark g-4 gy-5">
        <div class="card_body">
            <div class="card_front">
                <div class="image">
                    <img :src="store.API_URL_IMG + show.poster_path" :alt="show.title">
                </div>
                <!-- /.image -->
            </div>
            <!-- /.card_front -->
            <div class="card_back">
                <div class="title">Titolo: "{{ show.name }}"</div>
                <!-- /.title -->
                <div class="original_title">Titolo originale: "{{ show.original_name }}"</div>
                <!-- /.original_title -->
                <div class="lenguage d-flex gap-1">
                    <span>Lingua originale:</span>
                    {{ store.isLang(show.original_language) }}
                </div>
                <!-- /.lenguage -->
                <div class="vote">
                    <div class="star_rating">
                        <div v-if="store.voteCeil(show.vote_average) === 0">
                            Nessun voto ricevuto
                        </div>
                        <div v-else>
                            <div class="vote_text"> Voto: {{ store.voteCeil(show.vote_average) }}/5</div>
                            <img class="star" src="../assets/img/star.png" alt="star"
                                v-for="star in store.voteCeil(show.vote_average)">
                        </div>

                    </div>
                </div>
                <!-- /.vote -->
            </div>
            <!-- /.card_back -->
        </div>
    </div>
    <!-- /.col -->
</template>

<style lang="scss" scoped>

</style>