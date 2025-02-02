import { type AxiosRequestConfig } from 'axios';

import { makeRequest } from '~~>shared/api';

const URL = 'Employee';

const getEmployeeById = (config: AxiosRequestConfig) =>
	makeRequest({ ...config, method: 'GET', url: URL + config.url });

export { getEmployeeById };
