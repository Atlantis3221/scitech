import React, { useEffect, useState } from 'react'
import { convertContentfulNews } from '../../lib'
import { getContentfulNews } from '../../helpers/axios'


export const NewsLineWidget = ({ lang }) => {
  const [allContentfulNews, setAllContentfulNews] = useState([])

  useEffect(async() => {
    const contentful = await getContentfulNews()
    if(contentful?.data) {
      const news = convertContentfulNews(contentful?.data).filter(news => news.isShownInNewsTopLine)
      const onlyThree = news.slice(0, 3)
      setAllContentfulNews(onlyThree)
    }
  }, [])

  return (
    <>
      {allContentfulNews.map((newsItem) => {
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
