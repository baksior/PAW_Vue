<template>
  <div class="Login">
    <form class="loginForm" v-if="menu === 1">
      <h4>Log in</h4>
      <input type="text" v-model="login" placeholder="Enter username..." />
      <input type="password" v-model="password" placeholder="Enter password..." />

      <router-link to="/home/">
        <input type="button" value="Log In" @click="tryLogin" />
      </router-link>

      <p @click="toggleMenu" class="blueCentered">Or Sign In</p>
    </form>
    <form class="loginForm" v-if="menu === 2">
      <h4>Register</h4>
      <input type="text" v-model="login" placeholder="Enter username..." />
      <input type="password" v-model="password" placeholder="Enter password..." />
            <input type="password" v-model="password2" placeholder="Repeat password..." />


      <router-link to="/home/">
        <input type="button" value="Register" @click="tryLogin" />
      </router-link>

      <p @click="toggleMenu" class="blueCentered">Or Log In</p>
    </form>
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
    },
    tryLogin: function(){
      
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
.Login{
  margin: auto;
  position: absolute;
  top: 100px; left: 50%;
  margin-left: -150px;
}
.loginForm{
  padding: 20px;
  width: 300px;
  height: 300px;
  background-color: #E1E4E8;
  border-color: 1px solid #c8ebfb;
  border-radius: 5px;
}

.loginForm input{
  width: 250px;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: #F6F7F8;
  border: 1px solid #333333;
}
</style>
