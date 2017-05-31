import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const state = {
// 	type : ''
// }

// const mutations = {
// 	changeType (state,payload) {
// 		state.type = payload.new;
// 	}
// }

// const actions = {
// 	changeType: ({ commit }) => commit('changeType')
// }

const getters = {
	
}
const CHANGE_SUC = 'CHANGE_SUC';
const READ_SUC = 'READ_SUC';
export default new Vuex.Store({
	state:{
    movieType:'',
    movieList:[]
  },
  actions:{
    changeType({ commit } , typeInfo){
      commit(CHANGE_SUC , typeInfo);
    },
    saveMovie({ commite }, movieInfo){
      commit(READ_SUC , movieInfo);
    }
  },
	getters,
	mutations:{
    [CHANGE_SUC](state,typeInfo){
      state.movieType = typeInfo.newType;
    },
    [READ_SUC](state,movieInfo){
      state.movieList = movieInfo.movieDetail;
    }
  }
})