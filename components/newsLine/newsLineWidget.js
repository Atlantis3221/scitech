import React, { useContext, useEffect, useState } from 'react'
import { convertContentfulNews } from '../../lib'
import { getContentfulNews } from '../../helpers/axios'
import { useRouter } from 'next/dist/client/router'
import NewsContext from '../context/newsContext'


export const NewsLineWidget = () => {
  const { query: {lang: lang} } = useRouter()
  const {news} = useContext(NewsContext)

  return (
    <>
      {news.map((newsItem) => {
        return (
          <li className='i3_4 newsLine_linkLi' key={newsItem._id} style={{ paddingLeft: 0 }}>
            <div className='link_toEvent'>
              <a href={`/${lang}/${newsItem?.isSMI ? 'newsSMI' : 'news'}/${newsItem._id}`}
                 className='newsLine_link'
              >
                {newsItem.title}
              </a>
              <div className='link_data'>{newsItem.date}</div>
            </div>
          </li>
        )
      })}
    </>
  )
}
