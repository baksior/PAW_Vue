<template>
  <div class="home">
    <HomeInformation />
    <HomeHeader />
  </div>
</template>

<script>
import HomeInformation from '@/components/HomeInformation'
import HomeHeader from '@/components/HomeHeader'

export default {
  name: 'Home',
  components: {HomeInformation, HomeHeader},
  data () {
    return {
        
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
</style>
