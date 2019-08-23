<template>
  <div id="welcome" class="welcome section">
    <div class="container container--clearfix">
      <h2 class="welcome__title type__h1" v-html="formattedTitle"></h2>
      <image-collage class="welcome__grid" v-bind="imageGrid"></image-collage>
      <div :style="[animationDelay]" class="welcome__message" v-html="copy"></div>
      <button class="btn welcome__cta"><span class="btn__label">Contact Us Today</span></button>

    </div>    
  </div>
</template>

<script>
import ImageCollage from '~/components/ImageCollage'

export default {
  components: {
    ImageCollage
  },
  props: {
    title: Array,
    copy: String,
    imageGrid: Object
  },
  computed: {
    formattedTitle () {
      return this.title.reduce((accu, item) => {
        return accu + `<span class="welcome__title-phrase">${item}</span>`
      }, '')
    },
    animationDelay () {
      return {
        animationDelay: `${this.title.length * 0.1}s`
      }
    }
  }
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

  &__cta {
    margin-top: $spacing__bt;
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

    &__cta {
      margin-top: $spacing__gutter;
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

  @keyframes animateLeft {
    from {
      opacity: 0;
      transform: translateX(1em);
    }

    to {
      opacity: 1;
      transform: translateX(0em);
    }
  }

  &__title {
    opacity: 0;
    animation: animateLeft 1s ease-in-out forwards;
  }

  &__title-phrase {
    opacity: 0;
    animation: animateLeft 1s ease-in-out forwards;
    display: block;
    position: relative;
  }

  @for $i from 2 through 5 {
    &__title-phrase {
      &:nth-child(#{$i}) {
        $animationDelay: ($i - 1) * 0.1s;
        animation-delay: $animationDelay;
      }
    }
  }

  &__message {
    opacity: 0;
    animation: animateLeft 1s $transition__duration forwards;

    em {
      color: $colors__gray-text;
      font-style: normal;
    }
  }
}
</style>