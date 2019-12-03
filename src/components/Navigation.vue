<template>
  <div class="navigation">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home/">
              <span class="trello_button color-white" @mousedown="goToBoardsList">
                <i class="fas fa-home" @mousedown="goToHome"></i>
              </span>
            </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/home/">
              <span class="trello_button color-white" @mousedown="goToBoardsList">
                <i class="fas fa-calendar-day"></i>
                  &nbsp;Tablice
              </span>
            </router-link>
          </li>
        </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2 search_input" type="search" placeholder="" :aria-label={searchLabel}>
              <i class="fas fa-search"></i>
          </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      msg: 'Upsi ',
      searchLabel: 'Search'
    }
  }
}
</script>

<style scoped>
.search_input {
    border: 0;
    background: #4E97C2;
}
.navigation {
    background: #026AA7;
}
.trello_button {
    background: hsla(0,0%,100%,.3);
    color: #FFFFFF;
    padding: 8px;
    border-radius: 3px;
    font-size: 16px;
}
.trello_button:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
}
.fa-search {
  position: relative;
  left: -37px;
  color: #FFFFFF;
}
</style>
