<template>
  <div class="image-collage" :class=[modifierClass]>
    <img class="image-collage__big" :src="bigImageUrl" />
    <img class="image-collage__small" :src="smallImageUrl" />
  </div>
</template>

<script>
export default {
  props: {
    bigImageUrl: String,
    smallImageUrl: String,
    alignment: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    modifierClass () {
      return (this.alignment === 'right')
        ? 'image-collage--right-aligned'
        : 'image-collage--left-aligned'
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

  @include screen-above('mobile-wide') {
    margin-right: 0;

    &__big {
      margin-top: 0;
    }
  }

  @include screen-above('tablet') {
    &__big {
      width: auto;
    }
    &__small {
      width: 84%;
    }
  }
}
</style>