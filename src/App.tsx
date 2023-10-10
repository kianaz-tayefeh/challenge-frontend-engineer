import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Router } from '~/configs/router'
import { REACT_QUERY_CLIENT } from '~/configs/service'

export const App = () => {
	return (
		<QueryClientProvider client={REACT_QUERY_CLIENT}>
			<ToastContainer pauseOnFocusLoss={false} />
			<RouterProvider router={Router} />
		</QueryClientProvider>
	)
}
