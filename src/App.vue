<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: AvenirNext;
  font-weight: 300;
  src: url("./assets/fonts/AvenirNextLTPro-Light.otf");
}

@font-face {
  font-family: AvenirNext;
  src: url("./assets/fonts/AvenirNextLTPro-Regular.otf");
}

@font-face {
  font-family: AvenirNext;
  font-weight: 600;
  src: url("./assets/fonts/AvenirNextLTPro-Demi.otf");
}

@font-face {
  font-family: AvenirNext;
  font-weight: bold;
  src: url("./assets/fonts/AvenirNextLTPro-Bold.otf");
}

@font-face {
  font-family: AvenirNext;
  font-weight: 900;
  src: url("./assets/fonts/AvenirNextLTPro-Heavy.otf");
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
