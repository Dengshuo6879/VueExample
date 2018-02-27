import Vue from 'vue';
import Vuex from 'vuex';

import {counterModule} from './stores/index';

Vue.use(Vuex);


const store =new Vuex.Store({
  modules:{
    counter: counterModule,
  }
})

export default store