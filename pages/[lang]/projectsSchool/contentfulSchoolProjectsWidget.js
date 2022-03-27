import React, {useState, useEffect} from 'react'
import { SchoolProject_Card } from '../../../components/schoolProject'
import { useRouter } from 'next/router'

 const ContentfulSchoolProjectsWidget = props => {
  const { query: {lang: lang} } = useRouter()
  const { allContentfulProjects = [], isForSchool = false} = props

  const [isContentProjectsLoaded, setIsContentProjectsLoaded] = useState(false)
  const [allContentfulSchoolProjects, setAllContentfulSchoolProjects] = useState([])

  useEffect(() => {
    if (!isContentProjectsLoaded && allContentfulProjects.length) {
      setIsContentProjectsLoaded(true)
      let projects = allContentfulProjects
  
      if (isForSchool) {
        projects = allContentfulProjects.filter((pr) => pr?.fields?.isForSchool)
      } else {
        projects = allContentfulProjects.filter((pr) => pr?.fields?.isForManagementSchool)
      }
      setAllContentfulSchoolProjects(projects)
    }
  }, [allContentfulProjects])

  return (
     <>
        {Boolean(allContentfulSchoolProjects.length) && allContentfulSchoolProjects.map((item, index) => {
          return (
            <SchoolProject_Card
              key={item._id}
              image={item.fields?.coverImg.fields.file.url}
              link={`/projectsSchool/${item?.fields?.url}`}
            >
              {item?.fields?.title}
            </SchoolProject_Card>
          )
        })}
      </>
  )
}

export default ContentfulSchoolProjectsWidget