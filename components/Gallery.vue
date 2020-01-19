<template>
  <div class="gallery section">
    <div class="container container--clearfix">
      <div class="gallery__heading">
        <nuxt-link class="gallery__back-link" aria-label="Go back to the Homepage" to="/">
          <svg stroke="inherit" class="gallery__back-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20"><path stroke="inherit" d="M13.891 17.418c0.268 0.272 0.268 0.709 0 0.979s-0.701 0.271-0.969 0l-7.83-7.908c-0.268-0.27-0.268-0.707 0-0.979l7.83-7.908c0.268-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.979l-7.141 7.419 7.141 7.418z"></path></svg>
        </nuxt-link>
        <h1 class="gallery__title type__h1">{{title}}</h1>
      </div>
      <ul class="gallery__list">
        <li v-for="(imageUrl, index) in gallery" :key="imageUrl" class="gallery__cell">
          <button aria-label="Zoom into Image" class="gallery__button-expand">
            <img :alt="title + '-item-' + index" class="gallery__image" :src="imageUrl">
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gallery: Array,
    title: String
  }
}
</script>

<style lang="scss" scoped>
.gallery {

  &__heading {
    display: flex;
    align-items: center;
    margin-bottom: $spacing__bt;
  }

  &__back-icon {
    width: 14px;
  }

  &__back-link {
    display: inline-flex;
    align-items: center;
    border: 1px solid $colors__blue;
    color: $colors__blue;
    padding: 6px;
  }

  &__title {
    padding-left: $spacing__bt;
  }

  &__image {
    display: block;
  }

  $grid-spacing: $spacing__unit;
  &__list {  
    margin-left: $grid-spacing * -0.5;
    margin-right: $grid-spacing * -0.5;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: stretch;
  }

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

  &__button-expand {
    @include transition(transform, box-shadow);
    padding: 0;

    &:focus {
      transform: translateY(-4px);
      box-shadow: 0 0 8px 8px rgba(0,0,0, 0.2)
    }
  }

  @include screen-above('tablet') {
    $grid-spacing: $globals__container-padding--tablet;

    &__back-link {
      @include transition(background-color, color);

      path {
        @include transition( color);
      }

      &:hover {
        background-color: $colors__blue;
        color: $colors__white;

        path {
          fill: $colors__white;
        }
      }
    }
    &__button-expand {
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0px 3px 10px 6px rgba(0,0,0, 0.2)
      }
    }
    &__list {  
      margin-left: $grid-spacing * -0.5;
      margin-right: $grid-spacing * -0.5;
    }

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