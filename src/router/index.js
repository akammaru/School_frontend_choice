import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/content/home'
import releasedGames from '@/components/content/releasedGames'
import gameDetail from '@/components/modules/games/gameDetail'
import notFound from '@/components/modules/notFound'
import upcoming from '@/components/content/upcoming'
import contact from '@/components/content/contact'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/released',
            name: 'released',
            component: releasedGames
        },
        {
            path: '/game/:name',
            name: 'gameDetail',
            component: gameDetail
        },
        {
            path: '/upcoming',
            name: 'upcoming',
            component: upcoming
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
        {
            path: '/not-found',
            name: 'notFound',
            component: notFound
        }
    ]
})
