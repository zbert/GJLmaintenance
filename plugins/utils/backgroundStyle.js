import Vue from 'vue'

Vue.prototype.$backgroundStyle = (imageUrl) => ({
  backgroundImage: (imageUrl)
    ? `url("${imageUrl}")`
    : false
})
