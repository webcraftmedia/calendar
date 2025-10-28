// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: './src',
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-svgo'
  ],
  i18n: {
    restructureDir: './',
    defaultLocale: 'en',
    differentDomains: process.env.NODE_ENV === 'production',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' },
    ],
    detectBrowserLanguage: false,
    /* detectBrowserLanguage: {
      // This doesn't make a difference
      useCookie: false,
      alwaysRedirect: true,
    }, */
    strategy: 'no_prefix',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
})