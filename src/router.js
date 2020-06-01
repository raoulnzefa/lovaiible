import Vue from 'vue';
import ViewRouter from 'vue-router';
import HomeView from '@/views/home/HomeView';
import AboutView from '@/views/about/AboutView';
import WomenView from '@/views/women/WomenView';
import MenView from '@/views/men/MenView';

Vue.use(ViewRouter);

const router = new ViewRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/women',
            name: 'women',
            component: WomenView
        },
        {
            path: '/men',
            name: 'men',
            component: MenView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        }
    ]
});

export default router;
