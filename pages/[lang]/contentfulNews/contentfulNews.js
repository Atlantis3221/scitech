import React, { useEffect, useState } from 'react'
import { Layout } from '../../../components/layout'
import { Helmet } from 'react-helmet'
// import { useTracker } from 'meteor/react-meteor-data'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import "../../styles/events.less"
import processEvent, {formattedDate, calculateDuration} from './processEvent'

const options = {
  renderMark: {
    [MARKS.BOLD]: text => `<b>${text}</b>`
  },
};

const convertToDate = (sec) => {
  if (sec) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    return `${new Date(sec).getDate()} ${months[new Date(sec).getMonth()]} ${new Date(sec).getFullYear()}`
  }
  return ''
}

export function ContentfulNews ({url}) {
  const [data, setData] = useState("Hello")
  // const project =  useTracker(() => clientNews.findOne({"fields.url": url}))
  const project =  {}

  // useEffect(() => {
  //  setData(processEvent(project))
  // }, [project])
  //
  // console.log(project)

  return (
   <Layout>
     <Helmet>
       <meta name="description" content='Новости Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
       <meta name="keywords" content='Новости Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
       <meta property="og:image" content="/img/appleIcon.png" />
       <meta property="og:url" content={`https://scitech.ru/news/${url}`} />
       <meta property="og:title" content='' />
       <meta property="og:description" content={project?.fields?.title} />
       <title>{project?.fields?.title}</title>
       <link rel="canonical" href={`https://scitech.ru/news/${url}`} />
     </Helmet>

       <div className='show wrapper_hero'>
         <div className='container'>
           <div className='content'>
             <ul className='g3'>
               <li className='i3_3'>
               </li>
               <li className='i3_9'>
                 <h1>{project?.fields?.title}</h1>
                 <p className="raleway raleway__grey">{convertToDate(project?.fields?.date)}</p>
               </li>
             </ul>
           </div>
         </div>
       </div>

       <div className='show'>
         <div className='container'>
           <div className='content news-padding'>
             <ul className='g3 news-flex-reverse'>
               <li className='i3_3'>
                 <a href="/news" className={`link_event link_event__toNews ${!project?.fields?.isSmi ? 'active' : ''}`}>Новости центра
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
                 <a href="/newsSMI" className={`link_event link_event__toNews ${project?.fields?.isSmi ? 'active' : ''}`}>СМИ о нас
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
               </li>
               <li className='i3_9'>
                 <ul className='g3'>
                   <li className='i3_12 mb6'>
                     <ul className='g3'>
                       <li className='i3_12'>
                         {project?.fields?.front?.fields?.file?.url
                           ? <img loading="lazy" src={project?.fields?.front?.fields?.file?.url} alt="newsPicture" style={{ marginBottom: '1rem' }} />
                           : null}

                         <div
                           className='newsText'
                           // style={{ marginTop: '-1.2rem' }}
                           dangerouslySetInnerHTML={{ __html: data }}
                         />
                       </li>
                     </ul>
                   </li>
                 </ul>
               </li>
             </ul>
           </div>
         </div>
       </div>
   </Layout>
 )
}