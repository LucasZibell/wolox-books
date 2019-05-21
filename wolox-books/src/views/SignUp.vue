<template>
  <div class="signUp">
    <img alt="Vue logo" src="../assets/company.png">
    <Form msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

export default {
  name: 'signUp',
  components: {
    Form
  }
}
</script>
