<script>
import axios from 'axios'
/* nie działa
const domain = "http://localhost:8090/api/";

const instance = axios.create({
  baseURL: domain,
  timeout: 2500
});
*/
// let token = sessionStorage.getItem('token')
export default {
  fetchGetBoards () {
    return axios.get('board/')
  },
  /*
  Api zwraca np.: [{"id":1,"title":"board1","columns":[{"id":1},{"id":2}],"user":{"id":1}},{"id":2,"title":"board2","columns":[{"id":3}],"user":{"id":1}}]
  Trzeba odpytać /api/board/id żeby dowiedzieć się co jest w środku --> Pojawiły się kolumny!
  */
  fetchGetBoardsWithToken () {
    let token = sessionStorage.getItem('token')
    return axios({
      method: 'GET',
      url: 'api/user/boards',
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
    let token = sessionStorage.getItem('token')
    console.log('token (fetchPostBoardWithToken):', token)
    return axios({
      method: 'POST',
      url: 'api/board', // api/user/boards
      data: { title: name, image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg', state: 'active' },
      headers: {
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
        'Access-Control-Allow-Origin': '*'
        // 'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  fetchGetBoardsDetails (_id) {
    let token = sessionStorage.getItem('token')
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
    let token = sessionStorage.getItem('token')
    console.log('token', token);
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
    let token = sessionStorage.getItem('token')
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
  fetchPostBoardColumn (_id, name) {
    let token = sessionStorage.getItem('token')
    let url = 'api/board/columns/create' + _id
    return axios({
      method: 'post',
      url: url,
      headers: {
        'X-Auth-Token': token
      },
      data: { title: name }
    })
  },
  fetchGetCardComments () {
    let token = sessionStorage.getItem('token')
    let url = 'api/card/comments?id=1'
    return axios({
      method: 'get',
      url: url,
      headers: {
        'X-Auth-Token': token,
        'Access-Control-Allow-Origin': '*'
      },
      data: {}
    })
  },
  /// ...
  fetchGetCard (_id) {
    let token = sessionStorage.getItem('token')
    let url = 'api/card?id=' + _id
    return axios({
      method: 'get',
      url: url,
      headers: {
        'X-Auth-Token': token,
        'Access-Control-Allow-Origin': '*'
      },
      data: {}
    })
  },
  fetchGetComments () {
    let token = sessionStorage.getItem('token')
    let url = 'api/comment'
    return axios({
      method: 'get',
      url: url,
      headers: {
        'X-Auth-Token': token,
        'Access-Control-Allow-Origin': '*'
      },
      data: {}
    })
  },
  fetchPutBoardName (_id, title) {
    let token = sessionStorage.getItem('token')
    let url = 'api/board/' + _id
    return axios({
      method: 'PUT',
      url: url,
      headers: {
        'X-Auth-Token': token,
        'Access-Control-Allow-Origin': '*'
      },
      data: { title: title }
    })
  },
  fetchPutCardArchive (_id, bool) {
    let token = sessionStorage.getItem('token')
    let url = 'api/card/' + _id
    return axios({
      method: 'PUT',
      url: url,
      headers: {
        'X-Auth-Token': token,
        'Access-Control-Allow-Origin': '*'
      },
      data: { isArchived: bool }
    })
  },
  fetchDeleteCard (_id) {
    let token = sessionStorage.getItem('token')
    let url = 'api/card/' + _id
    return axios({
      method: 'DELETE',
      url: url,
      headers: {
        'X-Auth-Token': token,
        'Access-Control-Allow-Origin': '*'
      },
      data: { }
    })
  },
  fetchPostComment (author, _idCard, text) {
    let token = sessionStorage.getItem('token')
    let url = 'api/comment'
    return axios({
      method: 'POST',
      url: url,
      headers: {
        'X-Auth-Token': token,
        'Access-Control-Allow-Origin': '*'
      },
      data: { commentAuthor: author, card: _idCard, commentContent: text }
    })
  }
}
</script>
