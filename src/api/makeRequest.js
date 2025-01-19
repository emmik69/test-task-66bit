import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://frontend-test-api.stk8s.66bit.ru/api';

export const makeRequest = (config) => {
	return axios({ baseURL: BASE_URL, ...config }).catch((error) => {
		toast.error(`Ошибка запроса, статус - ${error.status}!`, {
			toastId: 'error_request1',
		});
		return Promise.reject(error);
	});
};
