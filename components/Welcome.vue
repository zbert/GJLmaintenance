<template>
  <div class="welcome section">
    <div class="container container--clearfix">
      <h2 class="welcome__title type__h1" v-html="title"></h2>
      <image-collage class="welcome__grid" v-bind="imageGrid"></image-collage>
      <div class="welcome__message" v-html="message"></div>
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
    title: '<span>Repairs,</span><span>Maintenance,</span><span>Home Improvents and</span><span>more…</span>',
    message: 'With over 15 years of experience, we provide expert property maintenance for all types of needs. <span class="lightgray">From ensuring  all plumbing and electrical appliances are in good working conditions to rehabbing units to Section 8 compliancy, no job is too small.</span>',
    imageGrid: {
      bigImageUrl: '/images/section_one_big.jpg',
      smallImageUrl: '/images/section_one_small.jpg'
    }
  })
}
</script>

<style lang="scss" scoped>
.welcome {
  padding-top: 0;

  &__title {
    background-color: $colors__white;
    margin-left: $globals__container-padding * -1;
    padding-left: $globals__container-padding;
    padding-right: $globals__container-padding;
    padding-bottom: $spacing__gutter;
    position: relative;
    z-index: 5;
  }

  &__message {
    @include fonts-lead-copy;

    margin-top: $spacing__element;
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
      width: 60%;
    }

    &__grid {
      max-width: 50%;
    }

    &__message {
      width: 50%;
    }

    &__grid {
      max-width: 40%;
    }
  }
}
</style>

<style lang="scss">
.welcome {
  padding-top: 0;

  &__title {
    > span {
      display: block;
    }
  }

  &__message {
    .lightgray {
      color: $colors__gray-text;
    }
  }
}
</style>