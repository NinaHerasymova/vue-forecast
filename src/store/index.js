import {createStore} from 'vuex'

const store = createStore({
  state(){
    return{
      city: '',
      location:{},
      forecast:{},
      error:''
    }
  },
  mutations:{
    setCity(state, cityName){
      state.city = cityName.toLowerCase()
    },
    setForecast(state, forecast){
      state.forecast = forecast
    },
    setLocation(state, location){
      state.location = location
    },
    setError(state, error){
      state.error = error
    }
  },
  actions:{
    setCity(context, cityName){
      context.commit('setCity', cityName)
    },
    setForecast(context, forecast){
      context.commit('setForecast', forecast)
    },
    setLocation(context, location){
      context.commit('setLocation', location)
    }
  },
  getters:{
    getCity(state){
      return state.city
    },
    getForecast(state){
      return state.forecast
    },
    getLocation(state){
      return state.location
    },
    getErrors(state){
      return state.error
    }
  }
});

export default store;
