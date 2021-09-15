import { IEmployers } from "../../../../@types/generated/contentful"
import { Layout } from "../../../../components/layout"
import { IShortVacancy } from "../../../../domain/vacancies/types"
import VacancyCard from "../../../../domain/vacancies/ui/VacancyCard"
import backendService, { BackRequest } from "../../../../helpers/backendService"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useState } from "react"


interface PageProps {
    employer: IEmployers
    employerVacancies: IShortVacancy[]
}

const EmployerPage = ({employer, employerVacancies}:PageProps) => {
    
    const [clamped, setClamped] = useState(true)
    return (
        <Layout>
        <div className={`grid md:grid-cols-4  h-full gap-x-5 md:px-12 px-5 font-raleway`}>
            <div className={`px-2 mb-10`}>
                <div className={`h-40 w-full mb-5`}>
                    <img className={``} src={"https://" + employer.fields.image.fields.file.url} alt="" />
                </div>
                <div>
                    <a className={`font-bold mb-2`} href="">
                    {employer.fields.name}
                    </a>
                    <div className={"mt-2"}>
                        {employer.fields.address}
                    </div>
                    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(employer.fields.description)}} className={`mt-2 ${clamped && "line-clamp-6"}`}>
                    </div>
                   {clamped && <div onClick={() => {setClamped(false)}} className={`mt-3 underline cursor-pointer`}>
                        Подробнее...
                    </div>}
                </div>
            </div>
            <div className={`col-span-3 mb-20`}>
                <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5 mt-8`}>
                    {employerVacancies.map(v => (
                            <div>
                                <VacancyCard {...v}/>
                    </div>))}
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default EmployerPage

export async function getStaticPaths() {
    
    return { fallback: 'blocking',
      paths: []
    }
  }
  
  export async function getStaticProps(ctx) {
    const employerVacancies: IShortVacancy[] = await (await backendService.getVacancies().find("fields.employer.fields.url", ctx.params.employer).exec()).data
    const employer: IEmployers = await (await backendService.getEmployers().find("fields.url", ctx.params.employer).exec()).data[0]
    return {
      props: {employer, employerVacancies},
      revalidate: 42,
    }
  }