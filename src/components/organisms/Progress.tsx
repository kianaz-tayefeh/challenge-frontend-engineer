import { FC } from 'react'

type ProgressProps = {
	value: number
}

export const Progress: FC<ProgressProps> = ({ value }) => {
	return (
		<div>
			<div className='w-full bg-gray-200 rounded-full h-2.5'>
				<div className='bg-blue-900 h-2.5 rounded-full' style={{ width: `${value}%` }}></div>
			</div>
			<div className='flex place-content-between mt-3'>
				<p className=' text-sm text-gray-300 font-semibold'>processed</p>
				<p className=' text-sm text-gray-300 font-semibold'>delivered</p>
			</div>
		</div>
	)
}

Progress.displayName = 'Progress'
