<template>
    <div class="container">
        <h1 class="text-center">Lista de Repositórios</h1>
        <hr>
        <div 
            v-for = "(repos, index) in repositories"
            :key = "index"
        >
            <accordion-component
                :name = "repos.name"
                :description="repos.description"
                :html_url="repos.html_url"
                :created_at="created_at"
                :idAcordion="`idAcordion${index}`"
                :aria-labelledby="`idAcordion${index}`"
            />
        </div>
    </div>
</template>

<script>
    import api from "../services/api.js"
    import { repositoriesStore } from '../store/repositories';
    import AccordionComponent from '../components/AccordionComponent.vue'
    export default {
        components: { AccordionComponent },
        name: ('Link'),
        data() {
            return {
                repositories: [],
                idAcordion: '',
                login: ''
            }
        },
        methods:{
            async getRepos() {
                const store = repositoriesStore()
                const listRepositories = store.getRepositories()
                
                this.login = this.$route.params.login
                    api.get('/'+ this.login + '/repos')
                        .then((res) => {
                            this.repositories = res.data
                        })
                        .catch((error) => {
                            console.log(error);
                        })
            },
        },
        mounted () {
            this.getRepos()
        }
    }
</script>