<template>
  <div class="image-collage" :class=[modifierClass]>
    <img alt="Construction Tile, Framing, BUilding" v-if="large_image" class="image-collage__big" :src="large_image" />
    <img alt="Maintenance Repairs" v-if="small_image" class="image-collage__small" :src="small_image" />
  </div>
</template>

<script>
export default {
  props: {
    layoutType: {
      type: String,
      default: 'layoutA'
    },
    large_image: String,
    small_image: String,
    alignment: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    modifierClass () {
      return (this.layoutType === 'layoutB')
        ? 'image-collage--layoutB'
        : (this.layoutType === 'layoutC')
          ? 'image-collage--layoutC'
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

  &--layoutC &{
    &__small {
      z-index: -1;
      width: 60%;
    }
  }

  @include screen-above('mobile-wide') {
    
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
    &--layoutC {
      margin-right: $globals__container-padding * -1;
    }
    &--layoutC &{
      &__big {
        padding-bottom: $spacing__gutter * 2;
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

    &--layoutC {
      margin-right: $globals__container-padding--tablet * -1;
    }
    &--layoutC &{
      &__big {
        width: auto;
      }
      &__small {
       width: 90%;
      }
    }
  }
}
</style>