<template>
  <div>
    <page-header></page-header>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </div>
</template>


<script>
import PageHeader from '../components/pageHeader/PageHeader.vue'
export default {
  components: { PageHeader },

  data() {
    return {}
  },

  head: {
    script: [
      {
        src: 'https://kit.fontawesome.com/ce94c72459.js',
        crossorigin: 'anonymous',
      },/* 
      {
        src: 'https://unpkg.com/swiper/swiper-bundle.min.js',
      }, */
    ],
    link: [/* 
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/swiper/swiper-bundle.min.css',
      }, */
    ],
  },
}
</script>
