<template>
    <div class="container">
        <form>
            
            <h1 class="text-center">Lista de Usuários GitHub</h1>
            <div class="row">
                <div class="col-md-9"></div>
                <div class="col-md-3">
                    <input 
                        class="form-control me-2" 
                        type="search" 
                        placeholder="Busca por Nome ou Usuário" 
                        aria-label="Search"
                        v-model="search"
                    >
                </div>
            </div>
            <hr><br>
            <div class="row row-cols-2 row-cols-md-2 g-4">
                <card-component
                    v-for="(profile, index) in itensFilter"
                    :key="index"
                    :img="profile.avatar_url"
                    :user= "profile.name"
                    :registration_dt= "profile.created_at"
                    :public_repos= "profile.public_repos"
                    :login= "profile.login"
                    :alt= "`Avatar_${profile.login}`"
                />
            </div>
        </form>
    </div>
</template>

<script>
    import api from "../services/api.js"
    import {format} from "date-fns"
    import CardComponent from '../components/CardComponent.vue'
    import { userStore } from '../store/user';
    import { ref, computed, onMounted } from "vue";

    export default {
        components: { CardComponent },
        name: ('Home'),
        setup() {

            const profiles = ref([])
            const search = ref('')

            const getProfiles = onMounted(() => {
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
            })

            const detailUser = (login) => {
                fetch(`https://api.github.com/users/${login}`, {
                    method: "GET"
                });                
                this.getProfiles();
            }

            const itensFilter = computed(() => {
                let valores = []
                valores = profiles.value.filter((profile) => {
                    return (
                        profile.name.toLowerCase().indexOf(search.value.toLowerCase()) > -1 ||
                        profile.login.toLowerCase().indexOf(search.value.toLowerCase()) > -1
                    )
                })
                return valores
            })

            return {
                profiles,
                getProfiles,
                search,
                itensFilter
            }
        }
    }
</script>