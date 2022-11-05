<template>
    <div class="container">
        <h1 class="text-center">Lista de Usuários Github</h1>
        <hr><br>
        <div class="row row-cols-2 row-cols-md-2 g-4">
            <card-component
                v-for="(profile, index) in profiles"
                :key="index"
                :img="profile.avatar_url"
                :user= "profile.name"
                :registration_dt= "profile.created_at"
                :public_repos= "profile.repos"
                :login= "profile.login"
                :alt= "`Avatar_${profile.login}`"
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
                profiles: [],
                listUsers: []
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
                            const infoProfile = res.data
                            this.profiles.push(infoProfile);
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