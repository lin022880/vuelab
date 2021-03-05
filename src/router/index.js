import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'NewVue',
            icon: "/vuelab/favicon.ico"
        },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: 'KK首頁',
            icon: "https://www.kkday.com/favicon.png"
        }
    }
]


const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {

    if (to.meta.title) {
        document.title = to.meta.title
    }
    const link = document.querySelector("[rel='icon']")
    if (to.meta.icon) {
        link.setAttribute('href', to.meta.icon)
    } else {
        link.setAttribute('href', "")
    }
    next();
})

export default router