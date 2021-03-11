<template>
  <div>
    <navbar />
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
export default {
  components: {
    Navbar,
    AppMain
  }
}
</script>

<style scoped>
.main-container {
  position: fixed;
  top: 60px;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
}
</style>
