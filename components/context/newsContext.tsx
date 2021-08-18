import React, { useEffect, useState } from "react"
import { getContentfulNews } from "../../helpers/axios"
import { convertContentfulNews } from "../../lib"

const NewsContext = React.createContext({
    news: [],
    newsLoading: true
})

export const NewsContextProvider = ({children}) => {
    const [news, setNews] = useState([])
    const [newsLoading, setNewsLoading] = useState(true)

    const getNews = async () => {
            const contentful = await getContentfulNews()
            if(contentful?.data) {
              const news = convertContentfulNews(contentful?.data).filter(news => news.isShownInNewsTopLine)
              const onlyThree = news.slice(0, 3)
              setNews(onlyThree)
            }
            setNewsLoading(false)
    }

    useEffect(() => {
        getNews()
    }, [])
    
    return (
        <NewsContext.Provider value={{
            news,
            newsLoading
        }}>
            {children}
        </NewsContext.Provider>
    )
}


export default NewsContext