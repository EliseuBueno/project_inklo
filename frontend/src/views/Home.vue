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
                :public_repos= "profile.public_repos"
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
    import { ref } from "vue";

    export default {
        components: { CardComponent },
        name: ('Home'),
        setup() {

            const profiles = ref([])

            const getProfiles = () => {
                const store = userStore()
                const listUsers = store.listUsers
                Array.from(listUsers).forEach(use =>
                    api.get(`/${use}`)
                        .then((res) => {
                            const infoProfile = res.data
                            infoProfile.created_at = format(new Date(infoProfile.created_at), 'dd/MM/yyyy')
                            profiles.value.push(infoProfile);
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                )
            }

            const detailUser = (login) => {
                fetch(`https://api.github.com/users/${login}`, {
                    method: "GET"
                });                
                this.getProfiles();
            }

            return {
                profiles,
                getProfiles
            }
        },
        mounted (){
            this.getProfiles()
        }
    }
</script>