import { USER_ACTIONS } from 'store/actions/user';

const initialState = {
	user: {},
	isLoading: false,
	isError: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_ACTIONS.GET_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				isLoading: false,
				isError: false,
			};

		case USER_ACTIONS.GET_USER_FAILED:
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		case USER_ACTIONS.GET_USER_STARTED:
			return {
				...state,
				isLoading: true,
				isError: false,
			};

		case USER_ACTIONS.RESET_USER:
			return {
				...initialState,
			};

		default:
			return { ...state };
	}
};

export default userReducer;
