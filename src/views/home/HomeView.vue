<template>
    <div id="background" class="bg-fixed bg-right-top bg-no-repeat xl:bg-contain h-screen">
        <div class="container mx-auto pt-40">
            <h1 class="font-semibold font-serif sm:text-4xl lg:text-6xl text-white uppercase opacity-75 select-none">lovaiible collection</h1>
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

<style lang="scss" scoped>
    #background {
        background-image: url("https://images.unsplash.com/photo-1544957992-20514f595d6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
        @media only screen and (min-width: 1024px) {
            background-size: 60%;
        }

        @media only screen and (max-width: 1023px) {
            background-size: unset;
        }
    }
</style>
