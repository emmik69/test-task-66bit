import { type IEmployee } from '~~>pages/employees/Employees';

export enum USER_ACTIONS {
	'GET_USER_SUCCESS' = 'GET_USER_SUCCESS',
	'GET_USER_FAILED' = 'GET_USER_FAILED',
	'GET_USER_STARTED' = 'GET_USER_STARTED',
	'RESET_USER' = 'RESET_USER',
}

export type GetUserSuccessAction = {
	type: USER_ACTIONS.GET_USER_SUCCESS;
	payload: IEmployee;
};
export type GetUserFailedAction = { type: USER_ACTIONS.GET_USER_FAILED };
export type GetUserStartedAction = { type: USER_ACTIONS.GET_USER_STARTED };
export type ResetUserAction = { type: USER_ACTIONS.RESET_USER };

export const getUserSuccess = (payload: IEmployee): GetUserSuccessAction => {
	return {
		type: USER_ACTIONS.GET_USER_SUCCESS,
		payload: payload,
	};
};

export const getUserFailed = (): GetUserFailedAction => {
	return {
		type: USER_ACTIONS.GET_USER_FAILED,
	};
};

export const getUserStarted = (): GetUserStartedAction => {
	return {
		type: USER_ACTIONS.GET_USER_STARTED,
	};
};

export const resetUser = (): ResetUserAction => {
	return {
		type: USER_ACTIONS.RESET_USER,
	};
};
