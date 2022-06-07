import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import MainView from '../components/MainView.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Main',
            component: MainView
        },
    ]
})