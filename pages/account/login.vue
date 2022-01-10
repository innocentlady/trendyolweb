<template>
  <div id="login-register">
    <div class="lr-title">
      <h1>Merhaba,</h1>
      <h3>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</h3>
    </div>
    <div class="q-layout lr-header">
      <div class="flex-center header-buttons">
        <button
          class="q-secondary q-button-medium q-button tab button mr-5 left"
          :class="isLogin ? 'active' : ''"
          @click="isLogin = true"
        >
          <span>Giriş Yap</span></button
        ><button
          class="q-secondary q-button-medium q-button tab button right"
          :class="isLogin ? '' : 'active'"
          @click="isLogin = false"
        >
          <span>Üye Ol</span>
        </button>
      </div>
    </div>
    <div class="lr-container">
      <login v-if="isLogin === true" />
      <register v-if="isLogin === false" />
      <div class="social-account-login-buttons">
        <div class="q-layout social-login-button flex flex-1">
          <div
            class="social-login-icon"
            style="background-color: rgb(76, 110, 168)"
          >
            <i class="q-icon icon-facebook i-facebook"></i>
          </div>
          <div class="flex flex-column">
            <div>
              <div style="text-transform: capitalize">facebook</div>
              <small>ile kaydol</small>
            </div>
          </div>
        </div>
        <div class="q-layout social-login-button flex flex-1">
          <div
            class="social-login-icon"
            style="background-color: rgb(241, 66, 54)"
          >
            <i class="q-icon icon-google i-google"></i>
          </div>
          <div class="flex flex-column">
            <div>
              <div style="text-transform: capitalize">google</div>
              <small>ile kaydol</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Register from '../../components/Auth/Register.vue'
import Login from '../../components/Auth/Login.vue'
import './auth.css'

import { auth } from '../../plugins/firebase.js'
export default {
  name: 'Auth',
  components: { Register, Login },
  data() {
    return {
      isLogin: true,
    }
  },
  created() {
    this.OnStateChanged()
  },
  methods: {
    OnStateChanged() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.isAlreadyLogged = true
          this.$router.push('/') // Anasayfaya yönlendiriyor giriş yapılmışsa
        } else this.isAlreadyLogged = false
      })
    },
  },
}
</script>

<style scoped>
</style>