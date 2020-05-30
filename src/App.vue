<template>
  <div id="app">
    <ItemCard />
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard';

export default {
  name: 'App',
  components: {
    ItemCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
