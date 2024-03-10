<template>
  <div class="container-fluid ">
   <h1>single product</h1>
   <div class="row row-cols-2 row-cols-md-2 pt-3 justify-content-center" >
    
    <div v-for="house in $store.state.singleHouse" :key="house.prodID" >

      <div class="col"> 
        <div class="card w-100" >
          <img :src="house.prodURL" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">{{house.prodName}}</h5>
            <p class="card-text">R{{house.price}}</p>
            <p class="card-text">{{house.description}}</p>
          </div>
        </div>
      </div>

    
       <div class=" scroll-container mt-2 mb-2  " id="scroller">
       <img :src="house.prodURL1"  alt="" >
       <img :src="house.prodURL2"  alt="" >
       <img :src="house.prodURL3"  alt="" >
       </div>

      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  computed:{
    getHouse(){
      this.$store.dispatch('getSingleHouse',this.$route.params.prodID)
    }
  },
  mounted(){
    this.getHouse
  }

}
</script>

<style scoped>
#scroller {
  background-color: #8b8b7c;
  overflow-y: auto; /* overflow-y.. vertical scrolling */
  padding: 10px;
  height: 300px; 
}

#scroller img {
  display: block; /*  each image is on a new line */
  padding: 9px;
  width: 100%;
}

/* .card{
  float: right;
  padding-top: 0%;

} */

</style>