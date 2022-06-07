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
    <div class="movie__card flex flex-col items-center">
        <img :src="generateImageSrc(data.poster_path)"/>
        <p class="block">{{data.title}}</p>
    </div>
</template>
