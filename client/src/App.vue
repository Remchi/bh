<template>
  <div id="app">    
      <pp-header></pp-header>    
      <router-view></router-view>   
      <pp-footer></pp-footer>   
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  //name: 'app',
  components: {
    "pp-header": Header,
    "pp-footer": Footer
  }

}
</script>

