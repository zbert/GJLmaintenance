<template>
  <div id="our-work" class="work section section--cream">
    <div class="container">
      <h2 class="work__title type__h2">{{heading}}</h2>
      <image-grid :images="gallery"></image-grid>
    </div>    
  </div>
</template>

<script>
import ImageGrid from '~/components/ImageGrid'

export default {
  components: {
    ImageGrid
  },
  props: {
    heading: String,
    gallery: Array
  }
}
</script>

<style lang="scss" scoped>
.work {
  &__title {
    margin-bottom: $spacing__gutter;
  }

  @include screen-above('mobile-wide') {
   
  }

  @include screen-above('tablet') {
   
  }
}
</style>