<template>
  <header class="global-header">
    <div class="global-header__bar type__h6">
      <div class="global-header__bar-flex  container">
        <div class="global-header__bar-promo" v-html="promoLeft"></div>
        <div class="global-header__bar-promo global-header__bar-promo--contact">{{promoRight}}</div>
      </div>
    </div>
    <div class="global-header__main container">
      <h1 class="global-header__brand">
        <span class="util__sr-only">{{siteTitle}}</span>
        <img class="global-header__brand-image" alt="GJL Construction & Maintenance" src="~/assets/images/logo.svg">
      </h1>
      <nav class="global-header__navbar">
        <a v-for="link in links" 
          :key="link.label"
          :href="link.url"
        class="global-header__navbar-link">{{link.label}}</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    promoLeft: 'Free Estimates <span class="bullet">·</span> All Work Guaranteed',
    promoRight: 'Call Us: 773-584-1872',
    siteTitle: 'GJL Construction & Maintenance',
    links: [
      {
        url: '#0',
        label: 'Our Services'
      },
      {
        url: '#0',
        label: 'Why Hire Us'
      },
      {
        url: '#0',
        label: 'Our Work'
      }
    ]
  }),
  methods: {
    toggleMenu () {
      this.expandMenu = !this.expandMenu
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
    width: 180px;
  }

  &__brand-image {
    display: block;
  }

  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: $spacing__bt;
    padding-bottom: $spacing__bt;
  }

  &__navbar-link {
    @include font-weight('bold');
    font-size: $fonts__smallest;
  }

  @include screen-above('mobile-wide') {
    $font-nav-size: 17px;

    &__bar-promo {
      &:first-child {
        width: auto;
      }
    }

    &__navbar-link {
      font-size: $font-nav-size;
      &:not(:first-child) {
        margin-left: 1em;
      }
    }

    &__brand {
      width: 200px;
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
      width: 220px;
    }
  }
}
</style>