<template lang='pug'>
  div(class="hello")
    form(@submit.prevent="signUp")
      h3 First Name
      input(v-model="name")
      h3 Last Name
      input(v-model="surname")
      h3 Email
      input(v-model="email")
      h4(v-show="submitStatus && !$v.email.required") Mete un nombre gil
      h3 Password
      input(type="password" v-model="password")
      h4(v-show="submitStatus && !$v.password.required") Mete una contraseña gil
      h3
      div(class="column center")
        button(class="submit-button") Sign Up
        button(class="login-button" type="butto" @click="goToLogin") Login
</template>

<script>

import { required } from 'vuelidate/lib/validators'
import { createUser } from '../service/userService'

export default {
  name: 'Form',
  props: {
    msg: String
  },
  data() {
    return ({
      name: '',
      surname: '',
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
    async signUp() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const body = {
          first_name: this.name,
          last_name: this.surname,
          email: this.email,
          password: this.password,
          password_confirmation: this.password,
          locale: 'en'
        }
        const response = await createUser(body);
        console.log(response)
        this.$router.push('/login')
      }
    },
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
