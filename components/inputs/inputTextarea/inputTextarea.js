import React from 'react'

export function InputTextarea(props) {
	const { name, state = {}, setState = (args) =>{}, placeholder = '' } = props
	return <textarea name={name}
									 onChange={(e) => {
										 setState({
											 ...state,
											 [name]: e.target.value
										 })
									 }}
									 placeholder={placeholder}
									 rows="5"
									 style={{ padding: '1rem 0.8rem', color: '#000' }} />
}
