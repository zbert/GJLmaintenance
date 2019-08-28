<template>
  <header class="global-header">
    <div class="global-header__bar type__h6">
      <div class="global-header__bar-flex  container">
        <div class="global-header__bar-promo">{{promotion}}</div>
        <div class="global-header__bar-promo global-header__bar-promo--contact">
          <span class="global-header__promo-label">{{promoLabelLeft}}</span> <a :href="'tel:' + phone">{{phone}}</a>
        </div>
      </div>
    </div>
    <div class="global-header__main container">
      <h1 class="global-header__brand">
        <span class="util__sr-only">{{siteTitle}}</span>
        <img class="global-header__brand-image" alt="GJL Construction & Maintenance" src="~/assets/images/logo.svg">
      </h1>
      <button @click.prevent="toggleMenu" :class="[menuStateClass]" class="burger">
        <span class="burger__case">
          <span class="burger__line burger__buns"></span>
          <span class="burger__line burger__fillings"></span>
          <span class="burger__line burger__buns burger__buns--bottom"></span>
        </span>
        <span class="burger__label">Menu</span>
      </button>
      <nav class="global-header__navbar" :class="[navbarStateClass]">
        <a v-for="link in links" 
          :key="link.label"
          :href="link.url"
          @click.prevent="scrollToSection(link.url)"
        class="global-header__navbar-link">{{link.label}}</a>
      </nav>
    </div>
  </header>
</template>

<script>
const scrollOptions = {
  easing: 'ease-in-out'
}

export default {
  props: {
    promotion: String,
    phone: String
  },
  data: () => ({
    expandMenu: false,
    promoLabelLeft: 'Call Us:',
    siteTitle: 'GJL Construction & Maintenance',
    links: [
      {
        url: '#services',
        label: 'Our Services'
      },
      {
        url: '#hire-us',
        label: 'Why Hire Us'
      },
      {
        url: '#our-work',
        label: 'Our Work'
      }
    ]
  }),
  computed: {
    menuStateClass () {
      return {
        'burger--is-active': this.expandMenu
      }
    },
    navbarStateClass () {
      return {
        'global-header__navbar--is-active': this.expandMenu
      }
    }
  },
  methods: {
    toggleMenu () {
      this.expandMenu = !this.expandMenu
    },
    scrollToSection (idContainer) {
      this.closeMenu()
      this.$scrollTo(idContainer, 700, scrollOptions)
    },
    closeMenu () {
      this.expandMenu = false
    }
  }
}
</script>

<style lang="scss" scoped>
.global-header {
  &__bar {
    background-color: $colors__blue;
    color: $colors__white;
    text-align: center;
    padding-top: $spacing__sm;
    padding-bottom: $spacing__sm;
    
  }

  &__bar-flex {
    display: flex;
    justify-content: space-between;
    align-items: center; 
  }

  &__bar-promo {
    &:first-child {
      width: 40%;
    }
    &--contact {
      flex-shrink: 0;
      padding-left: $spacing__sm;
    }
  }

  &__brand {
    width: 200px;
  }

  &__brand-image {
    display: block;
    width: 100%;
  }

  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: $spacing__bt;
    padding-bottom: $spacing__bt;
  }

  &__navbar {
    opacity: 0;
    visibility: hidden;

    position: fixed;
    z-index: 10;
    background-color: $colors__white;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 130px;
    text-align: center;
    transition: opacity $transition__duration $transition__easing,
      visibility 10ms linear $transition__duration;

    &--is-active {
      @include transition(opacity 0.7s);
      opacity: 1;
      visibility: visible;
    }
  }

  &__navbar-link {
    @include font-weight('bold');
    font-size: $fonts__h1;
    display: table;
    margin: 10vh auto 0;
  }

  @include screen-above('mobile-wide') {
    $font-nav-size: 17px;

    &__bar-promo {
      &:first-child {
        width: auto;
      }
    }

    &__navbar {
      opacity: 1;
      visibility: visible;

      position: static;
      z-index: 10;
      background-color: $colors__white;
      top: auto;
      left: auto;
      width: auto;
      height: auto;
      padding-top: 0;
      text-align: left;
      transition: opacity $transition__duration $transition__easing,
        visibility 10ms linear $transition__duration;
    }

    &__navbar-link {
      font-size: $font-nav-size;
      display: inline-block;
      margin: 0;

      &:not(:first-child) {
        margin-left: 1em;
      }
    }

    &__brand {
      width: 225px;
    }
  }

  @include screen-above('tablet') {
    $font-nav-size: 19px;

    &__main {
      padding-top: $spacing__gutter;
      padding-bottom: $spacing__gutter;
    }

    &__navbar-link {
      font-size: $font-nav-size;
      &:not(:first-child) {
        margin-left: 2em;
      }
    }

    &__brand {
      width: 270px;
    }
  }
}
</style>

<style lang="scss" scoped>
.burger {
  $bun-width: 30px;
  $bun-height: 2px;
  $bun-spacing: 6px;
  $bun-speed: .35s;
  text-align: center;
  position: relative;
  z-index: 11;

  &__case {
    display: inline-block;
    backface-visibility: hidden;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: $bun-width;
    height: $bun-height*3 + $bun-spacing*2;
  }
  
  &__buns {
    background-color: $colors__black;
    height: $bun-height;
    display: block;
    position: absolute;
    width: 100%;
    top: 0;

    &--bottom {
      top: $bun-height*2 + $bun-spacing*2;
    }
  }

  &__fillings {
    @include transition(opacity);

    background-color: $colors__black;
    height: $bun-height;
    display: block;
    position: absolute;
    width: 100%;
    top: $bun-height + $bun-spacing;
  }

  &--is-active &{
    &__buns {
      top: $bun-height + $bun-spacing;
      transform: rotate(45deg);
      transition: top $bun-speed $transition__easing,
      transform $bun-speed $transition__easing $bun-speed;
      width: 90%;

      &--bottom {
        top: $bun-height + $bun-spacing;
        transform: rotate(-45deg);
      }
    }

    &__fillings {
      transition: opacity $bun-speed linear $bun-speed/2;
      opacity: 0;
    }
  }

  &__label {
    @include font-weight('semibold');
    font-size: $fonts__smallest;
    text-transform: uppercase;
  }

  @include screen-above('mobile-wide') {
    display: none;
  }
}
</style>

<style lang="scss">
.global-header {
  .bullet {
    font-size: 1.5em;
    vertical-align: middle;
  }
}
</style>