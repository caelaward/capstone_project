import { createStore } from 'vuex'
import axios from 'axios'
const BASE_URL='http://localhost:8258'

export default createStore({
  state: {
    houses:[]
  },
  getters: {
  },
  mutations: {
    setHouses(state,data){
      state.houses=data
    }
  },
  actions: {
    async getHouses({commit}) {
      let {data} = await axios.get(BASE_URL+'/products');
       console.log(data);
      commit("setHouses", data);
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
      let {data} =await axios.post(BASE_URL+'/products',newhouse);
      console.log(data);
      window.location.reload() 
  }
  },
  modules: {
  } 
})
