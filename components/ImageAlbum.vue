<template>
  <a :href="fullUrl" class="image-album">
    <div class="image-album__photo" :style="[background]"></div>
    <div class="image-album__heading">
      <span class="image-album__title type__h5">{{title}}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    url: String
  },
  computed: {
    fullUrl () {
      return `/album/${this.url}`
    },
    background () {
      return this.$backgroundStyle(this.image)
    }
  }
}
</script>

<style lang="scss" scoped>
.image-album {
  display: inline-block;
  overflow: visible;
  width: 100%;

  &__heading{
    position: relative;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      border: 2px solid $colors__black;
      background-color: $colors__brand;
      position: absolute;
      top: $spacing__unit;
      left: $spacing__unit;
    }
  }

  &__title {
    @include transition(transform);

    background-color: $colors__white;
    padding: $spacing__bt $spacing__gutter;
    display: block;
    border: 2px solid $colors__black;
    position: relative;
    z-index: 2;
    position: relative;
  }

  &__photo {
    @include transition(transform);
    @include background-cover;

    height: 0;
    padding-bottom: 62.25%;
    border: 2px solid $colors__black;
    border-bottom: 0;
  }

  @include screen-above('tablet') {
    &:hover &{
      &__title,
      &__photo {
        transform: translate($spacing__unit, $spacing__unit);
      }
    }
  }
}
</style>