<script>
import axios from "axios";
/* nie działa
const domain = "http://localhost:8090/api/";

const instance = axios.create({
  baseURL: domain,
  timeout: 2500
});
*/

export default {
  fetchGetBoards () {
    return axios.get('board/')
  //    .then(response => {
  //      return response.data
  //    })
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
