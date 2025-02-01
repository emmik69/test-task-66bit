import { type AxiosRequestConfig } from 'axios';

import { makeRequest } from './makeRequest';

const URL = 'Employee';

export const getUsers = (config: AxiosRequestConfig) =>
	makeRequest({ ...config, method: 'GET', url: URL });

export const getUserById = (config: AxiosRequestConfig) =>
	makeRequest({ ...config, method: 'GET', url: URL + config.url });
