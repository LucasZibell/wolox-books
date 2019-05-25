import Vue from 'vue'
import Vuex from 'vuex'

import { getBooks, getBookInfo } from '../src/service/booksService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    bookInfo: {},
    bookInfoLoading: false
  },
  mutations: {
    BOOKS: (state, books) => {
      state.books = books
    },
    BOOK_INFO: (state, data) => {
      state.bookInfo = data
      state.bookInfoLoading = false
    },
    BOOK_INFO_LOADING: (state, data) => {
      state.bookInfoLoading = data
    }
  },
  actions: {
    async books (context) {
      const { data } = await getBooks()
      context.commit('BOOKS', data)
    },
    async getBookInfo (context, id) {
      context.commit('BOOK_INFO_LOADING', true)
      const { data } = await getBookInfo(id)
      context.commit('BOOK_INFO', data)
    }
  }
})
