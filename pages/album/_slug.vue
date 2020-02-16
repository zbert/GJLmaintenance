<template>
  <div class="layout__body">
    <gallery :gallery="gallery" :title="title"></gallery>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Gallery from '~/components/Gallery.vue'

export default {
  head () {
    const title = `${this.title} | GJL Maintenance`
    const image = `${this.gallery[0]}`
    return {
      title,
      meta: [
        { name: 'description', content: title },
        { property: 'og:description', content: title },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.$route.fullPath },
        { property: 'og:image', content: image }
      ]
    }
  },
  components: {
    Gallery
  },
  computed: {
    ...mapState(['albums']),
    project () {
      const slug = this.$route.params.slug
      return this.albums[slug]
    },
    gallery() {
      return this.project.gallery
    },
    title () {
      return this.project.title
    }
  }
}
</script>
