<template>
  <div class="containerr">
    <a :href="destino" >
      <div class="card z-depth-0">
        <img class="imagem" :src="image" alt="Imagen da loja">
        <div>
          <h3>{{nome}}</h3>
          <p> clique aqui para ver mais</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>

  export default {
    name: "CardOrgao",
    props: ['nome','image','destino'],
    // data() {
    //   return {
    //     store: "Ben & Jerry",
    //     category: "Sorveteria",

    //   }
    // },

  };
</script>

<style scoped>
.containerr{
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(151, 151, 151, 0.29);
  opacity: 1;
  border-radius: 6px;
  background-color: #f7f9fa;
  margin-left: 5%;
  margin-right: 5%;
}
.card{
  display: flex;
  background-color: transparent;
  width: 30em;
  height: 10em;
  margin-left: 0.5em;
  margin-top: 1em;
  flex-direction: row;
  align-items: left;
  justify-content: flex-start;
  overflow: hidden;

}

.imagem {
    max-height: 305px;
   object-fit: cover;
    max-width: 8em;
    margin-left:0.25em;
    margin-bottom:1.1em;
    border-radius:0.5em;

}

.card p {
  font-size: 1.3em;
  text-align: justify;
  margin-top: 0;
  margin-bottom: 0;
  margin-top: 0.5em;
  margin-left: 0.7em;
  margin-right: 1em;
  /* white-space: pre-line; */
  color: #243539;
  font-family: AvenirNext;
  font-weight: 500;
  opacity: 0.46;
}

.card h3 {
  font-size: 1.8em;
  text-align: justify;
  margin-top: 0;
  margin-bottom: 0;
  white-space: pre-line;
  margin-left: 0.5em;
  margin-top: 0.2em;
  color: #243539;
  font-family: AvenirNext;
  font-weight: 600;
}

.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-left: 0.5em;
  padding-right: 1em;
  margin-top:0em;
}

.scrolling-wrapper-flexbox > div {
  flex: 0 0 auto;
  width: 1em;
  height: 8em;
}

.picture {
  flex: 0 0 auto;
  width: 8em;
  height: 8em;
  border-radius: 0.5em;
  margin-left: 0.7em;
  margin-right: 0.7em;
}
</style>
