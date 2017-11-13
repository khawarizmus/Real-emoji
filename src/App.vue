<template>
  <div id="app">
    <h1>Real-imoji</h1>
    <img class="logo" src="./assets/logo.jpg">
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted() {
  },
}
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.logo {
  width: 8%;
  margin: 16px auto;
}
</style>
