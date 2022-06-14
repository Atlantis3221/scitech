import { title } from 'process'
import React from 'react'
import { Helmet } from 'react-helmet'

const PageHelmet = (headInfo) => {
  return (
    <Helmet>
      <meta name='description' content={headInfo.description} />
      <meta name='keywords' content={headInfo.keyword} />
      <meta property='og:image' content='/img/appleIcon.png' />
      <meta property='og:url' content={headInfo.link} />
      <meta property='og:title' content={headInfo.title} />
      <meta property='og:description' content={headInfo.description} />
      <title>{headInfo.title}</title>
      <link rel='canonical' href={headInfo.link} />
    </Helmet>
  )
}

export default PageHelmet