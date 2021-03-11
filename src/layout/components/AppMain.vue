<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 60px);
}
</style>
