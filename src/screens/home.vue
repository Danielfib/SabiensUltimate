<template>
  <div>
   <h2>Galeria de Sistemas </h2>
   <div class="col s6 containerr">
    <router-link :to="{ name: 'Galeria', params: { hello: 'dale', arrays: array } }">
        <CardOrgao nome="Sistema Reprodutor"  image="https://nuneshere.github.io/sabiens/Imagens/SistemaReprodutor.jpeg" > </CardOrgao>
    </router-link>
    <CardOrgao nome="Sistema Reprodutor" image="https://nuneshere.github.io/sabiens/Imagens/SistemaReprodutor.jpeg" > </CardOrgao>
   </div>
  </div>

</template>

<script>
  import VueGallery from 'vue-gallery';
  import CardOrgao from '../components/CardOrgao.vue'
  import {array1} from '../assets/imagens.js'

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
        array: function () {
        // `this` points to the vm instance
            return array1
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
  }
  h2{
    font-family: AvenirNext;
    font-weight: 600;
    font-size: 2.3em;
  }
</style>
