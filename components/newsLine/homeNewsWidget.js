import React from 'react'
import { news } from '../../data/news'
import Link from "next/link";

export const HomeNewsWidget = props => {
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
            <li className='i3_4' key={'homenews'+ i}>
                <div className='link_toEvent'>
                  <Link href={`/news/${newsItem._id}`}>
                  <a className='link_event'>
                    {newsItem.title}
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.79972 3.68412L1.56172 11.8591L0.14209 10.4503L8.45638 2.19965L1.33524 2.19965L1.33524 0.199646L10.7997 0.199646L11.7997 0.199646V1.19965L11.7997 10.5789H9.79972L9.79972 3.68412Z'
                        fill='#E62C2C'
                      />
                    </svg>
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