<script>
import FavouriteButton from './FavouriteButton.vue'

export default {
    name: 'MovieCard',
    props: {
        data: Object
    },
    methods: {
        generateImageSrc: (path) => {
            return process.env.VUE_APP_IMAGE_BASE_URL + path;
        }
    },
    components: {
        FavouriteButton
    }
}
</script>

<template>
    <div class="movie__card flex flex-col items-center p-3 border-[1px] border-gray-300 rounded-lg hover:scale-[1.02] transition-all delay-50 hover:border-orange-600 bg-gray-200">
        <div class="relative">
            <FavouriteButton :data="data"/>
            <img :src="generateImageSrc(data.poster_path)"/>
        </div>
        <div class="movie__info flex flex-col items-center text-center py-2">
            <div class="font-bold h-12">{{data.title}}</div>
            <div class="text-sky-900">{{data.release_date.split('-')[0]}}</div>
        </div>
    </div>
</template>
