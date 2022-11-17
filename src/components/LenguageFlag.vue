<script>
import { store } from "../store.js";
export default {
    name: 'LenguageFlag',
    props: {
        movie: Object
    },
    data() {
        return {
            store,
        }


    }
}
</script>

<template>
    <!-- TO DO cambiare le Icon valutare di creare una funzione a parte -->

    <div class="lenguage_flag" v-if="movie.original_language === 'en'">🇬🇧</div>
    <div class="lenguage_flag" v-else-if="movie.original_language === 'it'">🇮🇹</div>
    <div class="lenguage_flag" v-else-if="movie.original_language === 'es'">🇪🇸</div>
    <div class="lenguage_flag" v-else-if="movie.original_language === 'fr'">🇲🇫</div>
    <div class="lenguage_flag" v-else-if="movie.original_language === 'de'">🇩🇪</div>
    <div class="lenguage_flag">{{ movie.original_language }}</div>
    <!-- <div class="lenguage_flag">{{ movie.original_language }}</div>

<img class="language_flag" :src="'../assets/img/flags/4-3/' + movie.original_language + '.svg'"
        :alt="movie.original_language"> -->
</template>


<style>

</style>