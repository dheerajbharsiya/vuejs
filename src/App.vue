<template>
  <div id="app">
    <Header msg="Header"/>
    <Container/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Container from './components/container/Container.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Container,
    Footer
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
}
</style>
