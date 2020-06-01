<template>
    <div>
        <h3 class="font-semibold font-serif text-2xl pt-10 pb-8 select-none">{{ title }}</h3>
        <div class="text-justify text-sm px-10 select-none">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
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
