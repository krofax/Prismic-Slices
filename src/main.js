// `~/src/main.js`

import Vue from 'vue'
import App from './App'
import PrismicVue from '@prismicio/vue'
import linkResolver from './link-resolver' // Update this path if necessary

const accessToken = '' // Leave empty if your repo is public
const endpoint = 'https://about-page.cdn.prismic.io/api/v2' // Use your repo name

// Register plugin
Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { accessToken },
  linkResolver
})

// Create a Vue instance
new Vue({
  render: (h) => h(App)
}).$mount('#app')