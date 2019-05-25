<template lang='pug'>
  div(class="hello")
    img(alt="Vue logo" src="../assets/company.png")
    form(@submit.prevent="login")
      h3 Email
      input(v-model="email")
      h4(v-show="submitStatus && !$v.email.required") Campo requerido
      h3 Password
      input(v-model="password")
      h4(v-show="submitStatus && !$v.password.required") Campo requerido
      h3
      div(class="column center")
        button(class="login-button") Login
        button(class="submit-button" @click="goToSignUp") Sign Up
</template>

<script>
// @ is an alias to /src
import { required } from 'vuelidate/lib/validators'
import { login } from '../service/userService'
import { api } from '../config/api'

export default {
  name: 'login',
  data() {
    return ({
      email: '',
      password: '',
      submitStatus: null
    })
  },
  validations: {
    email: {
      required
    },    
    password: {
      required
    }
  },
  methods: {
    goToSignUp() {
      this.$router.push('/signUp')
    },
    async login() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const body = {
          email: this.email,
          password: this.password,
        }
        const response = await login(body);
        if(response.data) {
          window.localStorage.setItem('token', response.data.access_token);
          api.setHeader('Authorization', response.data.access_token)
          this.$router.push('/')
        }
      }
    }
  }
}
</script>

