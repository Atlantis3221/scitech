import _ from 'underscore'
import * as keywords from './keywords'


export const toCamelCase = str => str
	.split('_')
	.map(str => str[0].toLowerCase() + str.substr(1))
	.join('_')

const modifications = Object.values(keywords)

const modificationsMap = modifications.reduce(
	(acc, cur) => acc[cur] = true && acc,
	{},
)

const getBlockClassName = (Com, props) => {

	const className = [toCamelCase(Com.name)]
	const keys = Object.keys(props)
	const defaultProps = { className }

	for (let key of keys) {
		if (_.isBoolean(props[key])) {
			if (!modificationsMap[key])
				console.warn(`unknown modification "${key}" of ${Com.name}`)

			defaultProps
				.className
				.push(`${className[0]}__${key}`)
		}
	}

	return defaultProps
		.className
		.join(' ')

}

export const $props = (Com, props) => {
	const tools = {
		...props,
		$: function(element) {
			return element
				? { className: `${toCamelCase(Com.name)}_${element} ${props.className || ''}`.trim() }
				: { className: `${getBlockClassName(Com, props)} ${props.className || ''}`.trim() }
		},
	}
	tools.$.prototype.toString = 'x'
	return tools
}

