<template>
  <div class="services section section--cream">
    <div class="container">
      <h2 class="services__title type__h2" v-html="title"></h2>
      <div class="services__listing" v-html="message"></div>
      <image-collage class="services__grid" v-bind="imageGrid" layout-type="layoutB"></image-collage>
    </div>    
  </div>
</template>

<script>
import ImageCollage from '~/components/ImageCollage'

export default {
  components: {
    ImageCollage
  },
  data: () => ({
    title: 'Services',
    message: '<ul><li>Roof repair.</li><li>Windows repair.</li><li>Hardwood floors repair.</li><li>Patch and paint drywall.</li><li>Stoves and refrigerator repair.</li><li>Toilets replace and repair.</li><li>Showers faucet and drains repair.</li><li>Kitchen issues repair</li><li>Electrical issues repair.</li><li>Section 8 inspections.</li><li>Furnace repair and replace</li><li>Water tank repair and replace.</li><li>Rod out drains.</li><li>Doors and locks replace and repair.</li><li>Garage doors replace and repair.</li></ul>',
    imageGrid: {
      bigImageUrl: '/images/section_two_big.jpg',
      smallImageUrl: '/images/section_two_small.jpg'
    }
  })
}
</script>

<style lang="scss" scoped>
.services {
 
  &__listing {
    margin-top: $spacing__gutter;
  }


  @include screen-above('mobile-wide') {
    $content-width: 55%;

    &__title {
      float: right;
      width: $content-width;
    }

    &__grid {
      float: left;
      max-width: 100% - $content-width;
      margin-top: $spacing__gutter;
    }

    &__listing {
      float: right;
      clear: right;
      width: $content-width;
    }
  }

  @include screen-above('tablet') {
    $content-width: 55%;

    &__title {
      width: $content-width;
    }

    &__listing {
      width: $content-width;
    }

    &__grid {
      max-width:  100% - $content-width - 5%;
    }
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