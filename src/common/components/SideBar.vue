<script>

export default {
    name: 'SideBar',
    emits: ['menu-closed'],
    setup(props, { emit }) {
        const handleClick = () => {
            emit('menu-closed');
        };

        return {
            handleClick
        }
    },
}
</script>

<template>
    <div class="sticky top-0 h-screen w-[250px] bg-sky-900 text-white select-none transition-all duration-300 ease-linear border-r border-orange-600 z-20 overflow-hidden">
        <div class="p-3 pt-5">
            <h1 class="text-4xl text-center mb-4 font-Yellowtail">Menu</h1>
            <fa class="absolute right-3 top-2 text-2xl cursor-pointer hover:text-orange-600" icon="xmark" @click="handleClick"></fa>
            <router-link to="/" class="flex items-center p-2 rounded-lg group hover:bg-whitesmoke hover:text-sky-800 cursor-pointer font-bold">
                <fa class="mr-3 text-xl group-hover:text-orange-600" icon="home"></fa>
                <span>Home</span>
            </router-link>
            <router-link to="/favourites" class="flex items-center p-2 rounded-lg group hover:bg-whitesmoke hover:text-sky-800 cursor-pointer font-bold">
                <fa class="mr-3 text-xl group-hover:text-orange-600" icon="heart"></fa>
                <span>Favourites</span>
            </router-link>
        </div>
    </div>
</template>