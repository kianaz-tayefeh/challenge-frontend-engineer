import { FC, ReactNode } from 'react'
import { cls } from '~/helpers/utils'

type ButtonType = {
	children: ReactNode
	type: 'submit' | 'button'
	className?: string
	variant: 'primary' | 'secondary' | 'danger'
	onClick?: () => void
	disabled?: boolean
}

export const Button: FC<ButtonType> = ({
	children,
	type = 'button',
	variant = 'primary',
	className,
	onClick,
	disabled,
	...props
}) => {
	const classes = {
		base: 'focus:outline-none transition ease-in-out duration-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2',
		variant: {
			primary:
				'bg-blue-900 hover:bg-blue-950 focus:ring-2 focus:ring-blue-900 focus:ring-opacity-100 text-white',
			secondary:
				'bg-gray-300 hover-bg-gray-400 focus:ring-2 focus:ring-gray-300 focus:ring-opacity-100 text-gray-800 hover:text-gray-500',
			danger:
				'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
		},
	}

	return (
		<button
			type={type}
			className={cls(`${classes.base} ${classes.variant[variant]} ${className}`)}
			onClick={disabled ? undefined : onClick}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	)
}

Button.displayName = 'Button'
