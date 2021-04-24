import React from 'react'
import _ from 'underscore'
import './inputCheckbox.less'
import Link from 'next/link'

export function InputCheckbox(props) {
  const { name, value, options = {}, required, onChange = () => {}, linkToPolicy, description = 'description' } = props
  const valueBoolean = _.isBoolean(value) ? value : false
  const patchOnChangeAndForward = e => {
    onChange({
      target: {
        name,
        value: e.target.checked,
      },
    })
  }
  return (
    <div className='checkbox_container'>
      <input
        className='checkbox'
        type='checkbox'
        required={required}
        name={name}
        value='1'
        checked={valueBoolean}
        onChange={patchOnChangeAndForward}
      />
      <div className='checkbox_description'>{description}<Link href={'/policy'}><a className="input_linkToPolicy">{linkToPolicy}</a></Link></div>
    </div>
  )
}

InputCheckbox.emptyValue = false
