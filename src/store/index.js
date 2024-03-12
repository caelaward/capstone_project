import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
const BASE_URL='http://localhost:8258'
axios.defaults.withCredentials = true

export default createStore({
  state: {
    houses:[],
    loggedIn:false,
    singleHouse:[],
    users:[]
  },
  getters: {
  },
  mutations: {
    setHouses(state,data){
      state.houses=data
    },
    setLogged(state,data){
      state.loggedIn=data
     },
     setSingleH(state,data){
      state.singleHouse=data
     },
     setUsers(state,data){
      state.users=data
    }
  },
  actions: {
    async getHouses({commit}) {
      let {data} = await axios.get(BASE_URL+'/products');
       console.log(data);
      commit("setHouses", data);
    },
    async getSingleHouse({commit},prodID) {
      let {data} = await axios.get(BASE_URL+'/products/'+prodID);
       console.log(data);
      commit("setSingleH", data);
    },
    async deleteHouses({commit},prodID){
      await axios.delete(BASE_URL+'/products/'+prodID)
      window.location.reload()
    },
    async updateHouse({commit},update){
      await axios.patch(BASE_URL+'/products/'+update.prodID,update)
      window.location.reload()
    }, 
    async addhouse({commit},newhouse){
      await axios.post(BASE_URL+'/products',newhouse); 
      window.location.reload() 
  },
  async checkUser({commit},user) {
    let {data}=await axios.post(BASE_URL+'/login/',user);
    //  user is the this.$data that was saved
    $cookies.set('jwt',data.token)
    alert(data.msg)
    commit('setLogged',true)
    // replace will redirect but not allow you to go back
    // push keeps browser history of when visiting that page.. redirects you but able to press back
    await router.push('/')
    window.location.reload()
    // reloads page 
    // window.location.reload()
  },
  async addUser({ commit },newuser) {
    const {data} =await axios.post(BASE_URL+'/users/',newuser);
    // new user is the this.$data that was saved
    // reloads page 
    alert(data.msg)
    window.location.reload()
  },
  async logout(context){
    let cookies=$cookies.keys()
    console.log(cookies);
    $cookies.remove('jwt')
    window.location.reload()
    // let {data}=await axios.delete(BASE_URL+'/logout')
    alert("you have logged out")
  },
  async getUsers({commit}) {
    let {data} = await axios.get(BASE_URL+'/users');
     console.log(data);
    commit("setUsers", data);
  },
  async deleteUsers({commit},userID){
    await axios.delete(BASE_URL+'/users/'+userID)
    window.location.reload()
  },
  async updateUser({commit},update){
    await axios.patch(BASE_URL+'/users/'+update.userID,update)
    window.location.reload()
  }
  },
  modules: {
  } 
})
