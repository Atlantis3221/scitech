import React from 'react'
import { news } from '../../data/news'
import './newsLine.less'
import Link from "next/link";

export const NewsLineWidget = props => {
  const { newsCount = news.length, _id } = props

  const getNews = (news, currentId, newsCount) => {
    let filteredNews = news.filter(item => item.isShownInNewsTopLine === true)
    if (currentId) {
      filteredNews = news.filter(item => item._id !== currentId)
    }
    return filteredNews.slice(0, newsCount)
  }

  return (
    <>
      {getNews(news, _id, newsCount).map((newsItem, i) => {
          return (
            <li className='i3_4 newsLine_linkLi' key={newsItem._id} style={{ paddingLeft: 0 }}>
              <div className='link_toEvent'>
                <Link href={`/news/${newsItem._id}`}>
                  <a className='newsLine_link'>
                    {newsItem.title}
                  </a>
                </Link>
                <div className='link_data'>{newsItem.date}</div>
              </div>
            </li>
          )
      })
      }
    </>
  )
}