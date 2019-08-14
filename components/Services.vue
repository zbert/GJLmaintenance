<template>
  <div class="services section section--cream">
    <div class="container">
      <h2 class="services__title type__h2" v-html="title"></h2>
      <div class="services__listing" v-html="message"></div>
      <image-collage class="services__grid" v-bind="imageGrid"></image-collage>
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
      bigImageUrl: '/images/section_one_big.jpg',
      smallImageUrl: '/images/section_one_small.jpg'
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
    &__title {
      float: left;
      width: 50%;
    }

    &__grid {
      float: right;
      max-width: 50%;
    }

    &__message {
      width: 50%;
    }
  }

  @include screen-above('tablet') {
    &__title {
      float: left;
      width: 60%;
    }

    &__grid {
      float: right;
      max-width: 50%;
    }

    &__message {
      width: 50%;
    }

    &__grid {
      float: right;
      max-width: 40%;
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
    }
  }
}
</style>