<template>
    <navbar-component/><br>
    <router-view/><br>
</template>

<script>
import NavbarComponent from './components/layouts/NavbarComponent.vue'
    export default {
  components: { NavbarComponent },
        name: ('App')
    }
</script>