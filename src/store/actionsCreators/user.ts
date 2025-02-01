import { api } from '~~>api';
import { type AppDispatch } from '~~>store';

import { getUserFailed, getUserStarted, getUserSuccess } from '../actions/user';

export const getUserById = (userId: number) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(getUserStarted());
			const response = await api.user.getUserById({
				url: '/' + userId,
			});
			dispatch(getUserSuccess(response.data ? response.data : {}));
		} catch (error) {
			dispatch(getUserFailed());
			console.error(error);
		}
	};
};
