<template>
  <div class="HomeInformation">
    <div v-if="homeInfo" class="container-fluid bg-darkBlue">
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
  </div>
</template>

<script>
export default {
  name: 'HomeInformation',
  data () {
    return {
        homeInfo: true
    }
  }, 
  methods:{
    hideInfoSection(){
        this.homeInfo = false;
    }
  }
}
</script>

<style scoped>
.bg-darkBlue{
    background: #094C72;
}
.nav-info{
    padding: 20px;
    color: #FFFFFF;
}

.nav-info ul {
    list-style: none;
}
.nav-info ul li::before {
    font-family: 'Font Awesome\ 5 Free';
    content: "\f521";
    position: relative;
    left: -10px;
    color: yellow;
    font-weight: bold;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
}

ul.menu{
    list-style: none;
}

ul.menu li{
    display: block;
    padding: 5px 9px;
}

ul.menu li:hover{
    background: #E7E9ED;
    cursor: pointer;
}
.fa-times{
    position: absolute;
    top: 70px;
    right: 10px;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.2);
}
.fa-times:hover{
    cursor: pointer;
}
</style>