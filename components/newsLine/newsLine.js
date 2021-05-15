import React from 'react'

import './newsLine.less'
import { NewsLineWidget } from './newsLineWidget'

import '../../styles/fonts.css'
import '../../styles/reset.less'
import '../../styles/sciteam.less'
import '../../styles/form.less'
import '../../styles/home.less'
import '../../styles/grid2.less'
import '../../styles/textPopup.less'
import '../../styles/variables.less'

export function NewsLine(props) {

  return <div className="container newsLine">
    <div className="newsLine_wrapper">
      <ul className='g3 newsLine_ul'>
        <li className='i3_3 newsLine_titleLi'>
          <p className='newsLine_title'>Последние новости</p>
        </li>
        <li className='i3_9'>
          <ul className='g3 newsLine_list'>
            <NewsLineWidget newsCount={3} />
          </ul>
        </li>
      </ul>
    </div>
  </div>
}