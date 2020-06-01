<template>
    <div class="select-none">
        <h3 class="font-semibold font-serif text-2xl pt-10 pb-8">{{ title }}</h3>
        <div class="text-justify text-sm px-10">{{ description }}</div>
    </div>

</template>

<script>
    export default {
        name: 'InfoCard',
        props: {
            title: String,
            description: String
        }
    }
</script>

<style lang="scss" scoped>

</style>
