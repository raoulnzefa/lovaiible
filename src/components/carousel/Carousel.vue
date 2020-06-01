<template>
    <div class="carousel relative bg-gray-100 lg:w-1/2 xl:w-1/2 w-full mt-12">
        <div class="carousel-inner relative overflow-hidden">
            <!--Slide 1-->
            <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
            <div class="carousel-item absolute opacity-0 pb-2">
                <InfoCard title="Chapter One" description='1.	"Blue Orangeade"
Slow RabbitMoonshineCazzi OpeiaEllen BergSupreme Boi
Slow Rabbit	3:06
2.	"Crown" (어느 날 머리에서 뿔이 자랐다; Eoneu nal meorieseo ppuri jaratda [lit. "One Day Antlers Grew From My Head"])
Slow RabbitMelanie Joy FontanaMichel "Lindgren" SchulzSupreme Boi"hitman" bangMayu Wakisaka
Slow Rabbit	3:51
3.	"Our Summer"
The FuturisticsDelaceyJesse St JohnShae Jacobs"hitman" bangADORA
The Futuristics	3:20
4.	"Cat & Dog"
Daniel "JUNE NAWAKII" CelestinSupreme BoiDarel "BEBE DA RICH" Ituta
Daniel "JUNE NAWAKII" CelestinSupreme Boi[a]
3:08
5.	"Nap of a Star" (별의 낮잠; Byeorui natjam [[ lit. "Stellar Nap"]])
LEL"hitman" bangSlow Rabbit
LEL	4:03'/>
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
                <InfoCard title="Chapter Two" description='1.	"New Rules"	Supreme Boi, EL CAPITXN, Daniel Caesar, Ludwig Lindell, Jordan “DJ Swivel” Young, Candace Nicole Sosa, Max Lynedoch Graham, Matt Thomson, Wilhelm Börjesson, danke	Supreme Boi	2:54
2.	"9 and Three Quarters (Run Away)" (9와 4분의 3 승강장에서 너를 기다려)	"hitman" bang, Supreme Boi, Slow Rabbit, Melanie Joy Fontana, Michel Lindgren Schulz, Andreas Carlsson, Pauline Skött, Peter St. James	Slow Rabbit	3:31
                3.	"Roller Coaster" (간지러워/So Itchy)	"hitman" bang, Supreme Boi, Sam Klempner, Jacob Attwooll, Slow Rabbit, ADORA, Huening Kai, EL CAPITXN, 정바비	Sam Klempner	3:34
                4.	"Poppin Star"	"hitman" bang, Shae Jacobs, Lauren Amber Aquilina, ADORA, 정수경, 송재경	Shae Jacobs	3:13' />
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
                <InfoCard title="Chapter Three" description='1.	"Drama"
Supreme BoiJake TorryNoah ConradRoland "Rollo" SpreckleyEL CAPITXN
Noah Conrad
3:30
2.	"Cant You See Me?" (세계가 불타버린 밤, 우린...; "segyega bultabeorin bam, urin..." [lit. "The night the world burned, we ..."])
                Slow Rabbit"Hitman" BangSupreme BoiMelanie Joy FontanaMichel "Lindgren" SchulzEric ZayneNaz Tokoi
                "Hitman" BangSlow Rabbit
                3:21
                3.	"Fairy of Shampoo" (샴푸의 요정; "syampu-ui yojeong" [lit. "Shampoo fairy"])
                EL CAPITXNSlow RabbitKeeho ChangYeonjun
                EL CAPITXNSlow Rabbit
                4:27
                4.	"Maze in the Mirror" (거울 속의 미로; "geoul sog-ui miro")
                Slow RabbitYeonjunBeomgyuAdoraHuening KaiSoobinTaehyun
                Slow RabbitBeomgyu
                3:46'/>
            </div>
            <div class="control-3 hidden w-full flex justify-between py-5 px-6">
                <label for="carousel-2" class="prev w-10 h-10 cursor-pointer text-black hover:text-blue-400 z-10 my-auto">
                    <font-awesome-icon class="text-2xl" icon="chevron-left"/>
                </label>
                <label for="carousel-1" class="next w-10 h-10 cursor-pointer text-black hover:text-blue-400 z-10 my-auto">
                    <font-awesome-icon class="text-2xl" icon="chevron-right"/>
                </label>
            </div>

            <!--ol class="carousel-indicators">
                <li class="inline-block mr-3">
                    <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-blue-200 hover:text-blue-400">•</label>
                </li>
                <li class="inline-block mr-3">
                    <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-blue-200 hover:text-blue-400">•</label>
                </li>
                <li class="inline-block mr-3">
                    <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-blue-200 hover:text-blue-400">•</label>
                </li>
            </ol-->
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
    .carousel-indicators {
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: 2%;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 10;
    }
    #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
    #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
    #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
        color: #63b3ed;
    }
</style>
