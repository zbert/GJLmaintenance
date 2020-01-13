<template>
  <div class="layout__body">
    <welcome v-bind="welcomeContent" />
    <services v-bind="servicesContent" />
    <why-hire v-bind="hireUsContent" />
    <work v-bind="workContent" />
  </div>
</template>

<script>
import WorkJson from '~/static/content/work.json'

export default {
  data: () =>({
    workContent: WorkJson
  })
}
</script>
