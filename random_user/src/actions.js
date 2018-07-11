import axios from 'axios';

export const SET_USERS = 'SET_USERS';
export const SET_USER_DETAIL = 'SET_USER_DETAIL';
export const SET_LOADING = 'SET_LOADING';

export function fetchUsers(num) {
	return (dispatch) => {
		dispatch(setLoading(true));
		axios({
			method: 'GET',
			url: `https://randomuser.me/api/?results=${num||1000}`,
		}).then(function(response) {
			//handle success
			if(response && response.data && response.data.results) {
				//console.log(response.data.results);
				dispatch(setUsers(response.data.results));
			} else {
				console.log('No results in the response.');
			}
		})
		.catch(function (error) {
			//handle error
			console.log(error);
		})
		.then(function() {
			// always executed
		});
	};
};

export function setUsers(users) {
	return{
		type: SET_USERS,
		users,
	};
};

export function setUserDetail(userDetail) {
	return{
		type: SET_USER_DETAIL,
		userDetail,
	};
};

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading,
  };
};