<template>
  <div class="houses">
   <h1>products</h1>
      <div class="row row-cols-1 row-cols-md-3 pt-5 " >
        <div v-for="house in $store.state.houses" :key="house" >
         <div class="col">
          <div class="card h-100 w-100 mt-5">
            <img :src="house.prodUrl" class="card-img-top h-100 w-100" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{house.prodName}}</h5>
              <p class="card-text">R{{house.price}}</p> </div>
           </div>
          </div>
         </div>
        </div>
  </div>
</template>

<script>
export default {
  computed:{
    getHouses(){
      this.$store.dispatch('getHouses')
    }
   
  },
  mounted(){
    this.getHouses
  }
}
</script>

<style>

</style>