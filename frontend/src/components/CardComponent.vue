<template>
        <div class="col">
            <div class="card card-zoom">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img :src="img" class="img-fluid rounded-start" :alt="alt">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title text-uppercase"><strong>{{user}}</strong></h5>
                            <p class="card-text">O usuário <strong>{{login}}</strong> possui hoje <strong>{{public_repos}}</strong> repositórios publicados</p>
                            <router-link v-bind:to="'/link/'+ id " tag="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Detalhes</router-link>
                        </div>
                    </div>
                    <div class="col-md-2 d-flex flex-column justify-content-center align-items-center">
                        <p>{{public_repos}}</p>
                    </div>
                    <div class="card-footer text-muted text-center">
                        Usuário desde: {{registration_dt}}
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: ('CardComponent'),
        props: [
            'alt',
            'img',
            'user',
            'registration_dt',
            'public_repos',
            'login',
            'id'
        ]
    }
</script>

<style scoped>
    .card-zoom:hover{
        -webkit-transform: scale(1.08);
        transform: scale(1.08);
    }
</style>