<template>
  <div class="hello">
    <form @submit.prevent="signUp">
      <h3>First Name</h3>
      <input v-model="name">
      <h3>Last Name</h3>
      <input v-model="surname">
      <h3>Email</h3>
      <input v-model="email">
      <h4 v-show="submitStatus && !$v.email.required">Mete un nombre gil</h4>
      <h3>Password</h3>
      <input v-model="password">
      <h4 v-show="submitStatus && !$v.password.required">Mete una contraseña gil</h4>
      <h3></h3>
      <button class="submit-button">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

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
    signUp() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        console.log({
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
