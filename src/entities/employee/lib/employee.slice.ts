import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { type IEmployee } from '~~>shared/model/types';

import { getEmployeeById as getEmployee } from '../api/employee';

enum USER_ACTIONS {
	'GET_USER_BY_ID' = 'GET_USER_BY_ID',
	'RESET_USER' = 'RESET_USER',
}

type State = {
	user: IEmployee | null;
	isLoading: boolean;
	isError: boolean;
};

const getEmployeeById = createAsyncThunk<IEmployee, number>(
	USER_ACTIONS.GET_USER_BY_ID,
	async (userId, { rejectWithValue }) => {
		try {
			const response = await getEmployee({
				url: '/' + userId,
			});
			return response.data || {};
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
const resetUser = createAction(USER_ACTIONS.RESET_USER);

const initialState: State = {
	user: null,
	isLoading: false,
	isError: false,
};

const employeeSlice = createSlice({
	name: 'employee',
	initialState: initialState,
	selectors: {
		userSelector: (state) => state.user,
		loadindSelector: (state) => state.isLoading,
	},
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getEmployeeById.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(getEmployeeById.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoading = false;
			})
			.addCase(getEmployeeById.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
		builder.addCase(resetUser, () => {
			return initialState;
		});
	},
});

export { getEmployeeById, resetUser, employeeSlice };
