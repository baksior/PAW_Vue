<script>
import axios from "axios";
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
  //    .then(response => {
  //      return response.data
  //    })
  },
/*
  Api zwraca ID tablic w formie: [trello.Board : 2, trello.Board : 3, trello.Board : 1]
  Trzeba odpytać /api/board/id żeby dowiedzieć się co jest w środku
*/
  fetchGetBoardsWithToken () {
  return axios({
      method: 'get',
      url: '/api/user/boards',
      headers: {
        'X-Auth-Token': token
      },
      data: {}
    });
  },

  fetchPostBoard (name) {
    return axios.post('board/', {
      title: name,
      image: "http://dawiq.lh.pl/Trellol//images/lolImg.jpg"
    })
  },

  fetchLogin (mail, password) {
    return axios({
      method: 'post',
      url: '/api/login',
      data: { username: mail, password: password },
      headers: {
        'content-type': 'raw'
      }
    });
  },

  fetchRegister (mail, password) {
    return axios({
      method: 'post',
      url: '/api/register',
      data: { username: mail, password: password },
      headers: {
        'content-type': 'raw'
      }
    });
  }
}
</script>
