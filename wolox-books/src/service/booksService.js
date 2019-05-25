import { api } from '../config/api'

export const getBooks = () => api.get('/books')

export const getBookInfo = id => api.get(`/books/${id}`)
