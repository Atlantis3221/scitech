import React, { useState } from 'react'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export function InputText(props) {
  const { name, value, onChange, placeholder = '', required, phoneNumber } = props

  return (
    <>
      {false ?
        <PhoneInput
          value={value}
          international
          defaultCountry="RU"
          onChange={onChange}
          name={name}
          required={required}
        />
        :
        <input type='text'
               name={name}
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               required={required}
        /> }
    </>
  )
}
