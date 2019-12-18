<script>
import axios from 'axios'
/* nie działa
const domain = "http://localhost:8090/api/";

const instance = axios.create({
  baseURL: domain,
  timeout: 2500
});
*/
const token = sessionStorage.getItem('token')
export default {
  fetchGetBoards () {
    return axios.get('board/')
  },
  /*
  Api zwraca np.: [{"id":1,"title":"board1","columns":[{"id":1},{"id":2}],"user":{"id":1}},{"id":2,"title":"board2","columns":[{"id":3}],"user":{"id":1}}]
  Trzeba odpytać /api/board/id żeby dowiedzieć się co jest w środku --> Pojawiły się kolumny!
  */
  fetchGetBoardsWithToken () {
    return axios({
      method: 'get',
      url: '/api/user/boards',
      headers: {
        'X-Auth-Token': token
      },
      data: {}
    })
  },

  fetchPostBoard (name) { // Prawdopodobnie token ?
    return axios.post('board/', {
      title: name,
      image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg'
    })
  },

  fetchPostBoardWithToken (name) { // Prawdopodobnie token ?
    return axios({
      method: 'post',
      url: 'api/user/boards',
      data: { title: name, image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg' },
      headers: {
        'Content-Type': 'text/plain',
        'X-Auth-Token': token
      }
    })
  },
  // text/plain   raw
  fetchLogin (mail, password) {
    return axios({
      method: 'post',
      url: 'api/login',
      data: { username: mail, password: password },
      headers: {
        'Content-Type': 'text/plain'
      }
    })
  },

  fetchRegister (mail, password) {
    return axios({
      method: 'post',
      url: 'register',
      data: { username: mail, password: password },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  fetchGetBoardsDetails (_id) {
    let url = 'api/board/' + _id
    return axios({
      method: 'get',
      url: url,
      headers: {
        'X-Auth-Token': token
      },
      data: {}
    })
  },
  fetchGetBoardColumns (_id) {
    let url = 'api/board/columns?id=' + _id
    return axios({
      method: 'GET',
      url: url,
      headers: {
        'X-Auth-Token': token
      },
      data: {}
    })
  },
  fetchGetColumnCards (_id) {
    let url = 'api/column/cards?id=' + _id
    return axios({
      method: 'get',
      url: url,
      headers: {
        'X-Auth-Token': token
      },
      data: {}
    })
  },
  fetchGetCard (_id) {
    let url = 'api/card?id=' + _id
    console.log('url from GetCard', url)
    return axios({
      method: 'get',
      url: url,
      headers: {
        'X-Auth-Token': token
      },
      data: {}
    })
  },
  fetchPostBoardColumn (_id, name) {
    let url = 'api/board/columns/create' + _id
    return axios({
      method: 'post',
      url: url,
      headers: {
        'X-Auth-Token': token
      },
      data: { title: name }
    })
  }
}
</script>
