const path = require('path')

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'GJL Construction & Maintenance',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge' },
      { hid: 'description', name: 'description', content: 'Chicagoland premier Construction & Maintenance Company' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,600,700,800&display=swap' }
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
    '@nuxtjs/svg-sprite'
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
        use: ['raw-loader']
      })
    }
  }
}
