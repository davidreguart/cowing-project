import http from './base-api';


const list = () => http.get('/questions')
  .then((res) => res.data)

export default {
  list
}