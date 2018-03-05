import axios from 'axios';

const state = {
  content: [],
  item: {
    create_at: '2017-02-22T11:32:43.547Z',
  },
  limit: 0,
  loading: false,
}

const getters = {
  content: state => state.content,
  item: state => state.item,
  limit: state => state.limit,
  // loading: state => state.loading,
}

const actions = {
  getData({
    commit
  }) {
    commit('GETDATA');
  },
  scrollMethod({
    commit
  }) {
    commit('SCROLLMETHOD');
  },
}

const mutations = {
  GETDATA(state) {
    state.limit += 10;
    state.loading = true;
    const data = {
      page: 1,
      limit: state.limit,
      mdrender: 'false',
    };
    axios({
      url: 'https://cnodejs.org/api/v1/topics',
      method: 'get',
      data,
    }).then((res) => {
      state.content = res.data.data;
      state.loading = false;
    }).catch((res) => {
      console.log('MaiSec.vue: ', res);
    });
  },
  SCROLLMETHOD() {
    const sumH = document.body.scrollHeight || document.documentElement.scrollHeight;
    const viewH = document.documentElement.clientHeight;
    const scrollH = document.body.scrollTop || document.documentElement.scrollTop;
    if (viewH + scrollH >= sumH) {
      this.commit('GETDATA')
    }
  }
}

export const mainSec = {
  state,
  getters,
  actions,
  mutations,
}
