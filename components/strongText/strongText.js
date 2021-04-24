import React from 'react'

import './strongText.less'

export const StrongText = (props) => {
    const { children } = props
    return <span className="strongText">{children}</span>
}