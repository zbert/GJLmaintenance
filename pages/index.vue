<template>
  <div class="layout__body">
    <welcome />
    <services />
    <why-hire v-bind="hireUsContent" />
    <work/>
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import Services from '~/components/Services.vue'
import WhyHire from '~/components/WhyHire.vue'
import Work from '~/components/Work.vue'

import HireUs from "~/static/content/hireus/_index.md"


export default {
  components: {
    Welcome,
    Services,
    WhyHire,
    Work
  },
  computed: {
    hireUsContent: () => ({
      title: HireUs.attributes.heading,
      copy: HireUs.html,
      imageGrid: HireUs.attributes.collage
    })
  }
}
</script>

<style>

</style>
