<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import styles from './assets/css/all.css'

import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {Navigation}
}
</script>

<style>
body, html{
    background-color: #FAFBFC;
    padding: 0;
    margin: 0;
}
</style>
