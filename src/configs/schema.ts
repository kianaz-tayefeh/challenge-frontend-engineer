import * as yup from 'yup'

export const LOGIN_SCHEMA = yup.object().shape({
	orderNumber: yup.string().required('Order number is required'),
	zipCode: yup.string().required('Zip code is required'),
})
