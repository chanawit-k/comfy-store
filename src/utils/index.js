const productionUrl = 'https://strapi-store-server.onrender.com/api'
import axios from 'axios'
export const customFetch = axios.create({
  baseURL: productionUrl,
})
