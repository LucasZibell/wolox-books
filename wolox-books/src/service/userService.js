import { api } from '../config/api'

export const createUser = body => api.post('users', { user: body })

export const login = body => api.post('users/sessions', { user: body })
