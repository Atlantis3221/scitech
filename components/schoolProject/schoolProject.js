import React from 'react'
import {className} from "../../helpers/className";

import './schoolProject.less'
import Link from "next/link";

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
    const {image, onClick, link, children, arrow, time, imageLabel} = props

    return <Link href={link}>
        <a className={className("schoolProjectCard", props)} onClick={onClick}>
            <div className="schoolProjectCard_image">
                <img src={image} alt="image" loading="lazy"/>
                {imageLabel ? <span className="schoolProjectCard_image__labeled">{imageLabel}</span> : null}
            </div>
            <p className="description">{children}
                {arrow ? <span className="description_arrow"><img src="img/icons/arrow_red.svg" loading="lazy" alt="" /></span> : null}
            </p>
            {time ? <p className="description_time">{time}</p> : null}
        </a>
    </Link>
}