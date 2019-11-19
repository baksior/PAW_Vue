<template>
  <div class="HomeSidebar">
    <ul class="menu mt-4">
        <li class=" selected">
            <span class="color-dark font-bold">
                <i class="fas fa-calendar-day"></i>
                &nbsp;Tablice
            </span>
        </li>
        <li>
            <span class="color-dark font-bold">
                <i class="fab fa-angellist"></i>
                &nbsp;Szablony
            </span>
        </li>
        <li @mousedown="goToHome">
            <span class="color-dark font-bold">
                <i class="fab fa-artstation"></i>
                &nbsp;Strona główna
            </span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeSidebar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.color-dark{
    color: #172b4d;
}

.font-bold{
    font-weight: 500;
}
ul.menu{
    list-style: none;
}

ul.menu li{
    display: block;
    padding: 5px 9px;
}

ul.menu li:hover{
    background: #E7E9ED;
    cursor: pointer;
}

</style>
