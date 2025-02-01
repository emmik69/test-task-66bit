export const USER_ACTIONS = {
	GET_USER_SUCCESS: 'GET_USER_SUCCESS',
	GET_USER_FAILED: 'GET_USER_FAILED',
	GET_USER_STARTED: 'GET_USER_STARTED',
	RESET_USER: 'RESET_USER',
};

export const getUserSuccess = (payload) => {
	return {
		type: USER_ACTIONS.GET_USER_SUCCESS,
		payload: payload,
	};
};

export const getUserFailed = () => {
	return {
		type: USER_ACTIONS.GET_USER_FAILED,
	};
};

export const getUserStarted = () => {
	return {
		type: USER_ACTIONS.GET_USER_STARTED,
	};
};

export const resetUser = () => {
	return {
		type: USER_ACTIONS.RESET_USER,
	};
};
