import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = 'vuex练习'
try {
    if(localStorage.test){
        defaultCity = localStorage.test
    }
}catch(e){}

 export default new Vuex.Store({
    state:{
        test:defaultCity//共用的数据
    },

    mutations:{
    	changeTest (state,test){
    		state.test=test
    		try{
    		localStorage.test=test
    	}catch(e){}
    	}
    }
})