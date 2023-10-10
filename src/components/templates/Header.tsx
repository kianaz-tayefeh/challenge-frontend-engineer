import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '~/components/organisms/Button'
import { LockIcon } from '~/assets/icons/LockIcon'
import logo from '/images/logo.png'
import { selectedOrderAtom } from '~/contexts/selectedOrderAtom'
import { useAtom } from 'jotai'

export const Header = () => {
	const navigate = useNavigate()
	const [, setSelectedOrder] = useAtom(selectedOrderAtom)

	const handleSignOut = useCallback(() => {
		setSelectedOrder(null)
		navigate('/')
	}, [navigate, setSelectedOrder])

	return (
		<div className='flex  justify-between'>
			<img src={logo} alt='Logo' className=' w-20 h-20 rounded-xl' />
			<div>
				<Button type='button' variant='secondary' onClick={handleSignOut} data-cy='signout'>
					<LockIcon />
					Signout
				</Button>
			</div>
		</div>
	)
}

Header.displayName = 'Header'
