<script>
import { ref } from 'vue'

export default {
    name: 'SearchBar',
    setup() {
        const inputActive = ref(false);
        
        const handleClick = () => {
            inputActive.value = !inputActive.value;
        }
        
        return {
            inputActive,
            handleClick,
        }
    },
}
</script>

<template>
    <div class="flex items-center px-2">
        <fa icon="search" class="text-2xl mr-2 z-10 cursor-pointer hover:text-sky-800" :class="{'text-sky-800': inputActive}" @click="handleClick"/>
        <input type="text" class="h-8 absolute left-0 rounded-md transition-all" :class="inputActive ? 'pl-8' : 'w-0 p-0'"/>
    </div>
</template>