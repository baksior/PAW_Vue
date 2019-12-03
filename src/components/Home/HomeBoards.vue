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
                            <div class="card bg-dark text-white" @mousedown="goToBoard" :param-id="item.title">
                                <img :src="item.image" class="card-img" alt="title">
                                <div class="card-img-overlay">
                                    <h6 class="card-title">{{item.title}}</h6>
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
                        <router-link class="nav-link" to="/board/">
                            <div class="card bg-dark text-white" @mousedown="goToBoard" :param-id="item.title">
                                <img :src="item.image" class="card-img" alt="title">
                                <div class="card-img-overlay">
                                    <h6 class="card-title">{{item.title}}</h6>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-3">
                        <div class="card bg-nieChceMiSieIJestPoPolnocyAJaPoSilceXd" @click="createBoard">
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
  },
  methods:{
    addBoard(_name) {
      this.boards.push({ title: _name, image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg' });
    },
    createBoard() {
        this.$emit('showModal');
    }
  },
  beforeMount () {
    api.fetchGetBoards()
    .then(response => {
        // console.log('respones from api:', response);
        this.boards = response.data;
        // console.log('boards:', this.boards);
    })
    .catch(error => {
        console.log('Error GetBoards:', error)
    })
      // TODO: add isLoading  https://dev.to/kevinleedrum/axios-tips-for-real-world-apps-3bo4
  }
}
</script>

<style scoped>
.card {
    margin: 5px 0px;
    opacity: 0.9;
}

.card:hover {
    cursor: pointer;
    opacity: 1;
}
</style>
