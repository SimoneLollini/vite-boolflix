<script>
import { store } from "../store.js";
// const lenguageArray = [
//     {
//         lenguage: "en",
//         flag: "Inglese"
//     }, {
//         lenguage: "it",
//         flag: "italiano"
//     },
// ]
export default {
    name: 'LenguageFlag',
    props: {
        movie: Object
    },
    data() {
        return {
            store,
            // lenguageArray,
        }
        // }, mounted() {
        //     lenguageArray.forEach(lang => {

        //     });


    }
}
</script>

<template>
    <!-- TO DO inserire tutto in un switch statement e cambiare le Icon -->

    <div class="lenguage_flag" v-if="movie.original_language === 'en'">🇬🇧</div>
    <div class="lenguage_flag" v-else-if="movie.original_language === 'it'">🇮🇹</div>
    <div class="lenguage_flag" v-else-if="movie.original_language === 'es'">🇪🇸</div>
    <div class="lenguage_flag" v-else-if="movie.original_language === 'fr'">🇲🇫</div>
    <div class="lenguage_flag" v-else-if="movie.original_language === 'de'">🇩🇪</div>

    <div class="lenguage_flag" v-else>{{ movie.original_language }}</div>
</template>


<style>

</style>