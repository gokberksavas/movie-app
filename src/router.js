import { createRouter, createWebHistory } from "vue-router";
import HomePageView from './common/views/HomePageView.vue'
import FavouritesPageView from './common/views/FavouritesPageView.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            components: {
                default: HomePageView,
            }
        },
        {
            path: '/favourites',
            components: {
                default: FavouritesPageView,
            }
        }
    ]
});