<template>
  <div class="home">
    <HomeInformation />
    <HomeHeader />
    <HomeModal />
  </div>
</template>

<script>
import HomeInformation from '@/components/Home/HomeInformation'
import HomeHeader from '@/components/Home/HomeHeader'
import HomeModal from '@/components/Home/HomeModal'

export default {
  name: 'Home',
  components: {HomeInformation, HomeHeader, HomeModal},
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
