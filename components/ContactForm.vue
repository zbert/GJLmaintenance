<template>
  <transition name="fade" mode="out-in" tag="div">
    <div v-if="formState === 'success'" class="contact-form">
      <div class="contact-form__confirmation rte">
        <div class="type__h3">Thank you for your submissions. We'll be in contact shortly!</div>
      </div>
    </div>
    <form v-else @submit.prevent="handleSubmit"
    name="contact-message" 
    class="contact-form "
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field">
      <div v-if="formState === 'missing'" class="contact-form__missing type__h4">You have missing Fields, please fill out all Fields.</div>
      <input type="hidden" name="form-name" value="contact-message" />
      <h3 class="contact-form__title type__h4">I’m interested in learning more about:</h3>
      <div class="contact-form__fields">
        <div class="contact-form__field">
          <label for="name" class="contact-form__field-label">Your Name</label>
          <input v-model="fields.name" id="name" class="contact-form__input" type="text" placeholder="Your Name" />
        </div>
        <div class="contact-form__field">
          <label for="email" class="contact-form__field-label">Your Email</label>
          <input v-model="fields.email" id="email" class="contact-form__input" type="email" placeholder="Your Email" />
        </div>
        <div class="contact-form__field">
          <label for="phone" class="contact-form__field-label">Your Phone</label>
          <input v-model="fields.phone" id="phone" class="contact-form__input" type="tel" placeholder="Your Phone" />
        </div>
        <div class="contact-form__field">
          <label for="message" class="contact-form__field-label">Message</label>
          <textarea v-model="fields.message" id="message" cols="50" class="contact-form__input contact-form__input--textarea"  placeholder="What type of project are you looking to do?" />
        </div>
        <div class="contact-form__field">
          <button type="submit" class="btn"><span class="btn__label">Submit</span></button>
        </div>
      </div>
    </form>
  </transition>
</template>

<script>
import axios from 'axios'

const states = {
  ready: 'ready',
  missingFields: 'missing',
  invalidEmail: 'invalid',
  loading: 'loading',
  success: 'success',
  failure: 'failure'
}

const axiosConfig = {
  header: { 'Content-Type': 'application/x-www-form-urlencoded' }
}


export default {
  data: () => ({
    formState: states.ready,
    fields: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }),
  computed: {
    successfulSubmission () {
      return this.formState === states.success
    },
    isValidForm () {
      return this.requiredKeys.every(key => this.fields[key]) && (this.isValidEmail || this.phone !== '')
    },
    requiredKeys () {
      return ['name', 'message']
    },
    isValidEmail () {
      const email = this.fields.email
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
      return emailRegex.test(email.toLowerCase())
    },
    canSubmitForm () {
      return this.isValidForm
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    verifyValidFormState () {
      if (!this.isValidEmail) this.formState = states.invalidEmail
      if (!this.isValidForm) this.formState = states.missingFields
    },
    handleSubmit () {
      this.verifyValidFormState()
      if (this.canSubmitForm) {
        axios.post(
          '/',
          this.encode({
            'form-name': 'contact-message',
            ...this.fields
          }),
          axiosConfig
        )
        .then(res => {
          this.formState = states.success
          
        })
        .catch ((err) => {
          this.formState = states.failure
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  background-color: $colors__white;
  padding:0 $globals__container-padding $globals__container-padding;
  max-width: $globals__max-width--small;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid $colors__khaki;

  &__title {
    background-color: #fefefe;
    padding: $globals__container-padding;
  }

  &__fields {
    padding: 0 $globals__container-padding $globals__container-padding;
    text-align: left;
  }

  &__field {
    & + & {
      margin-top: $spacing__gutter;
    }
  }

  &__field-label {
    @include fonts-h6;
    display: block;
    margin-bottom: $spacing__unit;
  }

  &__input {
    @include fonts-h6;
    border: 2px solid $colors__gray--light;
    width: 100%;
    padding: $spacing__sm $spacing__bt;

    &::placeholder {
      color: $colors__gray-text;
      opacity: 1;
    }
  }

  &__confirmation {
    padding: $globals__container-padding;
  }

  &__missing {
    padding-top: $globals__container-padding;
    color: red;
  }

  @include screen-above('tablet') {
    
    &__fields {
      padding:0 $globals__container-padding--tablet $globals__container-padding--tablet;
    }

    &__title {
      background-color: #fefefe;
      padding: $spacing__section--tablet $globals__container-padding;
    }

    &__input {
      padding: $spacing__bt $spacing__gutter;
    }

    &__confirmation {
      padding: $spacing__section--tablet $globals__container-padding;
    }
     &__missing {
      padding-top: $spacing__section--tablet;
     }
  }
}
</style>