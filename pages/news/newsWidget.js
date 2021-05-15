import React from 'react'
import { news } from '../../data/news'
import { SchoolProject, SchoolProject_Card } from '../../components/schoolProject'

export const NewsWidget = props => {
  const { newsCount = news.length, _id } = props

  const getNews = (news, currentId, newsCount) => {
    let filteredNews = news
    if (currentId) {
      filteredNews = news.filter(item => item._id !== currentId)
    }
    return filteredNews.slice(0, newsCount)
  }

  return (
    <div className='newsCards_container'>
      <SchoolProject>
        {getNews(news, _id, newsCount).map((newsItem, i) => {
          return (
            <SchoolProject_Card
              red
              arrow
              link={`/news/${newsItem._id}`}
              time={newsItem.date}
              image={newsItem.image}
              imageLabel={newsItem.imageLabel}
              key={`news_${newsItem._id}`}
            >
              {newsItem.title}
            </SchoolProject_Card>
          )
        })}
      </SchoolProject>
    </div>
  )
}