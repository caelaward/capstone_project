<template>
  <div class="admin">

    <h1>Products CRUD</h1>
    <p>Press the add button to add any new products into the system</p>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  add
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <input type="text" placeholder="prodName.." data-name name="prodName"  v-model="prodName"  id="modal_Input">
             <input type="text" placeholder="description.." data-description name="description"  v-model="description" id="modal_Input">
             <input type="number" placeholder="price.." data-amount name="price"  v-model="price" id="modal_Input">
             <input type="text" placeholder="category.." data-category name="category"  v-model="category" id="modal_Input">
             <input type="text" placeholder="url..." data-url name="prodURL"  v-model="prodURL" id="modal_Input">
             <input type="text" placeholder="url1..." data-url1 name="prodURL1"  v-model="prodURL1" id="modal_Input">
             <input type="text" placeholder="url2..." data-url2 name="prodURL2"  v-model="prodURL2" id="modal_Input">
             <input type="text" placeholder="url3..." data-url2 name="prodURL3"  v-model="prodURL3" id="modal_Input">

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="addHouse">Save changes</button>
      </div>
    </div>
  </div>
</div>

    <div class="container">
    <table class="table table-hover " id="prodTable">
    <thead class="table-secondary" >
      <tr scope="col">
        <th >House</th>
        <th >Description</th>
        <th >Category</th>
        <th >Price</th>
        <th >Img</th>
        <th ></th>
      </tr>
    </thead> 
    <tbody v-for="house in $store.state.houses" :key="house.prodID">
      <tr scope="row">
        <td id="table_info">{{house.prodName}}</td>
        <td id="table_info">{{house.description}}</td>
        <td id="table_info">{{house.category}}</td>
        <td id="table_info">R{{house.price}}</td>
        <td><img :src="house.prodURL" class="w-25" ></td>
 <td>
  
  <button type="button" class="btn btn-secondary " @click="delHouse(house.prodID)">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-trash3 " viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
    </svg>
   </button>
  <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" :data-bs-target="'#exampleModal2'+house.prodID"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
 </svg>
 </button>    
         <div class="modal fade" :id="'exampleModal2'+house.prodID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
          <div class="modal-content">
           <div class="modal-header">
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body" modal-body>
             <input type="text" placeholder="prodName.." data-name name="prodName"  v-model="prodName"  id="modal_Input">
             <input type="text" placeholder="description.." data-description name="description"  v-model="description" id="modal_Input">
             <input type="text" placeholder="price.." data-amount name="price"  v-model="price" id="modal_Input">
             <input type="text" placeholder="category.." data-category name="category"  v-model="category" id="modal_Input">
             <input type="text" placeholder="url..." data-url name="prodURL"  v-model="prodURL" id="modal_Input">
           </div>
           <div class="modal-footer" id="modalBtm">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <button type="button" data-modal class="btn btn-primary" save @click="editHouse(house.prodID)">Save changes</button>
           </div>
         </div>
       </div>
     </div>
     </td>
      </tr>
       </tbody>
    </table>
  </div>
  </div>
</template> 

<script>
import sweet from "sweetalert"

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
      .then(()=>{
        sweet({
        title: "Are you sure?",
        text: "You will not be able to recover this file!",
        type: "warning", 
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: true,
      })
      .then(() => {
          // Reload the page after successful deletion
          window.location.reload();
        })
      })
    },
     editHouse(id){
        let edit={
          prodID:id,
          prodName:this.prodName,
          description:this.description,
          price:this.price,
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

 #scroller2 {
  background-color: #ededcf;
  overflow: auto;
  white-space: nowrap;
  padding: 10px;
  
}

::-webkit-scrollbar{
  display:none
}

/* #modalBtm{
  background-color:aqua;
} */
#modal_Input{
  width: 100%;
  margin-bottom: 1.25em;
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 0.8em;
  /* font-family: 'Inter', sans-serif; */
  /* outline: none; */
}
#prodTable{
  margin-top:2rem ;
  border: solid 2px;
  border-color:grey;
  /* box-shadow: -2px 0px 26px rgba(0, 0, 0, 0.2); */
}
#table_info{
  padding-top:2rem;
}
th{
  padding: 30px !important;
}

</style>