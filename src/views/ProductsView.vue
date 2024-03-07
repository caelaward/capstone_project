<template>
  <div class="products">
   <h1>products</h1>
      <div class="row row-cols-1 row-cols-md-3 pt-5 " >
        <div v-for="product in $store.state.products" :key="product" >
         <div class="col">
          <div class="card h-100 w-100 mt-5">
            <img :src="product.prodUrl" class="card-img-top h-100 w-100" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{product.prodName}}</h5>
              <p class="card-text">R{{product.price}}</p> </div>
           </div>
          </div>
         </div>
        </div>
  </div>
</template>

<script>
export default {
    computed:{
    getProds(){
      this.$store.dispatch('getProducts')
    }
   
  },
  mounted(){
    this.getProds
  }
}
</script>

<style>

</style>