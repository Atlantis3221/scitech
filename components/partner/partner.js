import React from 'react'
import { className } from '../../helpers/className'

import './partner.less'
import Link from "next/link";


/** Partner
 *  @param props
 *  @param props.logo
 *  @param props.name
 *  @param props.link
 *  @param props.alt
 *  @return {any}
 */
export const Partner = (props) => {
	const { logo, name, link, alt } = props
	return (
		<div className={className('partner', props)}>
			<Link href={link}>
			<a target="_blank">
				<img className="partner_logo" loading="lazy" src={logo} alt={alt}/>
			</a>
			</Link>
			<span className="partner_name">{name}</span>
		</div>
	)
}
