const state = {
  dialogVisible: false,
}

const getters = {
  // dialogVisible: state => state.dialogVisible,
}

const actions = {
  changeDialogVisible: ({commit}) => commit('CHANGEDIALOGVISIBLE'),
}

const mutations = {
  CHANGEDIALOGVISIBLE(state){
    state.dialogVisible = !state.dialogVisible
  }
}

export const cnodeHead = {
  state,
  getters,
  actions,
  mutations,
}
