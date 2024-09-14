<template>
    <nav class="filterNav">
        <button @click="updateFilter('all')" :class="{active: filter === 'all'}">Hepsi</button>
        <button @click="updateFilter('completed')" :class="{active: filter === 'completed'}">Tamamlandı</button>
        <button @click="updateFilter('continue')" :class="{active: filter === 'continue'}">Devam Edenler</button>
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
.filterNav button {
    background-color: bisque;
    color: grey;
    display: inline-block;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
}

.filterNav button.active {
    background-color: darkseagreen;
    color: white;
    font-weight: 700;
}
</style>