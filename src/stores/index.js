import * as actions from './actions';
import * as mutations from './mutations';

const state = {
  count: 0,
  txt: true,
}

export const counterModule = {
  state,
  actions,
  mutations,
}