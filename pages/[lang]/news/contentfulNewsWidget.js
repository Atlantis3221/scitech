import React from 'react'
import { SchoolProject_Card } from '../../../components/schoolProject'
import { convertToDate } from '../../../lib'
import { useRouter } from 'next/router'

 const ContentfulNewsWidget = props => {
  const { query: {lang: lang} } = useRouter()
  const {isSMI, pageToShow = null, allContentfulNews = []} = props
  let allNews = []

  if (isSMI !== undefined) {
    allNews = allContentfulNews?.filter(news => {
      return news?.fields.isSmi === isSMI
    });
  }

  if (pageToShow !== null) {
    allNews = allContentfulNews.filter(item => {
      if(item.pagesToShow) {
        if ((item.pagesToShow).indexOf(pageToShow) !== -1) {
          return item
        }
      }
    })
  }

  return (
     <>
        {Boolean(allNews.length) && allNews.map((newsItem, i) => {
          return (
            <SchoolProject_Card
              red
              arrow
              link={`/${!isSMI ? 'news': 'newsSMI'}/${newsItem?.fields?.url}`}
              time={convertToDate(newsItem?.fields?.date)}
              image={newsItem?.fields?.front?.fields?.file?.url}
              imageLabel={newsItem?.isAddImageLabel}
              key={`news_${newsItem._id}`}
            >
              {newsItem?.fields?.title}
            </SchoolProject_Card>
          )
        })}
      </>
  )
}

export default ContentfulNewsWidget