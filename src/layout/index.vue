<template>
  <div>
    <navbar />
    <div class="main-container">
      <app-main />
    </div>
    <app-footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
import AppFooter from './components/Footer'
export default {
  components: {
    Navbar,
    AppMain,
    AppFooter
  }
}
</script>

<style scoped>
.main-container {
  /* position: fixed;
  top: 124px;
  right: 0;
  left: 0;
  bottom: 0; */
  overflow: auto;
}
</style>
