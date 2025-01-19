import { makeRequest } from './makeRequest';

const URL = 'Employee';

export const getUsers = (config) =>
	makeRequest({ ...config, method: 'GET', url: URL });

export const getUserById = (config) =>
	makeRequest({ ...config, method: 'GET', url: URL + config.url });
