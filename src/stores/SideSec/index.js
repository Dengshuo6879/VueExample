import axios from 'axios';
const state = {
  userInfo: {
    avatar_url: '',
    loginname: 'temp',
  },
  loading: false,
}

const getters = {
  userInfo: state => state.userInfo,
  loading: state => state.loading,
}

const actions = {
  getUser: ({ commit }, _username) => commit('GETUSER', { _username })
}

const mutations = {
  GETUSER(state, { _username }){
    state.loading = true;
    axios({
      url: `https://cnodejs.org/api/v1/user/${_username}`,
      method: 'get',
    }).then((res)=>{
      state.userInfo = res.data.data
    }).catch((res)=>{
      console.log('SideSec.vue: ', res);
    })
    state.loading = false;
  }
}

export const sideSec = {
  state,
  getters,
  actions,
  mutations,
}