<template>
  <header class="global-header">
    <div class="global-header__bar type__h6 container">
      <span class="global-header__bar-promo" v-html="promoLeft"></span>
      <span class="global-header__bar-promo global-header__bar-promo--mobile-hidden">{{promoRight}}</span>
    </div>
    <div class="global-header__main container">
      <h1 class="global-header__brand">
        <span class="util__sr-only">{{siteTitle}}</span>
        <img alt="GJL Construction & Maintenance" src="~/assets/images/logo.svg">
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

  &__bar-promo {
    &--mobile-hidden {
      display: none;
    }
  }

  &__brand {
    width: 180px;
  }

  &__main {
    display: flex;
    justify-content: space-between;
    padding-top: $spacing__sm;
    padding-bottom: $spacing__sm;
  }

  &__navbar-link {
    @include font-weight('bold');
    font-size: $fonts__smallest;
  }
}
</style>