import { FC, HTMLProps, ReactNode } from 'react'

type CardProps = {
	children: ReactNode
} & HTMLProps<HTMLDivElement>

export const Card: FC<CardProps> = ({ children, className, ...props }) => {
	return (
		<div
			className={`flex flex-col w-[24rem] bg-white rounded-xl overflow-hidden shadow-lg max-h-[30rem] px-6 py-2 ${className}`}
			{...props}
		>
			{children}
		</div>
	)
}

Card.displayName = 'Card'
