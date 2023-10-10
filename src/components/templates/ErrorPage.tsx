import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
	const navigate = useNavigate()

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='bg-white p-8 rounded shadow-md'>
				<h1 className='text-2xl font-bold text-red-600 mb-4'>Oops, something went wrong!</h1>
				<p className='text-gray-600'>
					We apologize, but it seems there was an error. Please try again later or contact our
					support team.
				</p>
				<button
					className='mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none'
					onClick={() => navigate('/')}
				>
					Reload Page
				</button>
			</div>
		</div>
	)
}

export default ErrorPage
