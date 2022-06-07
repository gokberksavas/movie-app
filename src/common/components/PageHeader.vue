<script>
import SearchBar from './SearchBar.vue'

export default {
    name: 'PageHeader',
    emits: ['menu-opened'],
    setup(props, { emit }) {
        const handleClick = () => {
            emit('menu-opened')
        }

        return {
            handleClick
        }
    },
    components: {
        SearchBar
    }
}
</script>

<template>
    <div class="flex w-full h-20 items-center bg-gray-300 select-none">
        <fa icon="align-justify" class="px-4 text-2xl cursor-pointer hover:text-sky-800" @click="handleClick"/>
        <SearchBar/>
        <h1 class="flex-1 font-Yellowtail text-5xl text-center">The Movie App</h1>
    </div>
</template>