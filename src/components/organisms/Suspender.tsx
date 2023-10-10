import { useAtom } from 'jotai'
import { FC, Suspense, lazy } from 'react'
import { Loading } from '~/components/organisms/Loading'
import { selectedOrderAtom } from '~/contexts/selectedOrderAtom'

type SuspenderPropsType = {
	pageName: string
}

export const Suspender: FC<SuspenderPropsType> = props => {
	const { pageName = 'OrderList' } = props

	const LazyComponent = lazy(() => import(`../pages/${pageName}.tsx`))

	useAtom(selectedOrderAtom)

	return (
		<div>
			<Suspense fallback={<Loading />}>
				<LazyComponent />
			</Suspense>
		</div>
	)
}

Suspender.displayName = 'Suspender'
