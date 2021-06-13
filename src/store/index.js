import {createStore} from 'vuex'

const store = createStore({
  state(){
    return{
      city: ''
    }
  },
  mutations:{
    setCity(state, cityName){
      state.city = cityName.toLowerCase()
    }
  },
  actions:{
    setCity(context, cityName){
      context.commit('setCity', cityName)
    }
  },
  getters:{
    getCity(state){
      return state.city
    }
  }
});

export default store;
