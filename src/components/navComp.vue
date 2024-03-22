<template>

<div class="sticky-top" id="top-nav">
<div class="container-fluid" > 

</div>
    <nav class="navbar navbar-expand-lg p-3" id="nav">
  <div class="container-fluid ">
   
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation ">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
      <div class="navbar-nav  ">
         <li class="nav-item" v-if="$cookies.get('jwt')" >
        <router-link to="/singleUser" class="nav-link text-white" href="profile"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
             <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
             </svg>
          </router-link>
        </li>
         <li class="nav-item">
            <router-link to="/" class="nav-link  text-white"  href="home">Home</router-link>
         </li>       
         <li class="nav-item">
             <router-link to="/about" class="nav-link text-white" >About</router-link>
        </li>
         <li class="nav-item">
            <router-link to="/products" class="nav-link text-white" href="products">Houses</router-link>
        </li>
        
        <li class="nav-item">
        <router-link to="/contact" class="nav-link text-white" href="contact">Contact</router-link>
        </li>
        
      <li class="nav-item dropdown" >
          <a class="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false" v-if="$cookies.get('userRole') == 'admin'">
            Admin
          </a>
          <ul class="dropdown-menu" >
            <router-link to="/admin" class="nav-link "  href="admin">Products Admin</router-link>
            <router-link to="/user" class="nav-link "  href="user">Users Admin</router-link>
           
          </ul>
        </li>
      <!-- <li class="nav-item">
        <router-link v-if="!$cookies.get('jwt')" to="/login" class="nav-link text-white" href="login">Login</router-link>
      </li> -->
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white"  v-if="!$cookies.get('jwt')" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            login/signup
          </a>
          <ul class="dropdown-menu">
            <router-link to="/login" class="nav-link" href="login">Login</router-link>
            <router-link to="/register" class="nav-link " href="register">Sign up</router-link>
          </ul>
        </li>
        
         <li class="nav-item">
             <button v-if="$cookies.get('jwt')" @click="logout" class="btn btn-dark" id="logoutBtn">Logout</button>
        </li>
        
        
      
      </div>
    </div>
  </div>
        <li class="nav-item d-flex jusifiy-content-end">
            <router-link to="/checkout" v-if="$cookies.get('jwt')" class="nav-link text-white" href="checkout"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
            </svg></router-link>
         </li>
</nav>
    

</div>

</template>

<script>
export default {
  computed:{
    logout(){
      this.$store.dispatch('logout')
    }
  }

}
</script>

<style scoped>
/* #logo {
    width: 25px;
    height: 25px;
    padding: 2px;
    mix-blend-mode: multiply;
    transition: transform 0.3s;
  }  */
 /* #logo:hover{
      transform: scale(1.2);
    }   */

#nav{
    background-color: #8b8b7c ;
}
#logoutBtn{
  margin-left: 65%;
}
/* #353515 */
 /* #8b8b7c */
</style>