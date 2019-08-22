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

import markdownFile from "~/static/content/hireus/_index.md"
import fm from 'front-matter'

export default {
  components: {
    Welcome,
    Services,
    WhyHire,
    Work
  },
  mounted() {
    console.log(fm(markdownFile))
  }
}
</script>

<style>

</style>
