<template>
    <div id="background" class="bg-fixed bg-right-top bg-no-repeat h-screen">
        <div class="container mx-auto pt-40">
            <h1 class="font-semibold font-serif text-6xl text-white uppercase opacity-75 select-none">lovaiible collection</h1>
            <Carousel/>
        </div>
    </div>
</template>

<script>
    import items from '@/components/json/items.json';
    import Carousel from '@/components/carousel/Carousel';

    export default {
        name: 'HomeView',
        components: {
            Carousel,
        },
        props: {
            title: String
        },
        data() {
            return {
                items: items
            }
        }
    }
</script>

<style scoped>

</style>
