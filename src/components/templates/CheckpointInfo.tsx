import { FC } from 'react'

import { CheckPointInfoPropsType } from '~/interfaces'
import { formatISODate } from '~/helpers/utils'

export const CheckpointInfo: FC<CheckPointInfoPropsType> = ({ checkpoint }) => {
	const { status, status_details, city, event_timestamp } = checkpoint

	return (
		<div className='mt-4'>
			<p className='text-md font-semibold'>{status}</p>
			<p className='text-gray-700 text-sm'>{status_details}</p>
			<div className='flex place-content-between'>
				<p className=' text-sm text-gray-400 font-semibold'>{city}</p>
				<p className=' text-sm text-gray-400 font-semibold'>{formatISODate(event_timestamp)}</p>
			</div>
		</div>
	)
}

CheckpointInfo.displayName = 'CheckpointInfo'
