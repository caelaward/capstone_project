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
        <th >quantity</th>
      </tr>
    </thead> 
    <tbody v-for="item in $store.state.cart" :key="item.cartID">
      <tr scope="row">
        <td id="table_info">{{item.userID}}</td>
        <td id="table_info">{{item.prodName}}</td>
        <td id="table_info">{{item.description}}</td>
        <td id="table_info">R{{item.price}}</td>
        <td><img :src="item.prodURL" class="w-25" ></td>
        <td id="table_info">{{item.quantity}}</td>
        <td id="table_info"><button @click="delCartItem(item.cartID)">x</button></td>
       
      </tr>
    </tbody>
    </table>
    </div>
   
  </div>
</template>

<script>

export default {
  methods:{
    delCartItem(cartID){
      this.$store.dispatch('deleteCartItem',cartID)
     
    }
  },
  computed:{
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