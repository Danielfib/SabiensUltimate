<template>
  <div>
   <div>hello </div>
   <div class="container">
    <CardOrgao store="teucu" destino="/#/galeria" message="Compras" image="https://nuneshere.github.io/sabiens/Imagens/SistemaReprodutor.jpeg" > </CardOrgao>
   </div>
  </div>

</template>

<script>
  import VueGallery from 'vue-gallery';
  import CardOrgao from '../components/CardOrgao.vue'

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
</style>
