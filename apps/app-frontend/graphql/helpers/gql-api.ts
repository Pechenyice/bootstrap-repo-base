import type { AxiosResponse } from 'axios';
import axios from 'axios';

interface DocumentType {
	query: string;
}
interface DataType<T> {
	data?: T;
}

// TODO: dynamic config.backendUrl if typeof window === 'undefined'
// https://github.com/vercel/next.js/issues/42065
// TODO: redirect from frontend port to backend port if typeof window !== 'undefined'
const baseURI = typeof window !== 'undefined' ? 'http://localhost:8000/graphql' : 'http://localhost:8000/graphql';

export const gqlBaseApi = axios.create({
	baseURL: baseURI,
	timeout: 120000,
	timeoutErrorMessage: 'Request takes more than 120 seconds'
});

export const gqlClient = async <R = any, D = any>(
	data?: { variables?: D } & DocumentType,
	cookie?: string
): Promise<R | undefined> => {
	const headers = cookie ? { cookie } : undefined;
	const result = await gqlBaseApi.request<DataType<R>, AxiosResponse<DataType<R>>, { variables?: D }>({
		method: 'post',
		data,
		headers
	});

	return result.data.data;
};

export const requestWrapper =
	<T, V>(document: string, variables?: V, options?: { cookie?: string }) =>
	(): Promise<T | undefined> => {
		const cookie = options?.cookie;
		return gqlClient({ query: document, variables }, cookie);
	};
