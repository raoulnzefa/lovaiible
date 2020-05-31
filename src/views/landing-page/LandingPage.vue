<template>
    <div id="background" class="bg-fixed bg-right-top bg-no-repeat h-screen">
        <div class="container mx-auto pt-40">
            <InfoCard/>
            <div class="container flex mt-64 pt-64 hidden">
                <div class="w-1/4 px-2" v-for="(item, index) in items" v-bind:key="index">
                    <ItemCard v-bind:title="item.title"
                              v-bind:description="item.description"
                              v-bind:image="item.image"
                              v-bind:tags="item.tags">
                    </ItemCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import items from '@/components/json/items.json';
    import InfoCard from '@/components/info-card/InfoCard';
    import ItemCard from '@/components/item-card/ItemCard';

    export default {
        name: 'LandingPage',
        components: {
            ItemCard,
            InfoCard
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
