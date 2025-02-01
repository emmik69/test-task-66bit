import { type IEmployee } from '~~>pages/employees/Employees';

import {
	type GetUserFailedAction,
	type GetUserStartedAction,
	type GetUserSuccessAction,
	type ResetUserAction,
	USER_ACTIONS,
} from '../actions/user';

type State = {
	user: IEmployee | null;
	isLoading: boolean;
	isError: boolean;
};

type Actions =
	| GetUserSuccessAction
	| GetUserFailedAction
	| GetUserStartedAction
	| ResetUserAction;

const initialState: State = {
	user: null,
	isLoading: false,
	isError: false,
};

const userReducer = (state = initialState, action: Actions): State => {
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
