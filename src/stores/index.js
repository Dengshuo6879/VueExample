import Vue from 'vue';
import Vuex from 'vuex';

import { cnodeHead } from './CnodeHead/index';
import { mainSec } from './MainSec/index';
import { articleCom } from './ArticleCom/index';
import { sideSec } from './SideSec/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cnodeHead,
    mainSec,
    articleCom,
    sideSec,
  }
})

export default store;