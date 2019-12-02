<template>
  <div class="Login">
    <div class="container">
      <div class="row">
        <div class="col-5 offset-1">
          <form class="loginForm effect6">
            <p class="bold">Login to Trellol</p>
            <input type="text" v-model="login" placeholder="Enter username..." />
            <input type="password" v-model="password" placeholder="Enter password..." />

            <router-link to="/home/">
              <input type="button" value="Log In" @click="tryLogin" />
            </router-link>
          </form>
        </div>
        <div class="col-5">
          <form class="loginForm effect6">
            <p class="bold">Register to Trellol</p>
            <input type="text" v-model="login" placeholder="Enter user name..." />
            <input type="password" v-model="password" placeholder="Enter password..." />
            <input type="password" v-model="password2" placeholder="Repeat password..." />

            <router-link to="/home/">
              <input type="button" value="Register" @click="tryLogin" />
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: '',
      password: '',
      password2: '',
      menu: 1
    }
  },
  methods:{
    toggleMenu: function(){
      if(this.menu == 1)
        this.menu = 2;
      else
        this.menu = 1;
    }
  }
}
</script>

<style scoped>
.blueCentered{
  text-align: center;
  color: #026AA7;
}
.blueCentered{
  cursor: pointer;
}
.loginForm{
  padding: 35px;
  min-height: 300px;
  background-color: #FFFFFF;
  border-color: 1px solid #c8ebfb;
  border-radius: 5px;
  margin: auto;
  text-align: center;
}

.loginForm input{
  width: 100%;
  margin: 5px;
  padding: 5px 7px;
  border-radius: 5px;
  background-color: #F6F7F8;
  border: 2px solid #DFE1E6;
  color: #FFFFFF;
}

.loginForm input[type=button]{
  width: 100%;
  margin: 5px;
  padding: 5px 7px;
  border-radius: 5px;
  background-color:#61BD4F;
  border: 2px solid #61BD4F;
  color: #FFFFFF;
}

.effect6
{
    position:relative;
    -webkit-box-shadow: rgba(0,0,0,0.1) 0 0 10px;
       -moz-box-shadow: rgba(0,0,0,0.1) 0 0 10px;
            box-shadow: rgba(0,0,0,0.1) 0 0 10px;
}

.bold{
  font-weight: bold;
  color: #5E6C84;
}
</style>
