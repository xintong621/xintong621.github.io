import {
  SET_USERS,
  SET_USER_DETAIL,
  SET_LOADING,
} from './actions';

const initialState = {
  users: [],
  userDetail: null,
  loading: false
};

function myApp(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return Object.assign({}, state, {
        users: action.users || [],
        loading: false
      });
    case SET_USER_DETAIL:
      return Object.assign({}, state, {
        userDetail: action.userDetail || {}
      });
    case SET_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      });
    default:
      return state
  }
}


export default myApp;
