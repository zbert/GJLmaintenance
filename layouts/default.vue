<template>
  <div class="layout">
    <global-header></global-header>
    <nuxt />
  </div>
</template>



<script>
import GlobalHeader from '~/components/GlobalHeader.vue'
export default {
  components: {
    GlobalHeader
  }
}
</script>