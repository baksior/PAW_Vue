<template>
  <div class="HomeBoards">
    <div class="row mt-4 pl-4">
        <span class="color-dark font-bold">
            <i class="far fa-clock"></i>
            &nbsp;Ostatnio przeglądane
            <div class="container mt-4">
                <div class="row">
                    <div class="col-3" v-bind:key={i} v-for="(item, i) in boards" v-if="item.lastSeen === true">
                        <router-link class="nav-link" to="/board/">
                            <div class="card bg-dark text-white" @mousedown="goToBoard" :param-id="item.name">
                                <img :src="item.image" class="card-img" alt="title">
                                <div class="card-img-overlay">
                                    <h6 class="card-title">{{item.name}}</h6>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </span>
    </div>
    <div class="row mt-4 pl-4">
        <span class="color-dark font-bold">
            <i class="far fa-clock"></i>
            &nbsp;Tablice prywatne
            <div class="container mt-4">
                <div class="row">
                    <div class="col-3" v-bind:key={i} v-for="(item, i) in boards">
                  <!--      <router-link class="nav-link" to="/board/">     -->
                            <div class="card bg-dark text-white" @click="goToBoard(item.id)" :param-id="item.id">
                                <img :src="item.image" class="card-img" alt="title">
                                <div class="card-img-overlay">
                                    <h6 class="card-title">{{item.title}}</h6>
                                </div>
                            </div>
                  <!--      </router-link>      -->
                    </div>
                    <div class="col-3">
                        <div class="card" @click="createBoard">
                            <div class="card-body">
                                <p class="card-text">Tworzenie tablic już hula :o</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import api from '../api/api.vue'
export default {
  name: 'HomeBoards',
  data () {
    return {
      currentBoard: {
        name: ''
      },
      boards: [
      ],
      isLoading: false,
    }
    /*     { name: 'Tablica 1', image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg', lastSeen: true },
            { name: 'Tablica 2', image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg' },
            { name: 'Tablica 3', image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg' },
            { name: 'Tablica 4', image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg', lastSeen: true },
            { name: 'Tablica 5', image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg' },
            { name: 'Tablica 6', image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg', lastSeen: true },
            { name: 'Tablica 7', image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg', lastSeen: true },
            { name: 'Tablica 8', image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg' },
            { name: 'Tablica 9', image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg', lastSeen: true }
        ],
    }
  },
  methods:{
    addBoard(_name){
      this.boards.push({ name: _name, image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg' });
    },
    createBoard(){
        this.$emit('showModal');
    }
    */
  },
  methods: {
    addBoard (_name) {
      this.boards.push({ title: _name, image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg' })
    },
    createBoard () {
      this.$emit('showModal')
    },
    goToBoard (_id) {
      console.log('goToBoard:', _id)
      //        this.$router.push('board/' + _id)
      this.$router.push({ path: `/board/${_id}` })
    }
  },
  // beforeMount () {
  mounted () {
    api.fetchGetBoardsWithToken() // fetchGetBoardsWithToken // fetchGetBoards
      .then(response => {
        // console.log('respones from api:', response);
        this.boards = response.data
        // console.log('boards:', this.boards);
      })
      .catch(error => {
        console.log('Error GetBoards:', error)
        console.log('Error GetBoards response:', error.response)
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('GetBoards data:', error.response.data)
          console.log('GetBoards status:', error.response.status)
          console.log('GetBoards headers:', error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('GetBoards request:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error GetBoards message:', error.message)
        }
        console.log('GetBoards config:', error.config)
        let errorObject = JSON.parse(JSON.stringify(error))
        console.log('GetBoards JSON parse:', errorObject)
        console.log('GetBoards toJSON:', error.toJSON())
      })
    // TODO: add isLoading  https://dev.to/kevinleedrum/axios-tips-for-real-world-apps-3bo4
  }
}
</script>

<style scoped>
.card{
    margin: 5px 0px;
    opacity: 0.9;
    min-width: 180px;
}

.card:hover{
    cursor: pointer;
    opacity: 1;
}
</style>
