<script>
export default {
    name: 'MovieCard',
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="col text-dark g-4">
        <div class="card">
            <div class="title">{{ movie.title }}</div>
            <!-- /.title -->
            <div class="original_title">{{ movie.original_title }}</div>
            <!-- /.original_title -->
            <div class="lenguage">{{ movie.original_language }}</div>
            <!-- /.lenguage -->
            <div class="vote">{{ movie.vote_average }}</div>
            <!-- /.vote -->
        </div>

    </div>
    <!-- /.col -->
</template>

<style lang="scss" scoped>

</style>