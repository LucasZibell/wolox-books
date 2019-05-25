<template lang='pug'>
  div
    NavBar
    BookList
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

import NavBar from '@/components/NavBar.vue';
import BookList from '@/components/BookList.vue';

export default {
  name: 'home',
    components: {
    NavBar,
    BookList
  },
  mounted() {
    this.books()
  },
  methods: {
    ...mapActions([
      'books'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>