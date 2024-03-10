<template>
  <div class="login">
   <h1>login</h1>
    <input type="text" placeholder="username" name="userName" required v-model="userName"><br><br>
    <input type="userSurname" placeholder="userSurname" name="userSurname" required v-model="userSurname">
    <input type="email" placeholder="email" name="email" required v-model="email">
    <input type="userRole" placeholder="userRole" name="userRole" required v-model="userRole">
    <input type="password" placeholder="password" name="password" required v-model="password">
    <br>
    <br>
    <button @click="submitData()">Register</button>
    <button @click="loginUser()">Login</button>
  </div>
</template>

<script>
export default {
  data(){
        // as typing data gets saved here 
            return{
                userName:'',
                userSurname:'',
                email:'',
                userRole:'',
                password:''
            }
        },
        methods:{
            submitData(){
                console.log(this.$data);
                this.$store.dispatch('addUser',this.$data)
            },
            loginUser(){
               this.$store.dispatch('checkUser',this.$data)  
            }
        }

}
</script>

<style>

</style>