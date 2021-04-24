import React, { useState } from 'react'

export const RadioGroup = props => {
	const { onChange, value = 1, options, name } = props
	const [isChecked, setIsChecked] = useState(value)
	return (
		<div className='radioButtons_container'>
			{options.map((option, i) => {
				const { value, title } = option
				return (
					<label className='radio_label' key={`radio_${i}`}>
						{title}
						<input
							type='radio'
							checked={isChecked === value ? true : false}
							name={name}
							value={value}
							onChange={e => {
								setIsChecked(value)
								onChange && onChange(e)
							}}
						/>
						<span className='checkmark' />
					</label>
				)
			})}
		</div>
	)
}
