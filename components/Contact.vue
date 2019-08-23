<template>
  <div id="contact" class="contact section">
    <div class="container">



      <h2 class="work__title type__h2">{{heading}}</h2>
      
    </div>    
  </div>
</template>

<script>

export default {
  components: {
    
  },
  props: {
    heading: String,
    gallery: Array
  }
}
</script>

<style lang="scss" scoped>
.contact {
  &__title {
    margin-bottom: $spacing__gutter;
  }

  @include screen-above('mobile-wide') {
   
  }

  @include screen-above('tablet') {
   
  }
}
</style>