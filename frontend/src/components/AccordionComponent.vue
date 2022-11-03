<template>
    <div class="accordion" id="accordion">
        <div class="accordion-item">
            <h2 class="accordion-header" :id="idAcordion">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Título: {{name}}</strong>
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" :aria-labelledby="idAcordion" data-bs-parent="#accordion">
            <div class="accordion-body">
                <p v-if="description">
                    <strong>Descrição: </strong>{{description}}
                </p>
                <div v-else class="alert alert-danger" role="alert">
                    Descrição não registrada!!!
                </div>
                <hr>
                <p v-if="html_url">
                    Acesse o repositório clicando <a :href="html_url" class="link-success" target="_blank"><strong>Aqui</strong></a>
                </p>
                <p v-else>
                    Link não registrado!!!
                </p>
                <hr>
                <div>
                    <a href="#" class="btn btn-primary">Salvar</a>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: ('AccordionComponent'),
        props: [
            'name',
            'description',
            'html_url',
            'idAcordion',
            'aria-labelledby'
        ]
    }
</script>