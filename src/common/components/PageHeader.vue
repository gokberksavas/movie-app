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
    <div class="sticky w-full top-0 flex h-28 items-center bg-gray-300 select-none z-30">
        <fa icon="align-justify" class="absolute left-4 px-4 text-3xl cursor-pointer hover:text-sky-800" @click="handleClick"/>
        <SearchBar class="absolute left-[4.5rem]"/>
        <h1 class="flex-1 font-Yellowtail text-5xl text-center">The Movie App</h1>
    </div>
</template>