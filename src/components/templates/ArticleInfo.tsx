import { FC } from 'react'

import { ArticleInfoPropsType } from '~/interfaces'

export const ArticleInfo: FC<ArticleInfoPropsType> = ({ article }) => {
	const { articleImageUrl, articleName, articleNo, price } = article

	return (
		<div className='flex justify-content-between gap-5 my-4'>
			<img src={articleImageUrl} alt={articleName} className=' w-14 h-14 rounded-lg' />
			<div className='flex flex-col ml-0'>
				<p className='font-semibold'>{articleName}</p>
				<p>Article number {articleNo}</p>
				<p className='text-gray-700 font-semibold'>{price}</p>
			</div>
		</div>
	)
}

ArticleInfo.displayName = 'ArticleInfo'
