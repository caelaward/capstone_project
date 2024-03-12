<template>
  <!-- <div class="login">
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
  </div> -->

  <div class="container mt-5" id="loginPage">
    <div class="row">
    <img src="https://i.ibb.co/gJhND9y/prod2.jpg" class="col w-50 img-fluid p-0 ">
    <card class="col form">
    <span class="login">Welcome back </span>
    <input type="text" placeholder="username" name="userName" required v-model="userName">
    <!-- <input type="userSurname" placeholder="userSurname" name="userSurname" required v-model="userSurname">
    <input type="email" placeholder="email" name="email" required v-model="email">
    <input type="userRole" placeholder="userRole" name="userRole" required v-model="userRole"> -->
    <input type="password" placeholder="password" name="password" required v-model="password">
     <button class="loginBtn" @click="loginUser()">Login</button>
</card>
</div>
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

<style scoped>
#loginPage {
  background-color: white;
  /* padding: 20px; */
  /* border-radius: 10px; */
  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
  box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.75);
  width:70%;
 
}

.form{
  padding:10px;
  
}

.login {
  color: rgb(77, 75, 75);
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 0.5em;
}

input {
  width: 100%;
  margin-bottom: 1.25em;
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 0.8em;
  font-family: 'Inter', sans-serif;
  outline: none;
}

input:focus {
  border: 1px solid grey;
  outline: none;
}

.loginBtn {
  width: 50%;
  padding: 0.625em;
  border-radius: 5px;
  color: white;
  background-color: grey;
  border: 1px dashed grey;
  cursor: pointer;
}

.loginBtn:hover {
  color: grey;
  background-color: white;
  border: 1px dashed grey;
  cursor: pointer;
  transition: 0.5s;
}







.loginBtn {
  width: 50%;
  padding: 0.625em;
  border-radius: 5px;
  color: white;
  background-color: grey;
  border: 1px dashed grey;
  cursor: pointer;
}

.loginBtn:hover {
  color: grey;
  background-color: white;
  border: 1px dashed grey;
  cursor: pointer;
  transition: 0.5s;
}

</style>