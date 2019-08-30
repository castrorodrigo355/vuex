<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <FormStudent/>
    <hr>
    <Students/>
    <hr>
  </div>
</template>

<script>
import Students from "./components/Students"
import FormStudent from "./components/FormStudent"
export default {
  name: 'App',
  components: { 
    Students, FormStudent
  },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 10px; */
}
img {
  height: "10px";
  width: "10px"
}
</style>