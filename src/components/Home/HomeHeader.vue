<template>
  <div class="HomeHeader">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <HomeSidebar />
            </div>
            <div class="col-9">
                <HomeBoards ref="HomeBoards" @showModal="showModal" />
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
    addBoard(name) {
      this.$refs.HomeBoards.addBoard(name);
    },
    showModal() {
      this.$emit('showModal');
    }
  }
}
</script>

<style scoped>
</style>
