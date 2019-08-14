<template>
  <div class="image-collage" :class=[modifierClass]>
    <img class="image-collage__big" :src="bigImageUrl" />
    <img class="image-collage__small" :src="smallImageUrl" />
  </div>
</template>

<script>
export default {
  props: {
    layoutType: {
      type: String,
      default: 'layoutA'
    },
    bigImageUrl: String,
    smallImageUrl: String,
    alignment: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    modifierClass () {
      return (this.layoutType === 'layoutB')
        ? 'image-collage--layoutB'
        : 'image-collage--layoutA'
    }
  }
}
</script>

<style lang="scss" scoped>
.image-collage {
  margin-right: $globals__container-padding * -1;
  position: relative;

  &__big {
    position: relative;
    display: block;
    margin-left: auto;
    margin-top: $spacing__gutter * -2;
    width: 70%;
    padding-bottom: $spacing__gutter;
  }

  &__small {
    position: absolute;
    width: 50%;
    bottom: 0;
    right: 30%;
  }

  &--layoutB {
    margin-right: 0;
    margin-left: $globals__container-padding * -1;
  }

  &--layoutB &{
    &__big {
      padding: $spacing__gutter 0 0 $spacing__gutter;
      margin-top: 0;
      margin-left: 0;
    }

    &__small {
      right: auto;
      left: 0;
      bottom: auto;
      top: 0;
    }
  }

  @include screen-above('mobile-wide') {
    margin-right: 0;

    &__big {
      margin-top: 0;
    }

    &--layoutB &{
      &__big {
        width: 90%;
      }

      &__small {
        width: 70%;
      }
    }
  }

  @include screen-above('tablet') {
    &__big {
      width: auto;
    }
    &__small {
      width: 84%;
    }

    &--layoutB &{
      &__big {
        width: auto;
      }

      &__small {
        width: 84%;
      }
    }
  }
}
</style>