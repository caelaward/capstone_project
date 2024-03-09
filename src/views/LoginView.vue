<template>
  <div class="login">
   <h1>login</h1>
    <input type="text" placeholder="username" name="userName" required v-model="userName"><br><br>
    <input type="password" placeholder="password" name="password" required v-model="password">
    <br>
    <br>
    <!-- <button @click="submitData()">Register</button> -->
    {{$store.state.loggedIn}}
    <button @click="loginUser()">Login</button>
  </div>
</template>

<script>
export default {
  data(){
        // as typing data gets saved here 
            return{
                userName:'',
                password:''
            }
        },
        methods:{
            // submitData(){
            //     console.log(this.$data);
            //     this.$store.dispatch('addUser',this.$data)
            // },
            loginUser(){
               this.$store.dispatch('checkUser',this.$data)  
            }
        }

}
</script>

<style>

</style>