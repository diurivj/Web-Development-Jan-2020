import axios from 'axios'

const baseURL = 'http://localhost:3000'

const MY_SERVICE = axios.create({
  baseURL,
  withCredentials: true
})

const AUTH_SERVICE = {
  signup: async data => {
    return await MY_SERVICE.post('/signup', data)
  },
  login: async data => {
    return await MY_SERVICE.post('/login', data)
  },
  uploadPhoto: async photo => {
    return await MY_SERVICE.post('/upload', photo)
  }
}

export default AUTH_SERVICE
