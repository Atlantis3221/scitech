import React from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import Translator from '../../../i18n/translator'
import { Layout } from '../../../components/layout'
import { getContentfulSchoolProjects, getDefineSchoolProject } from '../../../helpers/axios'
import { EN_LANG, RU_LANG } from '../../../lib/constants'
import { transformContentfulSchoolProject } from '../../../helpers/transformContentfulSchoolProject'
import { SpeakerCard, SpeakerCards } from '../../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../../components/schoolProject'

const ContentfulSchoolProject = ({modalForm, allProjects, current, data}) => {
  const router = useRouter()
  const { lang, project } = router.query
  
  const roadMap = data.roadMap.map(el => Object.entries(el))

  let restprojects = allProjects.filter((pr) => pr._id !== data._id)
  if (restprojects.length) {
    restprojects = restprojects.map(el => ({
      _id: el._id,
      url: el.url,
      img: el.coverImg,
      title: el.title
    }))
  }
  console.log('restprojects: ', restprojects)

  const teamPhotos = data.teamPhotos?.map((photo) => ({
    title: photo.fields.title,
    url: photo.fields.file.url
  }))

  const style = data.isForManagementSchool ? 
    {
      backgroundImage: 'url(/img/gradients/school_gradient_viol.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '120% -10%',
    } 
    : data.isForSchool ? 
    {
      backgroundImage: 'url(/img/gradients/school_gradient.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '120% -5%'
    } 
    : {}
 
  return (
      <Layout style={style} modalFormText={modalForm}>
        <Helmet>
          <meta name="description" content={data?.title} />
          <meta name="keywords" content={data?.title} />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/projectsSchool/${project}`} />
          <meta property="og:title" content={data?.title} />
          <meta property="og:description" content={data?.title} />
          <title>{data?.title}</title>
          <link rel="canonical" href={`https://scitech.ru/projectsSchool/${project}`} />
        </Helmet>

        <div className='show wrapper_hero'>
          <div className='container relative'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'> {'Проект школы научного лидерства'}
                  </p>
                  <p className='asideMarker'>{'поток 2021–2022'}</p>
                </li>
                <li className='i3_9'>
                  <h1>{data?.title}</h1>
                  <div className="mb0" style={{ marginTop: '2rem', maxWidth: '853px', width: '100%', maxHeight: '480px'}}>
                  <img loading="lazy" style={{objectFit: 'cover'}} src={data?.coverImg}
                       alt={data?.title} /></div>
                  <div className="mt_big">
                    <h4 className="raleway">Цель научного проекта:</h4>
                    <h4 dangerouslySetInnerHTML={{ __html: data?.goal }}></h4>
                    <h4 className="raleway">Генеральная идея:</h4>
                    <h4 dangerouslySetInnerHTML={{ __html: data?.generalIdea }}></h4>
                    <h4 className="raleway">Объект исследования:</h4>
                    <h4 dangerouslySetInnerHTML={{ __html: data?.researchObject }}></h4>
                    <h4 className="raleway">В результате:</h4>
                    <h4 dangerouslySetInnerHTML={{ __html: data?.inResult }}></h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show wrapper_speakers'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Критерии оценки НТП для базового сценария реализации проекта до 2024 года</p>
                </li>
                <li className='i3_9'>
                  <img loading="lazy" 
                       className="mb0"
                       style={{maxWidth: '550px', width: '100%'}}
                       src={data?.estimationImg}
                       alt={data?.estimationImg} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show wrapper_speakers'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Команда</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    {data.team.length && data.team?.map((speaker, ind) => {
                      const speakerPhoto = teamPhotos.find(photos => (speaker.name).includes(photos.title))
                      const photo = speakerPhoto ? speakerPhoto.url : null
                      return (
                        <SpeakerCard key={ind} 
                                  photo={photo}
                                  fullName={speaker.name}
                                  email={speaker?.email ?? null}
                                  phone={speaker?.tel ?? null}
                        >
                          {speaker.title}
                        </SpeakerCard>
                      )
                    })}
                  </SpeakerCards>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className='show wrapper_speakers'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Вакансии</p>
                </li>
                <li className='i3_9'>
                  
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className='show'>
                    <div className='container'>
                        <div className='content'>
                            <ul className='g3'>
                                <li className='i3_3'>
                                    <p className='asideMarker asideMarker_mt_low'>дорожная карта</p>
                                </li>
                                <li className='i3_9'>
                                    <ul className='g3'>
                                        <li className='i3_12'>
                                            <ul className='g3 border_top border_right'>
                                                {roadMap.slice(0,3).map((road, index) => {
                                                  const [date, text] = road[0]

                                                  return (
                                                    <li key={index+'road'} className='i3_4'>
                                                      <p className="raleway raleway_bold relative roarMap_title"><span className="roadMap_circle"></span>{date}</p>
                                                      <p className="raleway" dangerouslySetInnerHTML={{ __html: text.split('.').join('<br/><br/>') }}></p>
                                                    </li>)
                                                })}
                                            </ul>
                                            <ul className='g3 border_top border_left'>
                                                {roadMap.slice(3,roadMap.length).length && roadMap.slice(3,roadMap.length).map((road, index) => {
                                                  const [date, text] = road[0]

                                                  return (
                                                    <li key={index+'road'} className='i3_4'>
                                                      <p className="raleway raleway_bold relative roarMap_title"><span className="roadMap_circle"></span>{date}</p>
                                                      <p className="raleway" dangerouslySetInnerHTML={{ __html: text.split('.').join('<br/><br/>') }}></p>
                                                    </li>)
                                                })}
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Фандрайзинг</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <div className="raleway" dangerouslySetInnerHTML={{__html: data.fundraising}}></div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Публикации</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <div className="raleway" dangerouslySetInnerHTML={{__html: data.publications}}></div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Научная деятельность</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <div className="raleway" dangerouslySetInnerHTML={{__html: data.scientificStudies}}></div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Образовательная программа</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <div className="raleway" dangerouslySetInnerHTML={{__html: data.educationalProgram}}></div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Мероприятия-спутники</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <div className="raleway" dangerouslySetInnerHTML={{__html: data.asideEvents}}></div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Выступление на Международной конференции «Наука. Лидерство. Общество» (Science. Leadership. Society)</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <div className="raleway" dangerouslySetInnerHTML={{__html: data.performance}}></div>
                          <a className="raleway" href={data.performanceVideoLink.replace('/embed/', '/watch?v=')} target="_blank">
                            {'Перейти по ссылке'}</a>
                          <div className='videoContainer' style={{marginTop: '10px'}}>
                            <iframe  width="853" height="480" 
                              src={data.performanceVideoLink.replace('/watch?v=', '/embed/')} 
                              frameborder="0" 
                              webkitAllowFullScreen 
                              mozallowfullscreen 
                              allowfullscreen 
                              scrolling="no"></iframe>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Популяризация</p>
                </li>
                <li className='i3_9'>
                  <div className="raleway" dangerouslySetInnerHTML={{__html: data.popularization}}></div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>СМИ о нас</p>
                </li>
                <li className='i3_9'>
                  <SchoolProject>
                    {data.smiAboutUs.map((el, index) => {
                      return (
                        <a className={'schoolProjectCard schoolProjectCard__red'} 
                            target="_blank"
                            href={el.link} key={index+'smi'}>
                          <div className="schoolProjectCard_image">
                              <img src={"/img/newsSMI/roadMapofGrowth.png"} alt="image" loading="lazy"/>
                          </div>
                          <p className="description">{el.title}
                                <span className="description_arrow"><svg
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
                              </svg></span>
                          </p>
                          {el.time ? <p className="description_time">{el.time}</p> : null}
                        </a>
                      )
                    })}
                  </SchoolProject>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Сайт/соцсети</p>
                </li>
                <li className='i3_9'>
                  <p className="raleway" dangerouslySetInnerHTML={{__html: data.website}}></p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        {restprojects.length && <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_mt1'>другие проекты первого потока</p>
                </li>
                <li className='i3_9'>
                  <SchoolProject>
                    {restprojects.map((project, index) => (
                      <SchoolProject_Card
                        key={index}
                        image={project.coverImg}
                        link={`/projectsSchool/${project.url}`}
                      >
                        {project.title}
                      </SchoolProject_Card>
                    ))}
                  </SchoolProject>
                </li>
              </ul>
            </div>
          </div>
        </div>}
      </Layout>
  )
}

export default ContentfulSchoolProject

export async function getStaticPaths() {
  const data = await getContentfulSchoolProjects();
  const allProjects = data?.data?.map(v => transformContentfulSchoolProject(v))
  const ruPaths = allProjects?.map((project) => ({
    params: { lang: RU_LANG, project: project?._id ?? '1' }
  })) ?? []
  const enPaths = allProjects?.map((project) => ({
    params: { lang: EN_LANG, project: project?._id ?? '1' }
  })) ?? []
  return { fallback: 'blocking', paths: [] }
}

export async function getStaticProps(ctx) {
  const { project } = ctx.params
  const allProjects = await getContentfulSchoolProjects();
  const defineSchoolProject = await getDefineSchoolProject(project)
  const {current} = Translator("test", ctx.params.lang)
  return {
    props: {
      allProjects: (allProjects?.data).map(pr => transformContentfulSchoolProject(pr)),
      data: defineSchoolProject.data[0] ? transformContentfulSchoolProject(defineSchoolProject.data[0]) : {},
      modalForm: current["modalForm"],
      current: current["test"],
    },
    revalidate: 42,
  }
}