import Vue from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fontAwesomeIcons} from './components/shared/FontAwesomeIcons.ts'
import '@/assets/css/tailwind.css'

library.add(...fontAwesomeIcons)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
