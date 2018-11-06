<template>
  <div >
    <h2>Galeria: {{hello}} </h2>
    <div class="subtitle">
      <a :href="link" class="butaozao waves-effect waves-light btn">Ler mais sobre esse sistema</a>
      <!-- <h2>url({{arrays}}</h2> -->
      <!-- <img :src="arrays[0]" /> -->
      <div class= "duvidaCont">
        <h3>Tem duvidas? mande a sua</h3>
        <div  class="duvidas" >
          <div class="row">
            <div class="input-field ">
              <input placeholder="Digite a duvida" v-model="duvida" name="duvida" id="first_name2" type="text" class="validate">
              <label class="active" for="first_name2">Qual sua duvida?</label>
            </div>
          </div>
          <a class="enviar waves-effect waves-light btn" :href="hrefWhats + '?text=Olá%20tenho%20uma%20duvida%20segue:%20' + duvida ">
            Enviar Dúvida
          </a>
          </div>
      </div>
    </div>



    <div  class="conteudo" >
      <gallery :images="arrays" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in arrays"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url('+ image + ')', width: '300px', height: '200px', objectFit: cover }"
      ></div>
    </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    name: 'Galeria',
    data: function () {
      return {
        // images: [
        //   require('../assets/sistemas/auditivo/2016-11-17 04.48.45 1.jpg'),
        //   'https://dummyimage.com/1600/ffffff/000000',
        //   'https://dummyimage.com/1280/000000/ffffff',
        //   'https://dummyimage.com/400/000000/ffffff',
        // ],
        index: null,
        duvida: '',
        hrefWhats: 'https://wa.me/5581998350872'
      };
    },
    created() {
            this.id = this.$route.params.id;
    },
    mounted: function (){

    },
    computed: {
    // a computed getter
        hello: function () {
        // `this` points to the vm instance
            return this.$route.params.hello
        },
        arrays: function () {
        // `this` points to the vm instance
            console.log(this.$route.params.arrays)
            return this.$route.params.arrays
        },
        link: function () {
        // `this` points to the vm instance
            return this.$route.params.link
        }

    },
    methods: {
            navigate() {
                router.go(-1);
            }
    },
    components: {
      'gallery': VueGallery
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
  h2{
    font-family: AvenirNext;
    font-weight: 600;
    font-size: 2.3em;
  }
  h3{
    font-family: AvenirNext;
    font-weight: 600;
    font-size: 1.0em;
    margin-left: -9em;
  }
  .row{
    margin-top: 1em;
  }
  .duvidaCont{
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .duvidas{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;

  }
  .subtitle{
    flex-direction: row;
    display: flex;
    background-color: #ebebeb;
    justify-content: center;
    flex-wrap: wrap;
  }
  .enviar{
    border-radius: 20em;
    margin-top: 2em;
    margin-right: 2em;
    color:white;
  }
  .butaozao{
    border-radius: 20em;
    margin-top: 2em;
    margin-right: 2em;
    background-color: #F9DF5F;
    color:#826830;
  }
  .conteudo{
      margin-left:2em;
  }
  @media only screen and (min-width: 768px) {
    .conteudo{
      margin-left:5em;
    }
  }
  @media only screen and (min-width: 600px) {
    .conteudo{
      margin-left:6em;
    }
  }
</style>
