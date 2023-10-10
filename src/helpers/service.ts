import axios, { AxiosError } from 'axios'

type ApiClientGetType = {
	endpoint: string
	params?: object
	options?: object
}

type ErrorResponse = {
	error: string // or the appropriate type for your error message
}

export function createApiClient(baseURL: string) {
	const axiosInstance = axios.create({ baseURL })
	axiosInstance.interceptors.response.use(null, errorHandlerInterceptor)

	const get = ({ endpoint, params, options }: ApiClientGetType) =>
		axiosInstance.get(endpoint, {
			params,
			...options,
		})

	return { get }
}

const errorHandlerInterceptor = async (error: AxiosError<ErrorResponse>) => {
	if (error?.response?.data) {
		// if error is server error return server response
		return Promise.reject(error.response.data.error)
	}

	// Return js error
	return Promise.reject(error.message)
}
