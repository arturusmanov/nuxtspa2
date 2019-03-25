const options = { // you may define your apiKey, lang and version or skip this.
  apiKey: 'xxx', // '' by default
  lang: 'ru_RU', // 'ru_RU' by default
  version: '2.1' // '2.1' by default
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtspa2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' }
    ]
  },

  modules: [
    // Simple usage
    'cookie-universal-nuxt',

    // With options
    ['cookie-universal-nuxt', { alias: 'cookiz' }],

    // Yandex maps
    ['vue-yandex-maps/nuxt', options],

    // 'nuxt-vuex-localstorage',
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },




  /*
  ** Build configuration
  */
  build: {


    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },

  plugins: [
    // { src: '~/plugins/vue-googlemaps.js', ssr: false },
    // { src: "~/plugins/yamaps.js" },
    { src: "~/plugins/vue-cookie.js" },
    // { src: "~/plugins/vue-sessionstorage.js" },
  ],
  css: [
    'assets/main.css'
  ],

}

