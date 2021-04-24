import React from 'react'

import './submenu.less'

export const Submenu = props => {
  const { children, isShown, opened } = props
  return <div
    className={`submenu_container ${isShown ? 'submenu_container__isShown' : ''} ${opened ? 'opened' : ''}`}
  >
    {children}
  </div>
}
