import React from 'react'

export function Page(props) {
	const { children } = props
	return <React.Fragment>
		{children}
	</React.Fragment>
}