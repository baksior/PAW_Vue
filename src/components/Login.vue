<template>
  <div class="Login">
    <div class="container">
      <div class="row">
        <div class="col-5 offset-1">
          <form class="loginForm effect6">
            <p class="bold">Login to Trellol</p>
            <input class="text-dark" type="text" v-model="login" placeholder="me" /> <!-- TODO wstawić: Enter username... -->
            <input class="text-dark" type="password" v-model="password" placeholder="password" /> <!-- TODO wstawić: Enter password... -->

         <!--   <router-link to="/home/">  TODO wyrzucić router jak będzie API. -->
              <input type="button" value="Log In" @click="tryLogin" />
         <!--   </router-link> -->
          </form>
        </div>
        <div class="col-5">
          <form class="loginForm effect6">
            <p class="bold">Register to Trellol</p>
            <input class="text-dark" type="text" v-model="loginRegister" placeholder="Enter user name..." />
            <input class="text-dark" type="password" v-model="passwordRegister" placeholder="Enter password..." />
            <input class="text-dark" type="password" v-model="passwordRegister2" placeholder="Repeat password..." />

            <!--<router-link to="/home/">  TODO wyrzucić routet jak będzie API. -->
              <input type="button" value="Register" @click="tryRegister" />
          <!--  </router-link> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from './api/api.vue'
export default {
  name: 'Login',
  data () {
    return {
      login: '',
      loginRegister: '',
      password: '',
      passwordRegister: '',
      passwordRegister2: '',
      menu: 1
    }
  },
  methods:{
    toggleMenu: function() {
      if(this.menu == 1)
        this.menu = 2;
      else
        this.menu = 1;
    },
    tryLogin: function() {
      if (!this.login || !this.password) {
        alert('Pola nie mogą być puste!')
      } else {
        api.fetchLogin(this.login, this.password)
          .then(response => {
          // console.log('response POST Login:', response)
            // if (response.status = 201) { // To nie powinno tak być. :<
              console.log('Logowanie udane!')
              this.$router.push('home')
              console.log(response.data.access_token) // token
              sessionStorage.removeItem('token')
              sessionStorage.setItem('token', response.data.access_token)
            // }
          })
          .catch(e => {
            console.log('Error POST Login:', e.message)
            alert("Coś poszło nie tak.")
          })
      }
    },
    tryRegister: function() {
      if(!this.passwordRegister || !this.passwordRegister2 || !this.loginRegister) {
        alert("Pola nie mogą być puste!")
      } else if(this.passwordRegister != this.passwordRegister2) {
        alert("Podane hasła różnią się od siebie.")
      } else if(this.passwordRegister == this.passwordRegister2) {
        api.fetchRegister(this.loginRegister, this.passwordRegister)
          .then(response => {
           //  console.log('response POST Register:', response)
             if(response.status = 201) {
               console.log('Rejestracja udana.')
               this.menu = 1;
               alert("Rejstracja powiodła się")
             }
          })
          .catch(e => {
            console.log('Error POST Register:', e.message)
            console.log('Status POST Register', e.status); // undefined
            console.log('Code POST Register', e.code); // undefined
            console.log('E POST Register', e)
            alert("Coś poszło nie tak.")
          })
      } else {
        // inny problem.
      }
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
