<template>
  <div>
   <h2>Galeria de Sistemas </h2>
   <div class="col s6 containerr">
    <router-link :to="{ name: 'Galeria', link:'', params: { hello: 'Sistema Nervoso', arrays: getNervoso } }">
        <CardOrgao nome="Sistema Nervoso"  image="http://finantia-esm.com/wp-content/uploads/2016/05/sistema-nervoso-212x300.jpg" > </CardOrgao>
    </router-link>
    <router-link :to="{ name: 'Galeria', params: { hello: 'Sistema Reprodutor', arrays: getReprodutor, link:'https://nuneshere.github.io/sabiens/sistemaGFem.html' } }">
        <CardOrgao nome="Sistema Reprodutor"  image="https://nuneshere.github.io/sabiens/Imagens/SistemaReprodutor.jpeg" > </CardOrgao>
    </router-link>
    <router-link :to="{ name: 'Galeria', params: { hello: 'Sistema Respiratorio', arrays: getRespiratorio } }">
        <CardOrgao nome="Sistema Respiratorio"  image="https://i.ytimg.com/vi/1FSK3dyvoIc/hqdefault.jpg" > </CardOrgao>
    </router-link>
    <router-link :to="{ name: 'Galeria', params: { hello: 'Sistema Urinário', arrays: getUrinario, link:'https://nuneshere.github.io/sabiens/sistemaUrinario.html'} }">
        <CardOrgao nome="Sistema Urinário"  image="https://nuneshere.github.io/sabiens/Imagens/sistemaUrinario.jpg" > </CardOrgao>
    </router-link>
   </div>
  </div>

</template>

<script>
  import VueGallery from 'vue-gallery';
  import CardOrgao from '../components/CardOrgao.vue'
  import {arrayNervoso,arrayReprodutor,arrayRespiratorio,arrayUrinario} from '../assets/imagens.js'

  export default {
    data: function () {
      return {
        images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
      };
    },
    created() {
            this.id = this.$route.params.id;
    },
     computed: {
    // a computed getter
        getNervoso: function () {
        // `this` points to the vm instance
            return arrayNervoso
        },
        getReprodutor: function () {
        // `this` points to the vm instance
            return arrayReprodutor
        },
        getRespiratorio: function () {
        // `this` points to the vm instance
            return arrayRespiratorio
        },
        getUrinario: function () {
        // `this` points to the vm instance
            return arrayUrinario
        }

    },

    components: {
      'gallery': VueGallery,
       CardOrgao,
    },
  }
</script>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
  .containerr{
    display: flex; /* or inline-flex */
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1em;
    justify-content: center;
  }
  h2{
    font-family: AvenirNext;
    font-weight: 600;
    font-size: 2.3em;
  }
</style>
