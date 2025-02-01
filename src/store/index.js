import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import userReducer from './reducers/userReducer';

const store = configureStore({
	reducer: {
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export { store };
