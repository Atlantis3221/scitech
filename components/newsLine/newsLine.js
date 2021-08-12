import React from 'react'


import { NewsLineWidget } from './newsLineWidget'



export function NewsLine(props) {
  return <div className="container newsLine">
    <div className="newsLine_wrapper">
      <ul className='g3 newsLine_ul'>
        <li className='i3_3 newsLine_titleLi'>
          <p className='newsLine_title'>Последние новости</p>
        </li>
        <li className='i3_9'>
          <ul
            style={{
              minHeight: "10rem"
            }}
            className='g3 newsLine_list'>
            <NewsLineWidget newsCount={3} />
          </ul>
        </li>
      </ul>
    </div>
  </div>
}