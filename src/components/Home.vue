<template>
  <div class="home">
    <HomeInformation />
    <HomeHeader ref="HomeHeader" @showModal="showModal" />
    <HomeModal ref="modal" @addBoard="addBoard" />
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
    }
  },
  methods: {
    addBoard(name){
      this.$refs.HomeHeader.addBoard(name);
    },
    showModal(){
      this.$refs.modal.showModal();
    },
    closeModal(){
      this.$refs.modal.closeModal();
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
