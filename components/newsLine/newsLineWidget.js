import React, { useEffect, useState } from 'react'
import { news } from '../../data/news'
import { convertContentfulNews } from '../../lib'


export const NewsLineWidget = props => {
  const { newsCount = news.length, _id, allContentfulNews = [] } = props
  console.log(props)
  const getNews = (news, currentId, newsCount) => {
    let filteredNews = news.filter(item => item.isShownInNewsTopLine === true)
    if (currentId) {
      filteredNews = news.filter(item => item._id !== currentId)
    }
    return filteredNews.slice(0, newsCount)
  }

  const contentfulNews = allContentfulNews.filter(news => news.fields.isShownInNewsTopLine)

  const allNews = convertContentfulNews(contentfulNews)
  // console.log(allNews)

  return (
    <>
      {allNews.map((newsItem, i) => {
        if (i > 2) {
          return
        }
        return (
          <li className='i3_4 newsLine_linkLi' key={newsItem._id} style={{ paddingLeft: 0 }}>
            <div className='link_toEvent'>
              <a href={`/${newsItem?.isContentful ? 'allNews' : 'news'}/${newsItem._id}`}
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