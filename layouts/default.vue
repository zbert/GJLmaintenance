<template>
  <div class="layout">
    <global-header v-bind="generalSettings"></global-header>
    <nuxt />
    <contact v-bind="contactContent"></contact>
    <modal></modal>
  </div>
</template>



<script>
import GlobalHeader from '~/components/GlobalHeader.vue'
import GeneralSettingJson from '~/static/content/general-settings.json'
import Contact from '~/components/Contact.vue'
import Modal from '~/components/Modal.vue'

import ContactMarkdown from '~/static/content/contact/index.md'

export default {
  components: {
    GlobalHeader,
    Contact,
    Modal
  },
  data: () =>({
    generalSettings: GeneralSettingJson
  }),
  computed: {
    contactContent: () => ({
      title: ContactMarkdown.attributes.heading,
      lead: ContactMarkdown.html,
      address: ContactMarkdown.attributes.address_details
    })
  }
}
</script>