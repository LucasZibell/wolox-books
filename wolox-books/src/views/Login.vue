<template lang='pug'>
  div(class="login")
    h3 Login
    button(@click="back") Back
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

export default {
  name: 'login',
  data() {
    return ({})
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
