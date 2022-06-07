<script>
export default {
    name: 'MovieCard',
    props: {
        data: Object
    },
    methods: {
        generateImageSrc: (path) => {
            return process.env.VUE_APP_IMAGE_BASE_URL + path;
        }
    }
}
</script>

<template>
    <div class="movie__card flex flex-col items-center p-3 border-[1px] border-gray-300 rounded-lg hover:scale-[1.02] transition-all delay-50 hover:border-orange-600 bg-gray-200">
        <div class="relative">
            <div class="absolute top-2 right-2 flex justify-center items-center h-10 w-10 border-2 border-gray-300 rounded-full bg-whitesmoke shadow-2xl text-gray-400 hover:text-orange-600 hover:scale-105 cursor-pointer">
                <fa icon="heart" class="text-2xl"/>
            </div>
            <img :src="generateImageSrc(data.poster_path)"/>
        </div>
        <div class="movie__info flex flex-col items-center text-center py-2">
            <div class="font-bold h-12">{{data.title}}</div>
            <div class="text-sky-900">{{data.release_date.split('-')[0]}}</div>
        </div>
    </div>
</template>
