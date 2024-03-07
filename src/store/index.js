import { createStore } from 'vuex'
import axios from 'axios'
const BASE_URL='http://localhost:8258'

export default createStore({
  state: {
    products:[]
  },
  getters: {
  },
  mutations: {
    setProducts(state,data){
      state.products=data
    }
  },
  actions: {
    async getProducts({commit}) {
      let {data} = await axios.get(BASE_URL+'/products');
       console.log(data);
      commit("setProducts", data);
    }
  },
  modules: {
  } 
})
