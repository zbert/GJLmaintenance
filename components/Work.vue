<template>
  <div id="our-work" class="work section section--cream">
    <div class="container">
      <h2 class="work__title type__h2">{{heading}}</h2>
      <ul class="work__list">
        <li v-for="album in folders" :key="album.folder_name" class="work__list-album">
          <image-album
            :title="album.folder_name"
            :image="mainImage(album)"></image-album>
        </li>
      </ul>
    </div>    
  </div>
</template>

<script>
import ImageAlbum from '~/components/ImageAlbum'

export default {
  components: {
    ImageAlbum
  },
  props: {
    heading: String,
    gallery: Array,
    folders: Array
  },
  methods: {
    mainImage (album) {
      return album.gallery && album.gallery[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.work {
  &__title {
    margin-bottom: $spacing__gutter;
  }

  @include screen-above('mobile-wide') {
    $grid-spacing: $globals__container-padding / 2;

    &__list {
      display: flex;
      margin-left: $grid-spacing * -1;
      margin-right: $grid-spacing * -1;
    }
    
    &__list-album {
      width: calc(50% - #{$grid-spacing * 2});
      margin: 0 $grid-spacing $grid-spacing; 
    } 
  }

  @include screen-above('tablet') {
    $grid-spacing: $globals__container-padding--tablet / 2;

    &__list {
      display: flex;
      margin-left: $grid-spacing * -1;
      margin-right: $grid-spacing * -1;
    }
    
    &__list-album {
      width: calc(50% - #{$grid-spacing * 2});
      margin: 0 $grid-spacing $grid-spacing; 
    } 
  }

  @include screen-above('desktop') {
    $grid-spacing: $globals__container-padding--tablet / 2;
    &__list-album {
      width: calc(33.33334% - #{$grid-spacing * 2});
    } 
  }
}
</style>