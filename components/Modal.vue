<template>
  <div class="modal" @click.prevent="closeModal" :class="{'modal--is-active': zoomedImage}">
    <transition name="fade">
      <img v-if="zoomedImage"  class="modal__image" :src="zoomedImage" />
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['zoomedImage'])
  },
  methods: {
    ...mapMutations(['setZoomedImage']),
    closeModal() {
      this.setZoomedImage('')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $colors__black-opaque;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: opacity $transition__duration $transition__easing,
    visibility 5ms linear $transition__duration;
  opacity: 0;
  visibility: hidden;
  
  &--is-active {
    @include transition(opacity);
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    cursor: url('~assets/images/circle-x.svg'), auto;
  }

  .modal__image {
    max-width: 100%;
    min-width: 50%;
    min-height: 50%;
    max-height: 100%;
  }
  
}
</style>

