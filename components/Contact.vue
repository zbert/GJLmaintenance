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
    ImageGrid
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

<style lang="scss">
.services {
  &__listing {
    ul {
      columns: 2 auto;
      column-gap: $spacing__sm;
    }

    li {
      break-inside: avoid;
      overflow: hidden;
      position: relative;
      padding-left: $spacing__bt;
      padding-bottom: $spacing__sm; 

      &:before {
        content: '';
        position: absolute;
        display: block;
        left: 0;
        width: 1.2em;
        height: 1.2em;
        background-size: contain;
        background: url("~assets/sprite/svg/checkmark.svg") no-repeat top left;
        background-size: 16px 16px;
      }
    }
  }
}
</style>