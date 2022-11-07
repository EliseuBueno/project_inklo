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
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import AccordionComponent from '../components/AccordionComponent.vue'
    export default {
        components: { AccordionComponent },
        name: ('Link'),
        setup() {
            const repositories = ref([])
            const users = ref([])
            const login = ref('')
            const sucesso = ref(false)
            const erro = ref(false)
            const route = useRoute()

            const enviarLogin = () => {
                let objPost = {
                    'login': login.value
                };
                api_save.post("/salvar-local", objPost)
                .then((res) => {
                    users.value = res.data
                    sucesso.value = true
                    erro.value = false
                    setTimeout(() => {
                        sucesso.value = false;
                    }, 3000)
                    })
                    .catch((error) => {
                        console.log(error);
                        sucesso.value = false
                        erro.value = true
                        setTimeout(() => {
                            erro.value = false;
                        }, 3000)
                    })
            }

            const getRepos = onMounted(() => {
                login.value = route.params.login
                    api.get('/'+ login.value + '/repos')
                        .then((res) => {
                            repositories.value = res.data
                        })
                        .catch((error) => {
                            console.log(error);
                        })
            })

            return {
                repositories,
                sucesso,
                erro,
                enviarLogin
            }
        }
    }
</script>