<template>
    <div class="carousel relative bg-gray-100 w-1/2 mt-12">
        <div class="carousel-inner relative overflow-hidden">
            <!--Slide 1-->
            <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
            <div class="carousel-item absolute opacity-0 pb-2">
                <InfoCard title="Chapter One"/>
            </div>
            <div class="control-1 hidden w-full flex justify-between py-5 px-6">
                <label for="carousel-3" class="prev w-10 h-10 cursor-pointer text-black hover:text-blue-400 my-auto">
                    <font-awesome-icon class="text-2xl" icon="chevron-left"/>
                </label>
                <label for="carousel-2" class="next w-10 h-10 cursor-pointer text-black hover:text-blue-400 my-auto">
                    <font-awesome-icon class="text-2xl" icon="chevron-right"/>
                </label>
            </div>

            <!--Slide 2-->
            <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
            <div class="carousel-item absolute opacity-0 pb-2">
                <InfoCard title="Chapter Two"/>
            </div>
            <div class="control-2 hidden w-full flex justify-between py-5 px-6">
                <label for="carousel-1" class="prev w-10 h-10 cursor-pointer text-black hover:text-blue-400 z-10 my-auto">
                    <font-awesome-icon class="text-2xl" icon="chevron-left"/>
                </label>
                <label for="carousel-3" class="next w-10 h-10 cursor-pointer text-black hover:text-blue-400 z-10 my-auto">
                    <font-awesome-icon class="text-2xl" icon="chevron-right"/>
                </label>
            </div>

            <!--Slide 3-->
            <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
            <div class="carousel-item absolute opacity-0 pb-2">
                <InfoCard title="Chapter Three"/>
            </div>
            <div class="control-3 hidden w-full flex justify-between py-5 px-6">
                <label for="carousel-2" class="prev w-10 h-10 cursor-pointer text-black hover:text-blue-400 z-10 my-auto">
                    <font-awesome-icon class="text-2xl" icon="chevron-left"/>
                </label>
                <label for="carousel-1" class="next w-10 h-10 cursor-pointer text-black hover:text-blue-400 z-10 my-auto">
                    <font-awesome-icon class="text-2xl" icon="chevron-right"/>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    import InfoCard from '@/components/info-card/InfoCard';
    export default {
        name: 'Carousel',
        components: {
            InfoCard
        }
    }
</script>

<style scoped>
    .carousel-open:checked + .carousel-item {
        position: static;
        opacity: 100;
    }
    #carousel-1:checked ~ .control-1,
    #carousel-2:checked ~ .control-2,
    #carousel-3:checked ~ .control-3 {
        display: flex;
    }
</style>
