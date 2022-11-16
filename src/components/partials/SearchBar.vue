<script>
export default {
    name: 'SearchBar',
    emits: ['CallSearch'],
}
</script>


<template>
    <!-- to do/ aggiungere un v-model in modo da poter prendere i dati dal input text -->
    <input class="form-control" type="text" placeholder="Search">
    <button class="btn btn-danger" @click="$emit('CallSearch')">Cerca</button>
</template>

<style lang="scss" scoped>

</style>