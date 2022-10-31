<template>
    <div class="container">
        <h1 class="text-center">Lista de Usuários Github</h1>
        <hr><br>
        <div class="row row-cols-2 row-cols-md-2 g-4">
            <card-component
                v-for="user in users"
                :key="user.id"
                :img= "avatar"
                :user= "login"
                :registration_dt= "rg_dt"
                :public_repos= "repos"
                :login= "login"
                :alt= "alt_img"
            />
        </div>
    </div>
</template>

<script>
    import api from "../services/api.js"
    import {format} from "date-fns"
    import CardComponent from '../components/CardComponent.vue'
    export default {
        components: { CardComponent },
        name: ('Home'),
        data() {
            return {
                alt_img: 'Avatar Image',
                profiles: null,
                avatar: null,
                name: null,
                rg_dt: null,
                repos: null,
                login: null,
                users: [
                    {
                        id: 1,
                        log: 'wallysonn'
                    },
                    {
                        id: 2,
                        log: 'diego3g'
                    },
                    {
                        id: 3,
                        log: 'filipedeschamps'
                    },
                    {
                        id: 4,
                        log: 'rmanguinho'
                    },
                ]
            }
        },
        methods: {
            async getProfiles() {
                Array.from(this.users).forEach(use => 
                    api.get(`/${use.log}`)
                        .then((res) => {
                            this.profiles = res.data
                            this.avatar = this.profiles.avatar_url
                            this.name = this.profiles.name
                            this.rg_dt = format(new Date(this.profiles.created_at), 'dd/MM/yyyy')
                            this.repos = this.profiles.public_repos
                            this.login = this.profiles.login
                            console.log(use.log)
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                )
            }
        },
        mounted() {
            this.getProfiles()
        }
    }
</script>