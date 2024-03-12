<template>
  <div class="houses">
   <h1>houses</h1>
   <div class="container">
      <div class="row row-cols-1 row-cols-md-3 pt-5 " >
        <div v-for="house in $store.state.houses" :key="house" >
         <div class="col">
          <div class="card mt-5 ">
            <img :src="house.prodURL" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{house.prodName}}</h5>
              <p class="card-text">R{{house.price}}</p> 
               <router-link @click="getHouse(house.prodID)" :to="{ name: 'product', params: { prodID: house.prodID }}" class="btn btn-dark">details</router-link>
              </div>
           </div>
          </div>
         </div>
        </div>
  </div>
   </div>
</template>

<script>
export default {
  methods:{
    getHouse(prodID){
      this.$store.dispatch('getSingleHouse',prodID)
    }
  },
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