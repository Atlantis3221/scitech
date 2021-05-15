import React, { useState } from 'react'
import './inputSelect.less'
import { mockFnNull } from '../../../lib'

const Option = ({ title, _id }) => <option value={_id}>{title}</option>

export function InputSelect(props) {
	const { name = '', value = '', options = [], onChange = mockFnNull} = props

	const [applicationTypeSelected, setApplicationTypeSelected] = useState('individual-select')
	const membersNumber = [
		{title:'5', _id: 'collective-number-select5', value: '5'},
		{title:'6', _id: 'collective-number-select6', value: '6'},
		{title:'7', _id: 'collective-number-select7', value: '7'},
		{title:'8', _id: 'collective-number-select8', value: '8'}
	]
	const chooseNumberOfMembers = (e) => {
		setApplicationTypeSelected(e.currentTarget.value)
	}

	const propsContainer = {
		className: '',
		name,
		value,
		onChange,
	}
	return name === 'applicationType' ?
		<>
			<select {...propsContainer} value={applicationTypeSelected} onChange={chooseNumberOfMembers}>{options.$map(Option)}</select>
			{applicationTypeSelected !== 'individual-select' ? <select className="membersNumberSelect">{membersNumber.$map(Option)}</select> : null}
		</>
		: <select {...propsContainer}>{options.map(Option)}</select>;
}
