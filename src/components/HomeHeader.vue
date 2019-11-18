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
import HomeSidebar from '@/components/HomeSidebar'
import HomeBoards from '@/components/HomeBoards'

export default {
  name: 'HomeHeader',
  components: {HomeSidebar, HomeBoards},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
