<template>
    <div class="container">
        <h1 class="text-center">Lista de Repositórios</h1>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a href="#" class="btn btn-primary" @click="enviarLogin">Salvar Repositórios</a>
        </div><br>
        <div class="alert alert-success" role="alert" v-show="sucesso">
            Arquivo salvo com sucesso!!!
        </div>
        <div class="alert alert-danger" role="alert" v-show="erro" >
            Erro ao gerar o arquivo!!!
        </div>
        <hr>
        <div 
            v-for = "(repos, index) in repositories"
            :key = "index"
        >
            <accordion-component
                :name = "repos.name"
                :description="repos.description"
                :html_url="repos.html_url"
                :databstarget="`#target${index}`"
                :databstargetId="`target${index}`"
            />
        </div>
    </div>
</template>

<script>
    import api from "../services/api.js"
    import api_save from "../services/api_save.js"
    import AccordionComponent from '../components/AccordionComponent.vue'
    export default {
        components: { AccordionComponent },
        name: ('Link'),
        data() {
            return {
                repositories: [],
                login: '',
                users: [],
                sucesso: false,
                erro: false,
            }
        },
        methods:{
            async enviarLogin() {
                let objPost = {
                    'login': this.login
                };
                api_save.post("/salvar-local", objPost)
                .then((res) => {
                    this.users = res.data
                    this.sucesso = true
                    this.erro = false
                    setTimeout(() => {
                        this.sucesso = false;
                    }, 3000)
                    })
                    .catch((error) => {
                        console.log(error);
                        this.sucesso = false
                        this.erro = true
                        setTimeout(() => {
                            this.erro = false;
                        }, 3000)
                    })
            },
            async getRepos() {
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