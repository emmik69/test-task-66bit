import axios, { type AxiosError, type AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://frontend-test-api.stk8s.66bit.ru/api';

const makeRequest = (config: AxiosRequestConfig) => {
	return axios({ baseURL: BASE_URL, ...config }).catch(
		(error: AxiosError) => {
			toast.error(`Ошибка запроса, статус - ${error.status}!`, {
				toastId: 'error_request1',
			});
			return Promise.reject(error);
		}
	);
};

export { makeRequest };
