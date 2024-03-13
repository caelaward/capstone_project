<template>
  <div class="container mt-5" id="signUpPage">
    <!-- <img src="https://i.ibb.co/gJhND9y/prod2.jpg" class="col w-50 img-fluid p-0 "> -->
    <card class=" form">
    <span class="signup">Sign up </span>
    <input type="text" placeholder="username" name="userName" required v-model="userName">
    <input type="userSurname" placeholder="userSurname" name="userSurname" required v-model="userSurname">
    <input type="email" placeholder="email" name="email" required v-model="email">
    <input type="userRole" placeholder="userRole" name="userRole" required v-model="userRole">
    <input type="password" placeholder="password" name="password" required v-model="password">
    <button class="signUpBtn" @click="submitData()">Register</button>
</card>
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
            }
            // loginUser(){
            //    this.$store.dispatch('checkUser',this.$data)  
            // }
        }

}
</script>

<style scoped>
#signUpPage {
  background-color: white;
  padding: 20px;
  /* border-radius: 10px; */
  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
  box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.75);
  width:65%;
 background: url(https://i.ibb.co/gJhND9y/prod2.jpg);
 background-repeat: no-repeat;
 background: cover;
 
 
}

.form{
  padding:10px;
  
}

.signup {
  color: rgb(77, 75, 75);
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 0.5em;
}

input {
  width:70%;
  margin-bottom: 1.25em;
  height: 50px;
  border-radius: 5px;
  border: 3px solid rgb(255, 254, 254);
  padding: 0.8em;
  background: transparent;
  /* font-family: 'Inter', sans-serif; */
  /* outline: none; */
}
input::placeholder{
    color: black;
}

input:focus {
  border: 1px solid grey;
  outline: none;
}

.signUpBtn {
  width: 50%;
  padding: 0.625em;
  border-radius: 5px;
  color: white;
  background-color: grey;
  border: 1px dashed grey;
  cursor: pointer;
}

.signUpBtn:hover {
  color: grey;
  background-color: white;
  border: 1px dashed grey;
  cursor: pointer;
  transition: 0.5s;
}


.signUpBtn {
  width: 50%;
  padding: 0.625em;
  border-radius: 5px;
  color: white;
  background-color: grey;
  border: 1px dashed grey;
  cursor: pointer;
}

.signUpBtn:hover {
  color: grey;
  background-color: white;
  border: 1px dashed grey;
  cursor: pointer;
  transition: 0.5s;
}

</style>