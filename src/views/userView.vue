<template>
  <div class="container ">

     <table class="table table-hover ">
    <thead>
      <tr>
        <th scope="col">User</th>
        <th scope="col">Description</th>
        <th scope="col">Category</th>
        <th scope="col">Img</th>
      </tr>
    </thead>
    <tbody v-for="user in $store.state.users" :key="user.userID">
      <tr scope="row">
        <td>{{user.userName}} {{user.userSurname}}</td>
        <!-- <td>{{user.userSurname}}</td> -->
        <td>{{user.userRole}}</td>
        <td>{{user.email}}</td>
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
  mounted:{
     getUsers
  }

}
</script>

<style>

</style>