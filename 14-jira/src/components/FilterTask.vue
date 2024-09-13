<template>
    <nav>
        <button @click="updateFilter('all')">Hepsi</button>
        <button @click="updateFilter('completed')">Tamamlandı</button>
        <button @click="updateFilter('continue')">Devam Edenler</button>
    </nav>
</template>
<script>
export default {
    emits: ['filterChange'],
    props: ['filter'],
    methods: {
        updateFilter(filter) {
            this.$emit('filterChange', filter)
        }
    }
}
</script>
<style>
    
</style>