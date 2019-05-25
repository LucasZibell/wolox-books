<template lang='pug'>
  div(class="gallery")
    router-link(v-for="(book,index) in books" :key="book.id" :to="{ path: `/book_details/${book.id}`}")
      img(class="book-img" :src="book.image_url")
      h3 {{ book.title }} 
      h3 {{ book.author }}
</template>

<script>
// @ is an alias to /src
import { getBooks } from '../service/booksService'
import { mapState } from 'vuex';

export default {
  name: 'BookList',
  computed:
    mapState([
    'books'
  ])
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

.gallery {
  display: flex;
  flex-flow: row wrap;
  padding: 0 20px;
}

.book-img {
  width: 150px;
  height: 250px;
}

.logout-button {
  border-radius: 10px;
  border-color: black;
  font-weight: bold;
  height: 40px;
  width: 80px;
}

</style>