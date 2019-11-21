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
                    <div class="col-3" v-bind:key={i} v-for="(item, i) in info">
                        <router-link class="nav-link" to="/board/">
                            <div class="card bg-dark text-white" @click="goToBoard" :param-id="item.title">
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
export default {
  name: 'HomeBoards',
  data () {
    return {
        currentBoard: {
            name: ''
        },
        boards: [
            { name: 'Tablica 1', image: 'http://dawiq.lh.pl/Trellol//images/lolImg.jpg', lastSeen: true },
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
  },
  mounted () {
    axios
      .get('http://localhost:8090/boards.json')
      .then(response => {
        this.info = response.data.boards
        console.log(this.info)
      })
      .catch(error => {
        console.log(error)
      //  this.errored = true
      })
      //.finally(() => this.loading = false)
  }
}
</script>

<style scoped>
.card{
    margin: 5px 0px;
    opacity: 0.9;
}

.card:hover{
    cursor: pointer;
    opacity: 1;
}
</style>
