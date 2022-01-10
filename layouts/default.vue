<template>
  <div>
    <page-header></page-header>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <account-detail/>
  </div>
</template>


<script>
import {mapActions} from "vuex";
import AccountDetail from '../components/account/AccountDetail.vue';
import PageHeader from '../components/pageHeader/PageHeader.vue'
export default {
  components: { PageHeader, AccountDetail },

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
  created(){
    this.fetchproducts();
  },
  methods:{
    ...mapActions({
      fetchproducts:"fetchproducts"
    })
  }
}
</script>

