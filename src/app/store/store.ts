import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import { employeeSlice } from '~~>entities/employee';

const store = configureStore({
	reducer: {
		[employeeSlice.name]: employeeSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export { store };

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
