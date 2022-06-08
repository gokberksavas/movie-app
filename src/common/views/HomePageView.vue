<script>
import PageHeader from '../components/PageHeader.vue'
import SideBar from '../components/SideBar.vue'
import MovieList from '../components/MovieList.vue'
import { ref } from 'vue'

export default {
    name: "HomePageView",
    setup() {
        const isMenuActive = ref(false);

        const handleClose = () => {
            isMenuActive.value = false;
        };

        const handleOpen = () => {
            isMenuActive.value = true;
        };

        return {
            handleClose,
            handleOpen,
            isMenuActive
        }
    },
    components: { 
        PageHeader,
        SideBar,
        MovieList
    }
}
</script>

<template>
    <div class="flex flex-row">
        <SideBar :class="{'menu-hidden': !isMenuActive}" @menu-closed="handleClose"/>
        <div class="flex-1 relative">
            <PageHeader @menu-opened="handleOpen"/>
            <div class="home__content">
                <MovieList :blockTitle="'Most Popular Movies'" :endpoint="'popular'"/>
            </div>
        </div>
    </div>
</template>