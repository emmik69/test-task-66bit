import { type AxiosRequestConfig } from 'axios';

import { makeRequest } from '~~>shared/api';

const URL = 'Employee';

const getEmployees = (config: AxiosRequestConfig) =>
	makeRequest({ ...config, method: 'GET', url: URL });

export { getEmployees };
