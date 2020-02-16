<template>
  <div class="layout__body">
    <welcome v-bind="welcomeContent" />
    <services v-bind="servicesContent" />
    <why-hire v-bind="hireUsContent" />
    <work v-bind="workContent" />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import Services from '~/components/Services.vue'
import WhyHire from '~/components/WhyHire.vue'
import Work from '~/components/Work.vue'


import WhyHireMarkdown from '~/static/content/hireus/_index.md'
import ServicesMarkdown from '~/static/content/services/_index.md'
import WelcomeMarkdown from '~/static/content/introduction/_index.md'
import ContactMarkdown from '~/static/content/contact/index.md'
import WorkJson from '~/static/content/work.json'

export default {
  components: {
    Welcome,
    Services,
    WhyHire,
    Work
  },
  computed: {
    hireUsContent: () => ({
      title: WhyHireMarkdown.attributes.heading,
      copy: WhyHireMarkdown.html,
      imageGrid: WhyHireMarkdown.attributes.collage
    }),
    servicesContent: () => ({
      title: ServicesMarkdown.attributes.heading,
      copy: ServicesMarkdown.html,
      imageGrid: ServicesMarkdown.attributes.collage
    }),
    welcomeContent: () => ({
      title: WelcomeMarkdown.attributes.heading,
      copy: WelcomeMarkdown.html,
      imageGrid: WelcomeMarkdown.attributes.collage
    })
  },
  data: () =>({
    workContent: WorkJson
  })
}
</script>

<style>

</style>
