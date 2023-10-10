import { createApiClient } from '~/helpers/service'
import { GetOrderParamsType } from '~/interfaces'

const { VITE_PARCEL_LAB_API } = import.meta.env

if (!VITE_PARCEL_LAB_API) {
	throw new Error('Please copy .env.example to .env.local')
}

const PARCEL_API_CLIENT = createApiClient(VITE_PARCEL_LAB_API)

export const getOrder = (params: GetOrderParamsType) =>
	PARCEL_API_CLIENT.get({
		endpoint: `orders/${params.orderNumber}`,
		params: {
			zip: params.zipCode,
		},
	})
