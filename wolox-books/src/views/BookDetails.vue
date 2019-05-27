<template lang='pug'>
  transition(name="slide-fade")
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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

</style>