<template>
    <nav-bar/>
    <router-view/>
</template>

<script>
import NavBar from './components/layouts/NavBar.vue'
    export default {
  components: { NavBar },
        name: ('App')
    }
</script>