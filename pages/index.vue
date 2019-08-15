<template>
  <div class="layout__body">
    <welcome />
    <services />
    <why-hire/>
    <work/>
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import Services from '~/components/Services.vue'
import WhyHire from '~/components/WhyHire.vue'
import Work from '~/components/Work.vue'

export default {
  components: {
    Welcome,
    Services,
    WhyHire,
    Work
  }
}
</script>

<style>

</style>
