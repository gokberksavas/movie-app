<script>
import GeneralLayout from '../layouts/GeneralLayout.vue'
import MovieList from '../components/MovieList.vue'

export default {
    name: "HomePageView",
    components: { 
        GeneralLayout,
        MovieList
    }
}
</script>

<template>
    <GeneralLayout/>
    <div class="home__content">
        <MovieList :blockTitle="'Most Popular Movies'"/>
    </div>
</template>