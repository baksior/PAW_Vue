<template>
  <div class="home">
    <div class="container-fluid bg-darkBlue">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="nav-info">
                        <h5>Wykup swoją wersję Trello Gold!</h5>
                        <p>Dziękujemy za podzielenie się Trello! Ciesz się możliwością korzystania z Trello Gold przez 1 miesiąc.</p>
                    </div>                   
                </div>
                <div class="col-6">
                    <div class="nav-info">
                        <ul>
                            <li>Ooo tak… Te osoby dołączyły do Trello dzięki Twojej rekomendacji: Kuba Buba</li>
                            <li>Przejdź do strony płatności Trello Gold, aby wykorzystać swoje kredyty</li>
                            <li>Dowiedz się, jak korzystać z możliwości Trello Gold tutaj</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <i class="fas fa-times" @mousedown="hideInfoSection"></i>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <ul class="menu mt-4">
                    <li class=" selected">
                        <span class="color-dark font-bold">
                            <i class="fas fa-calendar-day"></i>
                            &nbsp;Tablice
                        </span>
                    </li>
                    <li>
                        <span class="color-dark font-bold">
                            <i class="fab fa-angellist"></i>
                            &nbsp;Szablony
                        </span>
                    </li>
                    <li @mousedown="goToHome">
                        <span class="color-dark font-bold">
                            <i class="fab fa-artstation"></i>
                            &nbsp;Strona główna
                        </span>
                    </li>
                </ul>
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
export default {
  name: 'Home',
  data () {
    return {
      homeInfo: true,
        currentBoard: {
            name: ''
        },
        boards: [
            { name: 'Tablica 1', image: 'images/lolImg.jpg', lastSeen: true },
            { name: 'Tablica 2', image: 'images/lolImg.jpg' },
            { name: 'Tablica 3', image: 'images/lolImg.jpg' },
            { name: 'Tablica 4', image: 'images/lolImg.jpg', lastSeen: true },
            { name: 'Tablica 5', image: 'images/lolImg.jpg' },
            { name: 'Tablica 6', image: 'images/lolImg.jpg', lastSeen: true },
            { name: 'Tablica 7', image: 'images/lolImg.jpg', lastSeen: true },
            { name: 'Tablica 8', image: 'images/lolImg.jpg' },
            { name: 'Tablica 9', image: 'images/lolImg.jpg', lastSeen: true }
        ],
        showModal: false,
        request: {},
        showMenu: true
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.bg-darkBlue{
    background: #094C72;
}
.card{
    margin: 5px 0px;
    opacity: 0.9;
}

.card:hover{
    cursor: pointer;
    opacity: 1;
}
</style>
