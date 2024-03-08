<template>
  <div class="admin">

    <h1>admin</h1>

    <table class="table table-hover ">
    <thead>
      <tr>
        <th scope="col">House</th>
        <th scope="col">Description</th>
        <th scope="col">Qauntity</th>
        <th scope="col">Category</th>
        <th scope="col">Img</th>
      </tr>
    </thead>
    <tbody v-for="house in $store.state.houses" :key="house.prodID">
      <tr scope="row">
        <td>{{house.prodName}}</td>
        <td>{{house.description}}</td>
        <td>{{house.quantity}}</td>
        <td>{{house.category}}</td>
        <td><img :src="house.prodUrl" ></td>
        <td>
          <button type="button" class="btn btn-success me-2" @click="delHouse(house.prodID)">Delete</button>
          <button type="button" class="btn btn-success" @click="editHouse(house.prodID)">Edit</button>
        </td>
      </tr>
    </tbody>
    </table>
     <input type="text" placeholder="House" v-model="prodName" required >
      <input type="text" placeholder="category" v-model="category" required >
      <input type="number" placeholder="price" v-model="price" required >
      <input type="text" placeholder="description" v-model="description" required ><br>
      <input type="text" placeholder="prodURL" v-model="prodURL" required ><br>
      <input type="text" placeholder="prodURL1" v-model="prodURL1" required ><br>
      <input type="text" placeholder="prodURL2" v-model="prodURL2" required ><br>
      <input type="text" placeholder="prodURL3" v-model="prodURL3" required ><br>
      <button type="button" class="btn btn-success me-2 mt-2" @click="addHouse">add</button>
  </div>

</template> 

<script>
export default {
  data(){
 return{
   prodName:'',
   category:'',
   prodURL:'',
   prodURL1:'',
   prodURL2:'',
   prodURL3:'',
   description:'',
   price:''
 }
},
  computed:{
  getHouses(){
    this.$store.dispatch('getHouses')
  },
   addHouse(){
   this.$store.dispatch('addhouse',this.$data)
 }
  },
  methods:{
    delHouse(prodID){
      this.$store.dispatch('deleteHouses',prodID)
    },
     editHouse(id){
        let edit={
          prodID:id,
          prodName:this.prodName,
          quantity:this.quantity,
          amount:this.amount,
          category:this.category,
          prodUrl:this.prodUrl
        }
        this.$store.dispatch('updateHouse',edit) 
      }
  },
  mounted(){
    this.getHouses
  }
}
</script>

<style>

</style>