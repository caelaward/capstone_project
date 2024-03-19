<template>
  <div class="checkout">
   <h1>checkout</h1>
    <div class="container">
    <table class="table table-hover " id="cart_Table">
    <thead class="table-secondary" >
      <tr scope="col">
        <th >userID</th>
        <th >Item</th>
        <th >Description</th>
        <th >Price</th>
        <th >Img</th>
        <th ></th>
      </tr>
    </thead> 
    <tbody v-for="carts in $store.state.cart" :key="carts.cartID">
      <tr scope="row">
        <td id="table_info">{{carts.cartID}}</td>
        <td id="table_info">{{carts.prodID}}</td>
        <td id="table_info">{{carts.quantity}}</td>
        <!-- <td id="table_info">R{{house.price}}</td> -->
        <td><img :src="house.prodURL" class="w-25" ></td>
       
      </tr>
    </tbody>
    </table>
    </div>
   
  </div>
</template>

<script>
export default {
  methods:{
    getCart(){
      this.$store.dispatch('getCart',$cookies.get('userID'))
    }
  },
  mounted(){
    this.getCart
  }

}
</script>

<style>

</style>