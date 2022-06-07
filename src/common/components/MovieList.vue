<script>
import { endpoint } from '../utils/api-utils'
import { reactive, toRefs, onBeforeMount, watch} from 'vue'
import MovieCard from './MovieCard.vue';

export default {
    name: 'MovieList',
    props: {
        blockTitle: String,
        endpoint: String
    },
    setup() {
        const state = reactive({
            movies: [],
            page: 1
        });
        const { movies, page } = toRefs(state);

        const getPopularMovies = async (page) => {
            movies.value = await endpoint.getPopular(page);
        };

        onBeforeMount(getPopularMovies(page));

        watch(page, () => {
            getPopularMovies(page.value);
        });

        return {
            getPopularMovies,
            movies,
            page
        }
    },
    components: {
        MovieCard
    }
};
</script>

<template>
    <div class="px-16 py-5 max-w-[1500px] mx-auto">
        <h1 class="text-3xl text-center mb-5 font-bold">{{ blockTitle }}</h1>
        <div class="product__list-wrapper grid grid-cols-4 gap-4">
            <MovieCard v-for="movie in movies" :key="movie.id" :data="movie"/>
        </div>
        <div class="text-2xl flex items-center justify-center mt-5">
            <fa icon="chevron-left" class="mr-2 cursor-pointer hover:text-orange-600" @click="page !== 1 && page--"/>
            <span class="text-sky-800">{{page}}</span>
            <fa icon="chevron-right" class="ml-2 cursor-pointer hover:text-orange-600" @click="page++"/>
        </div>
    </div>
</template>