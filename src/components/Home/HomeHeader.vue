<template>
  <div class="HomeHeader">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <HomeSidebar />
            </div>
            <div class="col-9">
                <HomeBoards />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import HomeSidebar from '@/components/Home/HomeSidebar'
import HomeBoards from '@/components/Home/HomeBoards'

export default {
  name: 'HomeHeader',
  components: {HomeSidebar, HomeBoards},
  data () {
    return {
    }
  },
  methods: {
    showModal(){
      alert('dziala xd');
    }
  }
}
</script>

<style scoped>
</style>
