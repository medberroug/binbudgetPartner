export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BiB Partner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
    ],
    link: [
      { rel: 'iconPartner', type: 'image/png', href: '/iconPartner.png' }
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.binbudget.com',
  },
  server: {
    port: 3001 // default: 3000
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // PWA module configuration
  pwa: {
    manifest: {
      name: 'BinBudget Partner',
      short_name: 'BinB Partner',
      description: 'BinBudget Partner',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      lang: 'fr',
      icons: [
        {
          src: '/iconPartner.png',
          sizes: '512x512',
          type: 'image/png',
        },
        // Add more icons as needed
      ],
      start_url: '/',
    },
    workbox: {
      // Workbox options for service workers
      // For example, you may want to customize the caching strategies
      precache: {
        cacheId: 'BinB Partner',
        // Increase the number to invalidate the cache.
        revision: '1.0.3'
      },
      runtimeCaching: [
        {
          // Match any same-origin request that contains 'api'
          urlPattern: 'https://api.binbudget.com/.*',
          // Apply a network-first strategy
          handler: 'NetworkFirst',
          method: 'GET',
          // Other options and strategies can be used,
          // such as StaleWhileRevalidate, CacheFirst, etc.
          strategyOptions: {
            cacheName: 'api-cache',
            cacheExpiration: {
              maxEntries: 100,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            },
            cacheableResponse: { statuses: [0, 200] }
          }
        },
        // You can add more runtimeCaching rules here
      ],
      cleanupOutdatedCaches: true,
      skipWaiting: true,
      clientsClaim: true
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
