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
         <li class="nav-item">
            <router-link to="/" class="nav-link  text-white"  href="home">Home</router-link>
         </li>       
         <li class="nav-item">
             <router-link to="/about" class="nav-link text-white" >About</router-link>
        </li>
         <li class="nav-item">
            <router-link to="/products" class="nav-link text-white" href="products">Products</router-link>
        </li>
        <li class="nav-item">
        <router-link to="/contact" class="nav-link text-white" href="contact">Contact</router-link>
      </li>
        <li class="nav-item">
        <router-link to="/checkout" class="nav-link text-white" href="checkout">Checkout</router-link>
      </li>
      <li class="nav-item dropdown" >
          <a class="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </a>
          <ul class="dropdown-menu">
            <router-link to="/admin" class="nav-link " href="admin">Products Admin</router-link>
            <router-link to="/user" class="nav-link " href="user">Users Admin</router-link>
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

        <button v-if="$cookies.get('jwt')" @click="logout" class="btn btn-dark" id="logoutBtn">Logout</button>
      
      </div>
    </div>
  </div>
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
#logo {
    width: 25px;
    height: 25px;
    padding: 2px;
    mix-blend-mode: multiply;
    transition: transform 0.3s;
  } 
 #logo:hover{
      transform: scale(1.2);
    }
#top-nav{
    background-color: #CCCC99;
    }    

#nav{
    background-color: #8b8b7c ;
}
#logoutBtn{
  margin-left: 65%;
}
/* #353515 */
 /* #8b8b7c */
</style>