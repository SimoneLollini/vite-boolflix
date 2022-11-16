<script>
import { store } from "../store.js";
import MovieCard from "../components/MovieCard.vue";

export default {
    name: 'AppMain',
    components: {
        MovieCard,
    },
    data() {
        return {
            store
        }
    }, methods: {

    }
}
</script>

<template>
    <div class="container pt-4">
        <div class="row row-cols-4">
            <div class="col">
                <div class="title">1. Titolo</div>
                <!-- /.title -->
                <div class="original_title">2. Titolo Originale</div>
                <!-- /.original_title -->
                <div class="lenguage">3. Lingua</div>
                <!-- /.lenguage -->
                <div class="vote">4. Voto</div>
                <!-- /.vote -->
            </div>
            <!-- /.col -->

        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</template>

<style lang="scss" scoped>

</style>