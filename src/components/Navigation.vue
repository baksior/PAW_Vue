<template>
  <div class="navigation">
    <nav class="navbar navbar-default">
      <router-link class="nav-link" to="/home/">
        <i class="fas fa-home trello_button" @mousedown="goToHome"></i></router-link>
        <router-link class="nav-link" to="/home/"><span class="trello_button color-white" @mousedown="goToBoardsList">
            <i class="fas fa-calendar-day"></i>
            &nbsp;Tablice
        </span></router-link>
        <form class="form-inline">
            <input class="form-control mr-sm-2 search_input" type="search" placeholder="" :aria-label={searchLabel}>
            <i class="fas fa-search"></i>
        </form>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      msg: 'Upsi kurwa',
      searchLabel: 'Search'
    }
  }
}
</script>

<style scoped>
.search_input{
    border: 0;
    background: #4E97C2;
}
.navigation{
    background: #026AA7;
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
