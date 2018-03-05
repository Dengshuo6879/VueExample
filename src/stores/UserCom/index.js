import axios from 'axios';

const state = {
  userInfo: {
    create_at: '2018-03-02',
  },
  loading: false,
}

const getters = {
  userInfo: state => state.userInfo,
}

const actions = {
  getUserInfo: ({commit}, param)=> commit('GETUSERINFO', {param}),
}

const mutations = {
  GETUSERINFO(state, {param}){
    const val = param;
    axios({
      url: `https://cnodejs.org/api/v1/${val}`,
      method: 'get',
    }).then((res)=>{
      state.userInfo = res.data.data;
    }).catch((res)=>{
      console.log("UserCom.vue", res);
    })
  }
}

export const userCom = {
  state,
  getters,
  actions,
  mutations,
}