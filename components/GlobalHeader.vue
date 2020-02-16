<template>
  <header class="global-header">
    <div class="global-header__bar type__h6">
      <div class="global-header__bar-flex  container">
        <div class="global-header__bar-promo" v-html="promotion"></div>
        <div class="global-header__bar-promo global-header__bar-promo--contact">
          <svg class="global-header__promo-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" d="M23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></svg>
          <span class="global-header__promo-label">{{promoLabelLeft}}</span> <a :href="'tel:' + phone">{{phone}}</a>
        </div>
      </div>
    </div>
    <div class="global-header__main container">
      <button @click.prevent="toggleMenu" :class="[menuStateClass]" class="global-header__burger burger">
        <span class="burger__case">
          <span class="burger__line burger__buns"></span>
          <span class="burger__line burger__fillings"></span>
          <span class="burger__line burger__buns burger__buns--bottom"></span>
        </span>
        <span class="burger__label">Menu</span>
      </button>
      <div class="global-header__brand">
        <h1 class="global-header__heading">
          <span class="util__sr-only">{{siteTitle}}</span>
          <img class="global-header__brand-image" alt="GJL Construction & Maintenance" src="~/assets/images/gjl-logo.svg">
        </h1>
      </div>
      <nav class="global-header__navbar" :class="[navbarStateClass]">
        <a v-for="link in links" 
          :key="link.label"
          :href="link.url"
          @click.prevent="scrollToSection(link.url)"
        class="global-header__navbar-link">{{link.label}}</a>
      </nav>
      <a class="global-header__facebook" aria-label="Visit us at Facebook" target="_blank" rel="noopener" href="https://www.facebook.com/gjlmaintenance">
        <img class="global-header__facebook-image" alt="facebook" src="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMjQgMjgiPgo8dGl0bGU+ZmFjZWJvb2stb2ZmaWNpYWw8L3RpdGxlPgo8cGF0aCBmaWxsPSIjNDI2N2IyIiBkPSJNMjIuNjcyIDJjMC43MzQgMCAxLjMyOCAwLjU5NCAxLjMyOCAxLjMyOHYyMS4zNDRjMCAwLjczNC0wLjU5NCAxLjMyOC0xLjMyOCAxLjMyOGgtNi4xMDl2LTkuMjk3aDMuMTA5bDAuNDY5LTMuNjI1aC0zLjU3OHYtMi4zMTJjMC0xLjA0NyAwLjI4MS0xLjc1IDEuNzk3LTEuNzVsMS45MDYtMC4wMTZ2LTMuMjM0Yy0wLjMyOC0wLjA0Ny0xLjQ2OS0wLjE0MS0yLjc4MS0wLjE0MS0yLjc2NiAwLTQuNjcyIDEuNjg3LTQuNjcyIDQuNzgxdjIuNjcyaC0zLjEyNXYzLjYyNWgzLjEyNXY5LjI5N2gtMTEuNDg0Yy0wLjczNCAwLTEuMzI4LTAuNTk0LTEuMzI4LTEuMzI4di0yMS4zNDRjMC0wLjczNCAwLjU5NC0xLjMyOCAxLjMyOC0xLjMyOGgyMS4zNDR6Ij48L3BhdGg+Cjwvc3ZnPgo=" />
      </a>

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
    min-width: 200px;
    flex-grow: 1;
  }

  &__brand-image {
    display: block;
    width: 100%;
  }

  &__heading {
    max-width: 195px;
  }

  &__main {
    display: flex;
    // justify-content: space-between;
    align-items: baseline;
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

  &__burger {
    margin-right: $spacing__unit;
  }

  &__facebook {
    align-self: center;
    color: $colors__facebook;
  }

  &__promo-icon {
    width: 16px;
    vertical-align: middle;
    display: inline-block;
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
      margin-right: 1em;
    }

    &__heading {
      width: 100%;
      max-width: 225px;
    }

    &__facebook {
      margin-left: 2em;
      align-self: auto;
      vertical-align: bottom;
    }

    &__facebook-image {
      vertical-align: bottom;
    }
  }

  @include screen-above('tablet') {
    $font-nav-size: 19px;

    &__main {
      padding-top: $spacing__gutter;
      padding-bottom: $spacing__gutter;
    }

    &__navbar-link {
      @include transition('color');
      font-size: $font-nav-size;
      margin-left: $spacing__unit;
      margin-right: 2em;

      &:hover {
        color: $colors__blue;
      }
    }

    &__heading {
      max-width: 270px;
    }

    &__promo-icon {
      width: 20px;
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
  padding-left: 0;

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
    display: block;
    // position: absolute;
    height: 0;
    opacity: 0;
  }

  @include screen-above('mobile-wide') {
    .bullet {
      vertical-align: middle;
      display: inline;
      opacity: 1;
    }
  }
}
</style>