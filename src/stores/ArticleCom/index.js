import axios from 'axios';

const state = {
  article: {
    title: '',
    author: {
      loginname: 'temp',
    },
    visit_count: '',
    tab: '',
    content: '',
    create_at: '2018-03-02',
    replies: '',
  },
  loading: false,
}

const getters = {
  article: state => state.article,
  // loading: state => state.loading,
}

const actions = {
  getArticle: ({commit}, _this) => commit('GETARTICLE', {_this})
}

const mutations = {
  GETARTICLE(state, {_this}) {
    console.log(this)
    state.loading = true;
    axios({
      url: `https://cnodejs.org/api/v1${_this.$route.path}`,
      method: 'get',
    }).then((res) => {
      if (res.data.success === true) {
        state.article = res.data.data;
        _this.$parent.authorName = state.article.author.loginname;
      } else {
        state.article = 'Sorry, Something wrong happened when getting the remote data';
      }
      state.loading = false;
    }).catch((res) => {
      console.log('ArticleCom.vue: ', res);
    });
  }
}

export const articleCom = {
  state,
  getters,
  actions,
  mutations,
}