import React from 'react'
import { newsSMI } from '../../data/newsSMI'
import { SchoolProject_Card } from '../../components/schoolProject'

export const NewsSMIWidget = props => {
  const { newsCount = newsSMI.length, _id, pageToShow = null } = props

  const getNews = (news, currentId, newsCount) => {
    let filteredNews = news
    if (currentId) {
      filteredNews = news.filter(item => item._id !== currentId)
    }
    if (pageToShow !== null) {
      return filteredNews.filter(item => {
        if(item.pagesToShow) {
          if ((item.pagesToShow).indexOf(pageToShow) !== -1) {
            return item
          }
        }
      })
    }
    return filteredNews.slice(0, newsCount).filter(item => !item.hiddenFromAllNews)
  }

  return (
    <>
      {getNews(newsSMI, _id, newsCount).map((newsItem, i) => {
        return (
          <SchoolProject_Card
            red
            arrow
            link={`/newsSMI/${newsItem._id}`}
            time={newsItem.date}
            image={newsItem.image}
            imageLabel={newsItem.imageLabel}
            key={`newsSMI_${newsItem._id}`}
          >
            {newsItem.title}
          </SchoolProject_Card>
        )
      })}
    </>
  )
}