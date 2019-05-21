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
      button(class="submit-button") Sign Up
</template>

<script>

import { required } from 'vuelidate/lib/validators'
import { books } from '../service/booksService'

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
        const response = await books();
        console.log({
          response,
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password
        })
      }
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
