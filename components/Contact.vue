<template>
  <div id="contact" class="contact section section--no-edge-padding">
    <div class="container">

      <h2 class="contact__title type__h2">{{title}}</h2>
      <div class="contact__copy">
        <div class="contact__lead" v-html="lead"></div>
        <address class="rte" v-html="address"></address>
      </div>
    </div>

    <div class="contact__form section section--cream section--no-edge-padding">
      <div class="container contact__form-container">
        <contact-form></contact-form>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'
export default {
  components: {
    ContactForm
  },
  props: {
    title: String,
    lead: String,
    address: String
  }
}
</script>

<style lang="scss" scoped>
.contact {
  text-align: center;

  &__title {
    margin-bottom: $spacing__gutter;
  }

  &__lead {
    @include fonts-h5;
    margin-bottom: $spacing__sm;
    color: $colors__gray-text;
  }

  &__copy {
    max-width: $globals__max-width--small;
    margin-left: auto;
    margin-right: auto;
  }

  &__form {
    margin-top: $spacing__section * 2;
  }

  &__form-container {
    transform: translateY($spacing__section * -2);
  }

  @include screen-above('tablet') {
    &__form {
      margin-top: $spacing__section--tablet * 2;
    }

    &__form-container {
      transform: translateY($spacing__section--tablet * -2);
    }
  }
}
</style>