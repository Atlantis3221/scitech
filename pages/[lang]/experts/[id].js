import React from 'react'
import { Layout } from '../../../components/layout'
import { experts } from '../../../data/experts'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

const Experts = props => {
  const router = useRouter()
  const { id } = router.query

  const data = experts.findById(id)
  console.log(data)
  return (
    <Layout style={{
      backgroundImage: 'url(/img/gradients/gradient_main.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '100% 0%'
    }}>
      <Helmet>
        <meta name="description" content={data?.metaDescription} />
        <meta name="keywords" content={data?.title} />
        <meta property="og:image" content="/img/appleIcon.png" />
        <meta property="og:url" content={`https://scitech.ru/experts/${data?._id}`} />
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.metaDescription} />
        <title>{data?.title}</title>
        <link rel="canonical" href={`https://scitech.ru/experts/${data?._id}`} />
      </Helmet>

      <div className='show wrapper_about'>
        <div className='container'>
          <div className='content'>
            <div className='section_container'>
              <aside className='section_aside' />
              <div className='section_content'>
                <div className='expertsHeader_container'>
                  <div className='expertsHeader_logoContainer'>
                    <img loading="lazy" src={data?.logo} alt='Expert logo' />
                  </div>
                  <div className='expertsHeader_descriptionContainer'>
                    <h2 className='expertsHeader_title'>{data?.title}</h2>
                    <div className='expertsHeader_description'>
                      {data?.email && (
                        <a className='expertsHeader_email' href={`mailto:${data?.email}`}>
                          {data?.email}
                          <svg
                            width='12'
                            height='13'
                            viewBox='0 0 12 13'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M9.79962 4.18412L1.56162 12.3591L0.141983 10.9503L8.45627 2.69965L1.33513 2.69965L1.33513 0.699646L10.7996 0.699646L11.7996 0.699646V1.69965L11.7996 11.0789H9.79962L9.79962 4.18412Z'
                              fill='#E62C2C'
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className='expertsContent expertsContent_container'
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Experts
