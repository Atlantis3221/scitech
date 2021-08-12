import React, { useEffect, useState } from 'react'
import { SchoolProject, SchoolProject_Card } from '../../components/schoolProject'
// import { useTracker } from 'meteor/react-meteor-data'
import { convertToDate, convertToMilliseconds } from '../../lib'


export const ContentfulNewsWidget = props => {
  const {isSMI, pageToShow = null} = props

  const [isContentNewsLoaded, setIsContentNewsLoaded] = useState(false)
  const [allContentfulNews, setContentfulNews] = useState([])

  // let contentfulNews = useTracker(() => clientNews.find({"sys.contentType.sys.id": "news"}).fetch())
  //   .filter(news => isSMI === news?.fields?.isSmi)
  //   .filter(item => !item.hiddenFromAllNews)
  //   .sort((news1, news2) => convertToMilliseconds(news2?.fields?.date) - convertToMilliseconds(news1?.fields?.date)) || []
  let contentfulNews = []

  if (pageToShow !== null) {
    contentfulNews = contentfulNews.filter(item => {
      if(item.pagesToShow) {
        if ((item.pagesToShow).indexOf(pageToShow) !== -1) {
          return item
        }
      }
    })
  }

  useEffect(() => {
    if (!isContentNewsLoaded && contentfulNews.length) {
      setIsContentNewsLoaded(true)
      setContentfulNews(contentfulNews)
    }
  }, [contentfulNews])

  console.log(allContentfulNews)

  return (
     <>
        {Boolean(allContentfulNews.length) && allContentfulNews.map((newsItem, i) => {
          return (
            <SchoolProject_Card
              red
              arrow
              link={`/${!isSMI ? 'allNews': 'allSMINews'}/${newsItem?.fields?.url}`}
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
