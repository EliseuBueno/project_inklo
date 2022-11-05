<template>
    <navbar-component/><br>
    <router-view/><br>
    <footer-component/>
</template>

<script>
    import FooterComponent from './components/layouts/FooterComponent.vue'
    import NavbarComponent from './components/layouts/NavbarComponent.vue'
    export default {
        components: { NavbarComponent, FooterComponent },
        name: ('App')
    }
</script>