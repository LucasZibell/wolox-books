<template lang='pug'>
  div(class="background")
    div(class="navbar")
      button(class="logout-button" @click="logout") Logout
</template>

<script>
// @ is an alias to /src
import { required } from 'vuelidate/lib/validators'
import { login } from '../service/userService'

export default {
  name: 'NavBar',
  methods: {
    logout() {
      window.localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">

.navbar {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  box-shadow: 5px 11px 10px -9px rgba(0, 0, 0, 0.75);
  border-top: 5px solid blue;
}

.logout-button {
  border-radius: 10px;
  border-color: black;
  font-weight: bold;
  height: 40px;
  width: 80px;
}

</style>