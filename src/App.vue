<template>
    <div id="app">
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from '@/components/header/Header';

    export default {
        name: 'App',
        components: {
            Header
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: #A5B6CC;
        color: #2c3e50;
    }
</style>
