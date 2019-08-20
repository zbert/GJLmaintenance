<template>
  <div class="work section section--cream">
    <div class="container">
      <h2 class="work__title type__h2" v-html="title"></h2>
      <image-grid :images="images"></image-grid>
    </div>    
  </div>
</template>

<script>
import ImageGrid from '~/components/ImageGrid'

export default {
  components: {
    ImageGrid
  },
  data: () => ({
    title: 'Our Work Speaks For Itself',
    message: '<ul><li>Roof repair.</li><li>Windows repair.</li><li>Hardwood floors repair.</li><li>Patch and paint drywall.</li><li>Stoves and refrigerator repair.</li><li>Toilets replace and repair.</li><li>Showers faucet and drains repair.</li><li>Kitchen issues repair</li><li>Electrical issues repair.</li><li>Section 8 inspections.</li><li>Furnace repair and replace</li><li>Water tank repair and replace.</li><li>Rod out drains.</li><li>Doors and locks replace and repair.</li><li>Garage doors replace and repair.</li></ul>',
    images:[
      {
        url: '/images/grid-img-1.jpg',
        alt: 'Kitchen Demolition'
      },
      {
        url: '/images/grid-img-2.jpg',
        alt: 'Kitchen Cabinet Installation'
      },
      {
        url: '/images/grid-img-3.jpg',
        alt: 'Kitchen Remodeled'
      }
    ]
  })
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