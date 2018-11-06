<template>
  <div>
   <h2>Galeria de Sistemas </h2>
   <div class="col s6 containerr">
    <router-link :to="{ name: 'Galeria', params: { hello: 'Sistema Auditivo', arrays: arrAudi } }">
        <CardOrgao nome="Sistema Auditivo"  image="https://1.bp.blogspot.com/-cD2COFd2-hM/WW1kyY3IYMI/AAAAAAAAGAA/kT7dFH0eZ9QPSAOTszOQJpRy-gJFbTVEACLcBGAs/s1600/Figura%2B1.jpg" > </CardOrgao>
    </router-link>

    <router-link :to="{ name: 'Galeria', params: { hello: 'Sistema Cardiovascular', arrays: arrCardio } }">
        <CardOrgao nome="Sistema Cardiovascular"  image="https://www.nursing.com.br/wp-content/uploads/2018/07/sistema-cardiovascular-1-1.jpg" > </CardOrgao>
    </router-link>

    <router-link :to="{ name: 'Galeria', params: { hello: 'Sistema Digestivo', arrays: arrDigest } }">
        <CardOrgao nome="Sistema Digestivo"  image="https://1.bp.blogspot.com/-hBbigllr7Ak/V4ZwGGiTgeI/AAAAAAAAAE8/LKCg4HaelSQxoPq-lfkl8ggiboXTRNByQCLcB/s640/sistema-digestivo.jpg" > </CardOrgao>
    </router-link>

    <router-link :to="{ name: 'Galeria', params: { hello: 'Sistema Locomotor', arrays: arrLoc } }">
        <CardOrgao nome="Sistema Locomotor"  image="https://3.bp.blogspot.com/-oFUD7WxPZGw/WorcT04mYEI/AAAAAAAAo9g/JzaJlBWwSqYTgGZJaOjseDf5gKe4C6YtACLcBGAs/s1600/El-aparato-locomotor-.jpg" > </CardOrgao>
    </router-link>    
   </div>
  </div>

</template>

<script>
  import VueGallery from 'vue-gallery';
  import CardOrgao from '../components/CardOrgao.vue'
  
  import {arrAuditivo} from '../assets/imagens.js'
  import {arrCardiovascular} from '../assets/imagens.js'
  import {arrDigestivo} from '../assets/imagens.js'
  import {arrLocomotor} from '../assets/imagens.js'

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
  }
  h2{
    font-family: AvenirNext;
    font-weight: 600;
    font-size: 2.3em;
  }
</style>
