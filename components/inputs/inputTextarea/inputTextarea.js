import React from 'react'
// import { mockFn } from '../../lib/mockFn'

export function InputTextarea(props) {
	const { name, value = '', onChange, placeholder = '' } = props
	return <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} />
}
