import React, { useEffect, useState } from 'react'
import { news } from '../../data/news'
// import { useTracker } from 'meteor/react-meteor-data'
import { convertContentfulNews, convertToMilliseconds } from '../../lib'


export const NewsLineWidget = props => {
  const { newsCount = news.length, _id } = props

  const [isContentNewsLoaded, setIsContentNewsLoaded] = useState(false)
  const [allContentfulNews, setContentfulNews] = useState([])

  // const contentfulNews = useTracker(() => clientNews.find({"sys.contentType.sys.id": "news"}).fetch())
  //   .filter(news => !news?.fields?.isSmi) || []
  // // .sort((news1, news2) => convertToMilliseconds(news2?.fields?.date) - convertToMilliseconds(news1?.fields?.date)) || []
  const contentfulNews = []

  const getNews = (news, currentId, newsCount) => {
    let filteredNews = news.filter(item => item.isShownInNewsTopLine === true)
    if (currentId) {
      filteredNews = news.filter(item => item._id !== currentId)
    }
    return filteredNews.slice(0, newsCount)
  }

  useEffect(() => {
    if (!isContentNewsLoaded && contentfulNews.length) {
      setIsContentNewsLoaded(true)
      const sortedNews = contentfulNews
      const contentfulNewsMap = convertContentfulNews(sortedNews).sort((a,b) => b.date - a.date)
      setContentfulNews(contentfulNewsMap)
    }
  }, [contentfulNews])

  const allNews = convertContentfulNews(contentfulNews.sort((news1, news2) => convertToMilliseconds(news2?.fields?.date) - convertToMilliseconds(news1?.fields?.date)))

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