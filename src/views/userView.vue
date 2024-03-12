<template>
  <div class="container ">

     <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">User</th>
        <th scope="col">User Role</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody v-for="user in $store.state.users" :key="user.userID">
      <tr scope="row">
    
        <td>{{user.userName}} {{user.userSurname}}</td>
        <!-- <td>{{user.userSurname}}</td> -->
        <td>{{user.userRole}}</td>
        <td>{{user.email}}</td>
        <td>
        <button type="button" class="btn btn-secondary " @click="delUsers(user.userID)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-trash3 " viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>
       </button>
       <button type="button" class="btn btn-secondary m-2 " data-bs-toggle="modal" :data-bs-target="'#exampleModal2'+user.userID"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
 </svg>
 </button>    
         <div class="modal fade" :id="'exampleModal2'+user.userID" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
         <div class="modal-dialog">
          <div class="modal-content">
           <div class="modal-header">
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body" modal-body>
             <input type="text" placeholder="userName.." data-name name="userName" id="userName" v-model="userName">
             <input type="text" placeholder="userSurname.." data-userSurname name="userSurname" id="userSurname" v-model="userSurname">
             <input type="text" placeholder="userRole.." data-amount name="userRole" id="userRole" v-model="userRole">
             <input type="text" placeholder="email.." data-email name="email" id="email" v-model="email">
             <input type="text" placeholder="password..." data-url name="password" id="password" v-model="password">
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <button type="button" data-modal class="btn btn-primary" save @click="editUser(user.userID)">Save changes</button>
           </div>
         </div>
       </div>
     </div>
        </td>
      </tr>
    </tbody>
     </table>
  </div>
</template>

<script>
export default {
  computed:{
  getUsers(){
    this.$store.dispatch('getUsers')
  }
  },
  methods:{
     delUsers(userID){
      this.$store.dispatch('deleteUsers',userID)
    },
      editUser(id){
        let edit={
          userID:id,
          userName:this.userName,
          userSurname:this.userSurname,
          userRole:this.userRole,
          email:this.email,
          password:this.password
        }
        this.$store.dispatch('updateUser',edit) 
      }
  },
  mounted(){
     this.getUsers
  }

}
</script>

<style>

</style>