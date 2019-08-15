<template>
  <div class="why-hire section">
    <div class="container">
      <h2 class="why-hire__title type__h2" v-html="title"></h2>
      <image-collage class="why-hire__grid" v-bind="imageGrid" layout-type="layoutC"></image-collage>
      <div class="why-hire__copy">
        <div class="rte" v-html="copy"></div>
      </div>
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
    title: 'Why Hire Us',
    copy: '<p>We are your one stop shop for a wide range of maintenance and repair solutions. So you don’t have to worry about any portion of the process.  </p><p>With our working experience at Chicago Hotels and Realty companies, we’ll work together to analyze, plan and find cost effective measures for your next construction project.</p><p>We have helped customers complete full rehab of  units, including patching and painting walls/ceilings, repairing plumbing and drains, installation of commercial vinyl tile and ceramic tiles, all while ensuring standards are up to CHA inspections.</p><p><strong>Home owners in need of renovations?</strong>  We’ll be happy to accomodate your needs, we’ve remodel entire kitchens and bathrooms. All while making the renovation process as smooth and comprehensive as possible. </p>',
    imageGrid: {
      bigImageUrl: '/images/section_three_big.jpg',
      smallImageUrl: '/images/section_three_small.jpg'
    }
  })
}
</script>

<style lang="scss" scoped>
.why-hire {
 
  &__title {
    background-color: $colors__white;
    margin-left: $globals__container-padding * -1;
    padding-left: $globals__container-padding;
    padding-right: $globals__container-padding;
    padding-bottom: $spacing__gutter;
    position: relative;
    z-index: 5;
  }

  &__copy {
    margin-top: $spacing__element;
  }

  @include screen-above('mobile-wide') {
    $content-width: 55%;

    &__title {
      float: left;
      width: $content-width;
    }

    &__grid {
      float: right;
      max-width: 100% - $content-width;
    }

    &__copy {
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