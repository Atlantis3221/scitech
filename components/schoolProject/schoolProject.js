import React from 'react'
import {className} from "../../helpers/className";
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

/** SchoolProject
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function SchoolProject(props) {
    return <div className="schoolProjectCards">
        {props.children}
    </div>
}

/** SchoolProject_Card
 *  @param props
 *  @param props.image
 *  @param props.imageLabel
 *  @param props.onClick
 *  @param props.link
 *  @param props.children
 *  @param props.arrow
 *  @param props.time
 *  @return {any}
 */
export function SchoolProject_Card(props) {
    const { query: {lang: lang} } = useRouter()
    const { image, link, children, arrow, time, imageLabel} = props

    return <Link href={`/${lang}${link}`}>
            <a className={className('schoolProjectCard', props)}>
                <div className="schoolProjectCard_image">
                    <img src={image} alt="image" loading="lazy"/>
                    {imageLabel ? <span className="schoolProjectCard_image__labeled">{imageLabel}</span> : null}
                </div>
                <p className="description">{children}
                    {arrow ?
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
                    </svg></span> : null}
                </p>

                {time ? <p className="description_time">{time}</p> : null}
        </a>
    </Link>
}