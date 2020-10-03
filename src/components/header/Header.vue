<template>
    <nav class="w-full fixed select-none">
        <div class="flex justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span class="font-semibold text-xl tracking-tight"></span>
                <ul class="flex text-white font-medium hidden lg:flex">
                    <li class="ml-5 px-6"><router-link to="/" exact>About</router-link></li>
                </ul>
            </div>

            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                    <font-awesome-icon icon="bars"/>
                </button>
                <div class="lg:hidden">
                    <ul class="text-white font-medium">
                        <li class="ml-5 px-6"><router-link to="/" exact>About</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="w-full block lg:flex lg:items-center lg:w-auto hidden">
                <div class="text-sm lg:flex-grow">
                    <div class="items-center border-b border-b-2 border-blue-400 inline-block">
                        <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="Search">
                    </div>
                    <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-blue-300 hover:text-white mr-10">
                        <font-awesome-icon icon="search" id="search-toggle"/>
                    </a>
                    <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-blue-300 hover:text-white mr-10">
                        <font-awesome-icon icon="user" /> My Account
                    </a>
                    <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-blue-300 hover:text-white mr-10">
                        <font-awesome-icon icon="shopping-bag" /> My Bag
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header'

    }
</script>

<style lang="scss" scoped>
    @import 'header';
</style>
