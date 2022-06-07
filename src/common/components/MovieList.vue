<script>
import { endpoint } from '../utils/api-utils'
import { reactive, toRef } from 'vue'
import MovieCard from './MovieCard.vue';

export default {
    name: 'MovieList',
    props: {
        blockTitle: String,
        endpoint: String
    },
    setup() {
        const state = reactive({ movies: [] });
        const movies = toRef(state, 'movies');

        return {
            movies,
        }
    },
    beforeMount() {
        endpoint.getPopular(1).then(res => {
            this.movies = res.data.results;
        }); 
    },
    components: {
        MovieCard
    }
};
</script>

<template>
    <div class="px-16">
        <h1>{{ blockTitle }}</h1>
        <div class="product__list-wrapper grid grid-cols-6 gap-4">
            <MovieCard v-for="movie in movies" :key="movie.id" :data="movie"/>
        </div>
    </div>
</template>