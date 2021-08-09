import React from 'react'
import {className} from "../../helpers/className";


/** Button
 * @param props
 * @param props.onClick
 * @param props.children
 */
export function Button(props) {

	const {onClick, children } = props
	return <button className={className('btn', props)} onClick={onClick}>
		{children}
	</button>
}