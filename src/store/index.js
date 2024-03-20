import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
const BASE_URL = "http://localhost:8258";
// const BASE_URL='https://capstone-project-0nzm.onrender.com'
axios.defaults.withCredentials = true;

export default createStore({
  state: {
    houses: [],
    loggedIn: false,
    singleHouse: [],
    users: [],
    cart: [],
  },
  getters: {},
  mutations: {
    setHouses(state, data) {
      state.houses = data;
    },
    setLogged(state, data) {
      state.loggedIn = data;
    },
    setSingleH(state, data) {
      state.singleHouse = data;
    },
    setUsers(state, data) {
      state.users = data;
    },
    setCarts(state, data) {
      state.cart = data;
    },
  },
  actions: {
    async getHouses({ commit }) {
      let { data } = await axios.get(BASE_URL + "/products");
      console.log(data);
      commit("setHouses", data);
    },
    async getSingleHouse({ commit }, prodID) {
      let { data } = await axios.get(BASE_URL + "/products/" + prodID);
      console.log(data);
      commit("setSingleH", data);
    },
    async deleteHouses({ commit }, prodID) {
      await axios.delete(BASE_URL + "/products/" + prodID);
    },
    async updateHouse({ commit }, update) {
      await axios.patch(BASE_URL + "/products/" + update.prodID, update);
      window.location.reload();
    },
    async addhouse({ commit }, newhouse) {
      await axios.post(BASE_URL + "/products", newhouse);
      window.location.reload();
    },
    async checkUser({ commit }, user) {
      let { data } = await axios.post(BASE_URL + "/login", user);
      //  user is the this.$data that was saved
      if (data.token !== undefined) {
        $cookies.set("jwt", data.token);
        let [{ userRole }] = data.user;
        $cookies.set("userRole", userRole);
        let [user] = data.user;
        $cookies.set("user", user);
        let [{ userID }] = data.user;
        $cookies.set("userID", userID);
        alert(data.msg);
        await router.push("/");
      } else {
        alert(data.msg);
        $cookies.remove("jwt");
        $cookies.remove("user");
        $cookies.remove("userRole");
        $cookies.remove("userID");
      }
      commit("setLogged", true);
      window.location.reload();
    },
    async addUser({ commit }, newuser) {
      const { data } = await axios.post(BASE_URL + "/users/", newuser);
      alert(data.msg);
      window.location.reload();
    },
    async logout(context) {
      // let cookies = $cookies.keys();
      // console.log(cookies);
      $cookies.remove("jwt");
      $cookies.remove("user");
      $cookies.remove("userRole");
      $cookies.remove("userID");
      window.location.reload();
      // let {data}=await axios.delete(BASE_URL+'/logout')
      alert("you have logged out");
    },
    async getUsers({ commit }) {
      let { data } = await axios.get(BASE_URL + "/users");
      console.log(data);
      commit("setUsers", data);
    },
    async deleteUsers({ commit }, userID) {
      await axios.delete(BASE_URL + "/users/" + userID);
      // window.location.reload()
    },
    async updateUser({ commit }, update) {
      await axios.patch(BASE_URL + "/users/" + update.userID, update);
      window.location.reload();
    },
    async getCart({commit},userID) {
      let {data} = await axios.get(BASE_URL + '/cart/'+ userID)
      console.log(data);
      commit('setCarts',data)
     },
    async addCartItem({ commit }, payload) {
      let data=await axios.post(`${BASE_URL}/cart/${payload.prodID}?users=${payload.userID}`
      );
      console.log(data);
      window.location.reload()
    },
    async deleteCartItem({ commit }, cartID) {
      try {
        // Check if cartID is valid before making the request
        if (cartID === undefined || cartID === null) {
          throw new Error("Invalid cartID");
        }
    
        // Make the DELETE request to delete the cart item
        await axios.delete(BASE_URL + "/cart/" + cartID);
    
        window.location.reload();
      } catch (error) {
        console.error("Error deleting cart item:", error);
        
      }
    },
    
  },
  modules: {},
});
