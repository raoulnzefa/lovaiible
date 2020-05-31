<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="h-64 w-full object-cover" :src="image" :alt="title">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 text-base">{{ description }}</p>
        </div>
        <div class="px-6 py-4">
            <span v-for="(tag, index) in tags" v-bind:key="index" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{{ tag.toLowerCase() }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ItemCard',
        props: {
            title: String,
            description: String,
            image: String,
            tags: Array
        }
    }
</script>

<style lang="scss" scoped>

</style>
