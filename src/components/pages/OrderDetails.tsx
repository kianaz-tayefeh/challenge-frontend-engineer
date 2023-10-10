import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'

import { selectedOrderAtom } from '~/contexts/selectedOrderAtom'
import { ArticleType, CheckPointType } from '~/interfaces'
import { Header } from '~/components/templates/Header'
import { ArticleInfo } from '~/components/templates/ArticleInfo'
import { CheckpointInfo } from '~/components/templates/CheckpointInfo'
import { Card } from '~/components/organisms/Card'
import { Button } from '~/components/organisms/Button'
import { Progress } from '~/components/organisms/Progress'
import { Map } from '~/components/organisms/Map'

const OrderDetails = () => {
	const navigate = useNavigate()
	const [order] = useAtom(selectedOrderAtom)

	useEffect(() => {
		if (order) return

		navigate('/')
	}, [order, navigate])

	const [showMore, setShowMore] = useState(false)

	const initialVisibleCheckpoints = 3
	const visibleCheckpoints = showMore
		? order?.checkpoints
		: order?.checkpoints.slice(0, initialVisibleCheckpoints)

	return (
		<div className='flex flex-col m-8 gap-16'>
			<Header />
			<div className='flex gap-x-10'>
				<Card className='px-0 pb-0'>
					<div className='text-3xl font-bold text-gray-800 my-3 px-6'>
						{order?.checkpoints[0].status}
					</div>
					<p className='text-xl font-bold text-gray-800 mb-4 px-6'>
						{order?.checkpoints[0].status_details}
					</p>
					<Map />

					<Button type='button' variant='primary' className='w-full justify-center rounded-none'>
						Get directions
					</Button>
				</Card>
				<Card>
					<div className='text-xl font-semibold text-gray-700 my-3'>Shipping updates</div>
					<Progress value={45} />
					<div className=' overflow-y-auto'>
						{visibleCheckpoints?.map((checkpoint: CheckPointType, index: number) => (
							<CheckpointInfo key={index} checkpoint={checkpoint} />
						))}
					</div>
					{order?.checkpoints && order?.checkpoints.length > initialVisibleCheckpoints && (
						<button
							type='button'
							className='text-sm text-gray-400 mb-6'
							onClick={() => setShowMore(!showMore)}
						>
							{showMore ? 'Less' : 'More'}
						</button>
					)}
				</Card>
				<Card>
					<p className='text-xl font-semibold text-gray-700 my-3'>Articles</p>
					{order?.delivery_info.articles.map((article: ArticleType) => (
						<ArticleInfo key={article.articleNo} article={article} />
					))}
				</Card>
			</div>
		</div>
	)
}

export default OrderDetails
