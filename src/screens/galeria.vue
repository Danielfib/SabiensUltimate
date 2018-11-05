<template>
  <div>
    <h2>Galeria: {{hello}} </h2>
    <h2>{{arrays}}</h2>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in arrays"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    name: 'Galeria',
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
</style>
