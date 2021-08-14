import React, { useEffect, useState } from 'react'
import { convertContentfulNews } from '../../lib'
import { getContentfulNews } from '../../helpers/axios'
import { useRouter } from 'next/dist/client/router'


export const NewsLineWidget = props => {
  const { query: {lang: lang} } = useRouter()
  const [allContentfulNews, setAllContentfulNews] = useState([])

  useEffect(async() => {
    const contentful = await getContentfulNews()
    if(contentful?.data) {
      setAllContentfulNews(convertContentfulNews(contentful?.data).filter(news => news.isShownInNewsTopLine))
    }
  }, [])

  return (
    <>
      {allContentfulNews.map((newsItem, i) => {
        if (i > 2) {
          return
        }
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
