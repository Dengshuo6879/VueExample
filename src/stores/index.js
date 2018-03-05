import Vue from 'vue';
import Vuex from 'vuex';

import { cnodeHead } from './CnodeHead/index';
import { mainSec } from './MainSec/index';
import { articleCom } from './ArticleCom/index';
import { sideSec } from './SideSec/index';
import { userCom } from './UserCom/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cnodeHead,
    mainSec,
    articleCom,
    sideSec,
    userCom,
  }
})

export default store;