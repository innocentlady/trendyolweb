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
      },
    ],
  },
}
</script>
