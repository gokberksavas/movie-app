<script>
import SideBar from '../components/SideBar.vue'
import PageHeader from '../components/PageHeader.vue'
import { ref  } from 'vue'

export default {
    name: "GeneralLayout",
    setup() {
        const menuActive = ref(false);
        const closeMenu = () => {
            menuActive.value = false;
        };

        const openMenu = () => {
            menuActive.value = true;
        }
        

        return {
            menuActive,
            closeMenu,
            openMenu
        }
    },
    components: { 
        SideBar,
        PageHeader 
    }
}
</script>

<template>
    <SideBar :class="{'-translate-x-64': !menuActive}" @menu-closed="closeMenu"></SideBar>
    <PageHeader @menu-opened="openMenu"/>
</template>