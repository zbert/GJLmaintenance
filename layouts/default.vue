<template>
  <div class="layout">
    <global-header v-bind="generalSettings"></global-header>
    <nuxt />
  </div>
</template>



<script>
import GlobalHeader from '~/components/GlobalHeader.vue'
import GeneralSettingJson from '~/static/content/general-settings.json'

export default {
  components: {
    GlobalHeader
  },
  data: () =>({
    generalSettings: GeneralSettingJson
  })
}
</script>