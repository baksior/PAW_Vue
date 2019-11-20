<template>
  <div id="app">
    <Navigation />
    <router-view />
    <HomeModal />
  </div>
</template>

<script>
import styles from './assets/css/all.css'
import Navigation from '@/components/Navigation'
import HomeModal from '@/components/Home/HomeModal'

export default {
  name: 'App',
  components: {Navigation, HomeModal}
}
</script>

<style>
body, html{
    background-color: #FAFBFC;
    padding: 0;
    margin: 0;
}
</style>
