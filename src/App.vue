<template>
    <div id="app">
        <Header/>
        <LandingPage />
    </div>
</template>

<script>
    import Header from '@/components/header/Header';
    import LandingPage from '@/views/landing-page/LandingPage';

    export default {
        name: 'App',
        components: {
            LandingPage,
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

        #background {
            background-image: url("https://images.unsplash.com/photo-1544957992-20514f595d6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
            background-size: 800px;
        }
    }
</style>
