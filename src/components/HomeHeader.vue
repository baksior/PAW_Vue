<template>
  <div class="HomeHeader">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <HomeSidebar />
            </div>
            <div class="col-9">
                <div class="row mt-4 pl-4">
                    <span class="color-dark font-bold">
                        <i class="far fa-clock"></i>
                        &nbsp;Ostatnio przeglądane
                        <div class="container mt-4">
                            <div class="row">
                                <div class="col-3" v-for="item in boards" v-if="item.lastSeen === true">
                                    <div class="card bg-dark text-white" @mousedown="goToBoard" :param-id="item.name">
                                        <img :src="item.image" class="card-img" alt="title">
                                        <div class="card-img-overlay">
                                            <h6 class="card-title">{{item.name}}</h6>
                                        </div>
                                    </div>
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
                                <div class="col-3" v-for="item in boards">
                                    <div class="card bg-dark text-white" @mousedown="goToBoard" :param-id="item.name">
                                        <img :src="item.image" class="card-img" alt="title">
                                        <div class="card-img-overlay">
                                            <h6 class="card-title">{{item.name}}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="card bg-nieChceMiSieIJestPoPolnocyAJaPoSilceXd" @mousedown="createBoard">
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
        </div>
    </div>
  </div>
</template>

<script>
import HomeSidebar from '@/components/HomeSidebar'

export default {
  name: 'HomeHeader',
  components: {HomeSidebar},
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
        ]
    }
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
