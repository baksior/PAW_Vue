<template>
  <div>
    <div v-if="isLogged === true" class="navigation">
      <nav class="navbar navbar-default">
        <router-link class="nav-link" to="/home/">
          <i class="fas fa-home trello_button" @mousedown="goToHome"></i></router-link>
          <router-link class="nav-link" to="/home/">
            <span class="trello_button color-white" @mousedown="goToBoardsList">
                <i class="fas fa-calendar-day"></i>
                &nbsp;Tablice
            </span>
          </router-link>
          <form class="form-inline">
              <input class="form-control mr-sm-2 search_input" type="search" placeholder="" :aria-label={searchLabel}>
              <i class="fas fa-search"></i>
          </form>
      </nav>
    </div>
    <div v-if="isLogged === false" class="logo">
      <div class="container">
        <div class="row">
          <img src="https://seeklogo.net/wp-content/uploads/2017/01/trello-logo.png" class="logoImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
     if(this.$route.name === 'Login'){
       this.isLogged = false;
     }else{
       this.isLogged = true;
     }
  },
  name: 'Navigation',
  data () {
    return {
      isLogged: false,
      msg: 'Search',
      searchLabel: 'Search'
    }
  },
  watch: {
  	'$route': function(value) {
      if(this.$route.name === 'Login'){
       this.isLogged = false;
     }else{
       this.isLogged = true;
     }
    }
  }
}
</script>

<style scoped>
.logo{
  width: 150px;
  margin: auto;
  text-align: center;
}
.logoImage{
  width: 150px;
}
.search_input{
    border: 0;
    background: #4E97C2;
}
.navigation{
    background: #026AA7;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.trello_button{
    background: hsla(0,0%,100%,.3);
    color: #FFFFFF;
    padding: 8px;
    border-radius: 3px;
    font-size: 16px;
}

.trello_button:hover{
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
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
.fa-search{
  position: relative;
  left: -37px;
  color: #FFFFFF;
}
</style>
