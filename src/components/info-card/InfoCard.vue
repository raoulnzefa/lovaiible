<template>
    <div class="bg-gray-100 opacity-75 mt-20 ml-20 fixed">
        <h3 class="font-semibold text-2xl pt-4 pb-4 select-none">Chapter One</h3>
        <div class="text-justify text-sm px-10 pb-10 select-none">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
    </div>
</template>

<script>
    export default {
        name: 'InfoCard',
        props: {
            size: Number
        }
    }
</script>

<style lang="scss" scoped>
    div {
        width: 600px;
    }
</style>
