<template>
  <div class="q-layout login">
    <form>
      <div class="q-input-wrapper email-input">
        <label class="q-label">E-Posta</label
        ><input
          id="login-email"
          v-model="email"
          class="q-input"
          type="text"
          list="email-list"
          name="login email"
          autocomplete="username"
          data-testid="email-input"
        />
      </div>
      <datalist id="email-list"></datalist>
      <div class="password-wrapper">
        <div class="password">
          <div class="q-input-wrapper">
            <label class="q-label">Şifre</label>
            <input
              id="login-password-input"
              v-model="password"
              class="q-input"
              :type="showPassword ? 'text' : 'password'"
              name="login-password"
              data-testid="password-input"
              autocomplete="current-password"
            />
          </div>
          <i
            :class="showPassword ? 'i-eye-close' : 'i-eye-open'"
            @click="showPassword = !showPassword"
          ></i>
        </div>
      </div>
      <div class="forgot-password">
        <a><span>Şifremi Unuttum</span></a>
      </div>
      <button
        class="q-primary q-fluid q-button-medium q-button submit"
        type="submit"
          @click.prevent="
          login({
            email: email,
            password: password,
          })
        "
      >
        <span>Giriş Yap</span>
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {

  name: 'Login',
  data() {
    return {
        email: '',
        password: '',
        showPassword: false,
    }
  },
  
  methods: {
    ...mapActions({
      login: 'login'
    })

  },
}
</script>

<style scoped>
#login-password-input {
  height: 44px !important;
}
</style>