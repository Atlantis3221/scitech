import React from 'react'
import { news } from '../../../data/news'
import { SchoolProject_Card } from '../../../components/schoolProject'
import { useRouter } from 'next/router'

export const NewsWidget = props => {
  const { query: {lang: lang} } = useRouter()
  const { newsCount = news.length, _id } = props

  const getNews = (news, currentId, newsCount) => {
    let filteredNews = news
    if (currentId) {
      filteredNews = news.filter(item => item._id !== currentId)
    }
    return filteredNews.slice(0, newsCount)
  }

  return (
      <>
        {getNews(news, _id, newsCount).map((newsItem, i) => {
          return (
            <SchoolProject_Card
              red
              arrow
              link={`${lang}/news/${newsItem._id}`}
              time={newsItem.date}
              image={newsItem.image}
              imageLabel={newsItem.imageLabel}
              key={`news_${newsItem._id}`}
            >
              <span>{newsItem.subtitle} </span>
              {newsItem.title}
            </SchoolProject_Card>
          )
        })}
      </>
  )
}
