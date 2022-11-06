<template>
    <nav class="navbar navbar-expand-lg navbar-dark menu">
        <div class="container">
            <a class="navbar-brand inklo" href="#">INKLO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: ('NavbarComponent')
    }
</script>

<style scoped>
    .menu{
        background-color: #1C1C1C;
    }
    .inklo{
        color: #9400D3;
    }
</style>