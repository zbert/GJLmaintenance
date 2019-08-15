<template>
  <div class="image-grid">
    <div v-for="imgItem in images" :key="imgItem.url" class="image-grid__cell">
      <img :alt="imgItem.alt" class="image-grid__image" :src="imgItem.url">
      <span v-if="imgItem.alt" class="image-grid__label">{{imgItem.alt}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array
  }
}
</script>

<style lang="scss" scoped>
.image-grid {
  $grid-spacing: $spacing__unit;
  margin-left: $grid-spacing * -0.5;
  margin-right: $grid-spacing * -0.5;
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: stretch;

  &__cell {
    margin: $spacing__gutter $grid-spacing/2 0;
    width: calc(50% - #{$grid-spacing});

    &:nth-child(1), 
    &:nth-child(2) {
      margin-top: 0;
    }
  }

  &__label {
    color: $colors__gray-text;
    font-size: $fonts__h6;
    margin-top: 1em;
  }

  @include screen-above('tablet') {
    $grid-spacing: $globals__container-padding--tablet;
    margin-left: $grid-spacing * -0.5;
    margin-right: $grid-spacing * -0.5;

    &__cell {
      margin: $spacing__gutter $grid-spacing/2 0;
      width: calc(33.3333% - #{$grid-spacing});

      &:nth-child(3) {
        margin-top: 0;
      }
  
    }

  }
}
</style>