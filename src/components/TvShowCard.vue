<script>
import { store } from "../store.js";
import LenguageFlag from './LanguageFlag.vue'
export default {
    name: 'TvShowCard',
    props: {
        show: Object
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
    <div class="col text-dark g-4 gy-5">
        <div class="card_movie">
            <div class="card_front">
                <div class="image">
                    <img :src="store.API_URL_IMG + show.poster_path" :alt="show.title">
                </div>
                <!-- /.image -->
            </div>
            <!-- /.card_front -->
            <div class="card_back">
                <div class="title">Titolo: "{{ show.title }}"</div>
                <!-- /.title -->
                <div class="original_title">Titolo originale: "{{ show.original_title }}"</div>
                <!-- /.original_title -->
                <div class="lenguage d-flex gap-1">
                    <span>Lingua originale:</span>
                    <!-- <LenguageFlag :show="show" /> -->
                </div>
                <!-- /.lenguage -->
                <div class="vote">
                    <div class="star_rating">
                        <div v-if="store.VoteCeil(show.vote_average) === 0">
                            Nessun voto ricevuto
                        </div>
                        <div v-else>
                            <div class="vote_text"> Voto: {{ store.VoteCeil(show.vote_average) }}/5</div>
                            <img class="star" src="../assets/img/star.png" alt="star"
                                v-for="star in store.VoteCeil(show.vote_average)">
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
.card_movie {
    &:hover {
        height: 325px;

        .card_back {
            display: inline-block;

        }

        .card_front {
            display: none;
        }

    }

    .card_front {
        color: white;



        img {
            object-fit: cover;
            border-radius: 1px;
        }


    }

    .card_back {
        color: white;
        display: none;

        .star {
            width: 1rem;
            margin: 1%;
        }

    }
}
</style>