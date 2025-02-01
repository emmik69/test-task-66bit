import { api } from 'api';
import {
	getUserFailed,
	getUserStarted,
	getUserSuccess,
} from 'store/actions/user';

export const getUserById = (userId) => {
	return async (dispatch) => {
		try {
			dispatch(getUserStarted());
			const response = await api.user.getUserById({
				url: '/' + userId,
			});
			dispatch(getUserSuccess(response.data ? response.data : {}));
		} catch (error) {
			dispatch(getUserFailed());
			console.log(error);
		}
	};
};
