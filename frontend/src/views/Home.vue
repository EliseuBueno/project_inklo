<template>
    <div class="container">
        <h1 class="text-center">Lista de Usuários Github</h1>
        <hr><br>
        <div class="row row-cols-2 row-cols-md-2 g-4"
        v-for="(list, index) in listUsers"
                v-bind:key="index"
        >
            <card-component
                :retorno = "retorno"
                :img= "avatar"
                :user= "name"
                :registration_dt= "rg_dt"
                :public_repos= "repos"
                :login= "login"
                :alt= "alt_img"
                v-model="link"
            />
        </div>
    </div>
</template>

<script>
    import api from "../services/api.js"
    import {format} from "date-fns"
    import CardComponent from '../components/CardComponent.vue'
    import { userStore } from '../store/user';

    export default {
        components: { CardComponent },
        name: ('Home'),
        props: ['retorno'],
        data() {
            return {
                valor: '',
                alt_img: 'Avatar Image',
                profiles: null,
                avatar: null,
                name: null,
                rg_dt: null,
                repos: null,
                login: null,
                listUsers: [],
                link: ''
            }
        },
        methods: {
            async getProfiles() {
                const store = userStore()
                const listUsers = store.listUsers
                this.listUsers = listUsers
                Array.from(listUsers).forEach(use =>
                    api.get(`/${use}`)
                        .then((res) => {
                            this.profiles = res.data
                            this.avatar = this.profiles.avatar_url
                            this.name = this.profiles.name
                            this.rg_dt = format(new Date(this.profiles.created_at), 'dd/MM/yyyy')
                            this.repos = this.profiles.public_repos
                            this.login = this.profiles.login
                            this.valor = ''
                            this.link = "https://api.github.com/users/" + this.login + "/repos"
                            console.log(this.link)
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                )
            },
            async detailUser(login) {
                const req = await fetch(`https://api.github.com/users/${login}`, {
                    method: "GET"
                });
                const res = await req.json();                
                this.getProfiles();
            }
        },
        mounted () {
            this.getProfiles()
        }
    }
</script>