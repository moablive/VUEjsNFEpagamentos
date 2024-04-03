<template>
  <div>
      <h1>Vendedor</h1>
      <Footer />
  </div>
</template>

<script setup>
</script>

//=> COMPONENTS
<script>
import Footer from "../nav/Footer.vue";

export default {
  name: 'Event',

  components: {
    'Footer': Footer
  }
}
</script>

<style scoped>
</style>
