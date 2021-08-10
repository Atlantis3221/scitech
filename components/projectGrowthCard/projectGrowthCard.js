import React, { useEffect, useState } from 'react'

import Link from "next/link";

/** ProjectGrowthCardContainer
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function ProjectGrowthCardContainer(props) {
  const [isNothingFound, setIsNothingFound] = useState(false)

  useEffect(() => {
    const projectGrowthCardContainer = document.querySelector('.projectGrowthCardContainer').childNodes
    const length = projectGrowthCardContainer.length
    let hiddenElementsCount = 0;
    projectGrowthCardContainer.forEach(el => {
      if(el.classList.contains('projectGrowthCard__hidden')) hiddenElementsCount++
    })
    if(length === hiddenElementsCount) setIsNothingFound(true)
  })

    return <div className="projectGrowthCardContainer">
        {isNothingFound ? <p className="nothingIsFound">Похоже, ничего не найдено, попробуйте убрать фильтры.</p> : props.children}
    </div>
}

/** ProjectGrowthCard
 *  @param props
 *  @param props.cardType
 *  @param props.image
 *  @param props.name - string, divided by coma sign
 *  @param props.title
 *  @param props.titleDescription
 *  @param props.link
 *  @param props.deadline
 *  @param props.projectDate
 *  @param props.location
 *  @param props.price
 *  @return {any}
 */
export function ProjectGrowthCard(props) {
    const { cardType, isShown, image, name, title, titleDescription, link, deadline, projectDate, location, price } = props

    function isShownCard() {
      if(isShown[0] !== null && (isShown[1] === null || isShown[1] === 'all')) {
        return isShown[0] === cardType[0] ? '' : 'projectGrowthCard__hidden';
      }
      if (isShown[0] === null && isShown[1] !== null && isShown[1] !== 'all') {
        return isShown[1] === cardType[1] ? '' : 'projectGrowthCard__hidden';
      }
      if (isShown[0] === null && (isShown[1] === null || isShown[1] === 'all')) {
        return '';
      }
      return isShown[0] === cardType[0] && isShown[1] === cardType[1] ? '' : 'projectGrowthCard__hidden';
    }

    return <Link href={link}>
            <a className={`projectGrowthCard ${isShownCard()} `} title={title}>
            <div className="projectGrowthCard_image">
                <img src={image} alt="" />
            </div>
            <div className="projectGrowthCard_name_container">
              {name && name.split(',')
                  .map(el => <p key={Math.random()} className="projectGrowthCard_name">{el}</p>)
              }
            </div>

            <p className="projectGrowthCard_title">{title}</p>
            <p className="projectGrowthCard_title projectGrowthCard_title_description">
              {titleDescription && titleDescription}</p>
            <div className="projectGrowthCard_description">
                {deadline && <p className="description_text">
                    <span className="icon"><img src='/img/icons/clock.svg' alt='icon'/></span>
                    {deadline}
                </p>}
                {projectDate && <p className="description_text">
                    <span className="icon"><img src='/img/icons/calendar.svg' alt='icon'/></span>
                    {projectDate}
                </p>}
                {location && <p className="description_text">
                    <span className="icon"><img src='/img/icons/location.svg' alt='icon'/></span>
                    {location}
                </p>}
                {price && <p className="description_text">
                    <span className="icon"><img src='/img/icons/money.svg' alt='icon'/></span>
                    {price}
                </p>}
            </div>
        </a>
    </Link>
}
