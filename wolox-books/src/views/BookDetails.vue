<template lang='pug'>
  div
    h3(v-if="bookInfoLoading") Cargando
    div(v-else)
      img(:src="bookInfo.image_url")
      h3 {{ bookInfo.title }}
      h3 {{ bookInfo.author }}
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'

import NavBar from '@/components/NavBar.vue';
import BookList from '@/components/BookList.vue';

export default {
  name: 'bookDetails',
  data() {
    return({
      id: this.$route.params.id
    })
  },
  mounted() {
    this.getBookInfo(this.id)
  },
  computed: mapState([
    'bookInfo',
    'bookInfoLoading'
  ]),
  methods: {
    ...mapActions([
      'getBookInfo'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>