import { FC } from 'react'
import { Control, Controller, Path } from 'react-hook-form'
import { FormDataType } from '~/interfaces'

export type ControllerInputPropsType = {
	name: Path<FormDataType>
	control: Control<FormDataType>
	label: string
	type?: string
	errorMessage: string | undefined
}

export const ControllerInput: FC<ControllerInputPropsType> = props => {
	const { name, control, label, type = 'text', errorMessage, ...rest } = props
	return (
		<div className=''>
			<label htmlFor={name} className='block text-sm font-semibold mb-2'>
				{label}
			</label>
			<Controller
				control={control}
				name={name}
				render={({ field, fieldState: { error } }) => (
					<input
						data-cy={name}
						id='zipCode'
						type={type}
						autoComplete={`current-${name}`}
						aria-invalid={error?.message ? true : undefined}
						aria-describedby={`${name}-error`}
						className='w-full rounded border border-gray-500 px-2 py-1 text-lg'
						{...field}
						{...rest}
					/>
				)}
			/>
			<div className='text-red-700 h-7'>{errorMessage}</div>
		</div>
	)
}

ControllerInput.displayName = 'ControllerInput'
