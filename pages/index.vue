<template>
  <div class="layout__body">
    <welcome />
    <services />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import Services from '~/components/Services.vue'

export default {
  components: {
    Welcome,
    Services
  }
}
</script>

<style>

</style>
