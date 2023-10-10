import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { GetOrderParamsType } from '~/interfaces'
import { getOrder } from '~/services/apis'

export const useGetOrder = (params: GetOrderParamsType) => {
	const {
		data: order,
		isFetching: isFetchingOrder,
		error,
	} = useQuery({
		queryKey: ['orders', params],
		queryFn: async () => {
			if (!params.orderNumber || !params.zipCode) return null
			const { data } = await getOrder(params)

			return data.order
		},
		placeholderData: null,
		onError: (error: string) => {
			toast.error(error)
		},
	})

	return {
		order,
		isFetchingOrder,
		error,
	}
}
