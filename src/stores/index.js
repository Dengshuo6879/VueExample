import Vue from 'vue';
import Vuex from 'vuex';

import { cnodeHead } from './cnodeHead/index';
import {mainSec} from './MainSec/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cnodeHead,
    mainSec,
  }
})

export default store;