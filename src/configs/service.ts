import { QueryClient } from 'react-query'

export const REACT_QUERY_CLIENT = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			refetchOnWindowFocus: false,
			staleTime: 0,
			cacheTime: 0,
		},
	},
})
