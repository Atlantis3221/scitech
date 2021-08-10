import React from 'react'
import { className } from '../../helpers/className'

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
				<a target="_blank" href={link}>
					<img className="partner_logo" loading="lazy" src={logo} alt={alt}/>
				</a>
			<span className="partner_name">{name}</span>
		</div>
	)
}
