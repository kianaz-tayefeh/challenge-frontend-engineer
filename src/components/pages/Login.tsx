import { useState, useEffect, useCallback } from 'react'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import logo from '/images/logo.png'
import { LOGIN_SCHEMA } from '~/configs/schema'
import { selectedOrderAtom } from '~/contexts/selectedOrderAtom'
import { useGetOrder } from '~/hooks/useGetOrder'
import { Button } from '~/components/organisms/Button'
import { FormDataType } from '~/interfaces'
import { ControllerInput } from '~/components/organisms/ControllerInput'

const Login = () => {
	const navigate = useNavigate()
	const [, setSelectedOrder] = useAtom(selectedOrderAtom)
	const [formData, setFormData] = useState({
		orderNumber: '',
		zipCode: '',
	})
	const { isFetchingOrder, order, error } = useGetOrder(formData)

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataType>({
		resolver: yupResolver(LOGIN_SCHEMA),
		defaultValues: formData,
	})

	useEffect(() => {
		if (!order) return

		setSelectedOrder(order)
		navigate(`/order-details`)
	}, [order, setSelectedOrder, navigate])

	const onSubmit = useCallback((data: FormDataType) => {
		console.log(data)

		setFormData({ ...data })
	}, [])

	return (
		<div className='relative flex items-center justify-center h-screen'>
			<div className='relative rounded-xl border shadow-lg mx-auto w-full max-w-md p-10 bg-gray-50'>
				<img
					src={logo}
					alt='Logo'
					className='w-16 h-16 rounded-3xl absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8'
				/>
				<div className='text-2xl font-semibold text-center mb-6'>Track your order</div>
				<div className=' text-base text-gray-500 text-center mb-6'>
					Enter your order number and zip code combination to see the order details and shipping
					updates.
				</div>
				<form method='post' className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
					<p className='text-red-700 h-1'>{error}</p>
					<ControllerInput
						name='orderNumber'
						control={control}
						label='Order Number'
						errorMessage={errors.orderNumber?.message}
					/>
					<ControllerInput
						name='zipCode'
						control={control}
						label='Zip Code'
						errorMessage={errors.zipCode?.message}
					/>
					<Button
						type='submit'
						disabled={isFetchingOrder}
						className='w-full justify-center'
						variant='primary'
						data-cy='submit'
					>
						Track
					</Button>
				</form>
			</div>
		</div>
	)
}
export default Login
