import MarkdownIt from 'markdown-it'

const path = require('path')
const md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'GJL Construction & Maintenance',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge' },
      { hid: 'description', name: 'description', content: 'With over 15 years of experience, we provide expert property maintenance for all types of needs. From ensuring all plumbing and electrical appliances are in good working conditions to rehabbing units to Section 8 compliancy.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,600,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // ssr: false to only include it on client-side
    { src: '~/plugins/directives/index.js', mode: 'client' },
    { src: '~/plugins/svg4everybody.js', mode: 'client' },
    { src: '~/plugins/utils/backgroundStyle.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    'vue-scrollto/nuxt'
  ],
  styleResources: {
    // use underscore "_" & also file extension ".scss"
    scss: [
      '~/assets/styles/variables/__manifest.scss',
      '~/assets/styles/mixins/__manifest.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-pxtorem': {
          propList: ['*', '!letter-spacing']
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.resolve.alias['normalize'] = path.resolve(__dirname, 'node_modules/normalize-scss/sass/_normalize.scss')
      
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          markdown: (body) => {
            return md.render(body)
          }
        }
      })
    }
  }
}
