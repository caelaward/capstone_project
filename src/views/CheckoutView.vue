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
        <td id="table_info">{{house.prodName}}</td>
        <td id="table_info">{{house.description}}</td>
        <td id="table_info">{{house.category}}</td>
        <td id="table_info">R{{house.price}}</td>
        <td><img :src="house.prodURL" class="w-25" ></td>
       
      </tr>
    </tbody>
    </table>
    </div>
   
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>