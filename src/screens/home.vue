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

    <router-link :to="{ name: 'Galeria', params: { hello: 'Sistema Auditivo', arrays: arrAudi } }">
        <CardOrgao nome="Sistema Auditivo"  image="https://1.bp.blogspot.com/-cD2COFd2-hM/WW1kyY3IYMI/AAAAAAAAGAA/kT7dFH0eZ9QPSAOTszOQJpRy-gJFbTVEACLcBGAs/s1600/Figura%2B1.jpg" > </CardOrgao>
    </router-link>

    <router-link :to="{ name: 'Galeria', params: { hello: 'Sistema Cardiovascular', arrays: arrCardio, link: 'https://nuneshere.github.io/sabiens/SistemaCirculatorio.html' } }">
        <CardOrgao nome="Sistema Cardiovascular"  image="https://www.nursing.com.br/wp-content/uploads/2018/07/sistema-cardiovascular-1-1.jpg" > </CardOrgao>
    </router-link>

    <router-link :to="{ name: 'Galeria', params: { hello: 'Sistema Digestivo', arrays: arrDigest, link:  'https://nuneshere.github.io/sabiens/SistemaDigestorio.html' } }">
        <CardOrgao nome="Sistema Digestivo"  image="https://1.bp.blogspot.com/-hBbigllr7Ak/V4ZwGGiTgeI/AAAAAAAAAE8/LKCg4HaelSQxoPq-lfkl8ggiboXTRNByQCLcB/s640/sistema-digestivo.jpg" > </CardOrgao>
    </router-link>

    <router-link :to="{ name: 'Galeria', params: { hello: 'Sistema Locomotor', arrays: arrLoc, link: 'https://nuneshere.github.io/sabiens/SistemaLocomotor.html'} }">
        <CardOrgao nome="Sistema Locomotor"  image="https://3.bp.blogspot.com/-oFUD7WxPZGw/WorcT04mYEI/AAAAAAAAo9g/JzaJlBWwSqYTgGZJaOjseDf5gKe4C6YtACLcBGAs/s1600/El-aparato-locomotor-.jpg" > </CardOrgao>
    </router-link>
   </div>
  </div>

</template>

<script>
  import VueGallery from 'vue-gallery';
  import CardOrgao from '../components/CardOrgao.vue'
  import {arrayNervoso,arrayReprodutor,arrayRespiratorio,arrayUrinario} from '../assets/imagens.js'
  import {arrAuditivo, arrCardiovascular, arrDigestivo, arrLocomotor} from '../assets/imagens.js'

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
        },
        arrAudi: function () {
          return arrAuditivo
        },
        arrCardio: function () {
          return arrCardiovascular
        },
        arrDigest: function () {
          return arrDigestivo
        },
        arrLoc: function () {
          return arrLocomotor
        },
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
