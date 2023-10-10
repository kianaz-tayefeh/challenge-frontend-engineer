export type ArticleType = {
	articleNo: string
	articleName: string
	articleImageUrl: string
	quantity: number
	price: number
}

export type CheckPointInfoPropsType = {
	checkpoint: CheckPointType
}

export type ArticleInfoPropsType = {
	article: ArticleType
}

export type DeliveryInfoType = {
	articles: ArticleType[]
	orderNo: string
	order_date: string
	recipient: string
	recipient_notification: string
	email: string
	street: string
	city: string
	region: string
	timezone: string
	announced_delivery_date: string
}

export type CheckPointType = {
	status_details: string
	meta: {
		delivery_date: string
		delivery_time_frame_from: string
		delivery_time_frame_to: string
	}
	event_timestamp: string
	status: string
	country_iso3: string
	city: string
}

export type OrderType = {
	_id: string
	courier: string
	tracking_number: string
	created: string
	updated: string
	checkpoints: CheckPointType[]
	delivery_info: DeliveryInfoType
	destination_country_iso3: string
	zip_code: string
}

export type RouteType = {
	name: string
	path: string
	element: React.ReactElement
}

export type GetOrderParamsType = {
	orderNumber: string
	zipCode: string
}

export type FormDataType = {
	orderNumber: string
	zipCode: string
}

export const initialOrder = {
	_id: '',
	courier: '',
	tracking_number: '',
	created: '',
	updated: '',
	checkpoints: [],
	delivery_info: {
		articles: [],
		orderNo: '',
		order_date: '',
		recipient: '',
		recipient_notification: '',
		email: '',
		street: '',
		city: '',
		region: '',
		timezone: '',
		announced_delivery_date: '',
	},
	destination_country_iso3: '',
	zip_code: '',
}
