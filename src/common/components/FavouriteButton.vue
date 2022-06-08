<script>
import { favourites } from '../utils/api-utils'
import { ref, computed } from 'vue'

export default {
    name: 'FavouriteButton',
    props: {
        data: Object
    },
    setup(props) {
        const favourite = ref(favourites.isFavourite(props.data.id));
        const buttonMainStyle = 'absolute top-2 right-2 flex justify-center items-center h-10 w-10 border-2 border-gray-300 rounded-full bg-whitesmoke shadow-2xl'

        const handleClick = (id) => {
            if (favourites.isFavourite(id)) {
                favourites.removeFromFavourites(id);

                favourite.value = false;
            } else {
                favourites.addToFavourites(props.data);

                favourite.value = true;
            }
        };

        const getButtonClass = computed(() => {
            return favourite.value ? ' text-orange-600 hover:text-gray-300' : ' text-gray-300 hover:text-orange-600';
        })

        return {
            handleClick,
            buttonMainStyle,
            getButtonClass
        }
    }
}
</script>

<template>
    <div 
        :class="buttonMainStyle + getButtonClass"
        @click="handleClick(data.id)"
    >
        <fa icon="heart" class="text-2xl"/>
    </div>
</template>