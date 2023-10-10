import { createBrowserRouter } from 'react-router-dom'

import Login from '~/components/pages/Login'
import { Suspender } from '~/components/organisms/Suspender'
import { RouteType } from '~/interfaces'
import ErrorPage from '~/components/templates/ErrorPage'

const ROUTES: RouteType[] = [
	{
		name: 'login',
		path: '/',
		element: <Login />,
	},
	{
		name: 'order-details',
		path: '/order-details',
		element: <Suspender pageName='OrderDetails' />,
	},
	{
		name: 'error',
		path: '*',
		element: <ErrorPage />,
	},
]

export const Router = createBrowserRouter(ROUTES)
