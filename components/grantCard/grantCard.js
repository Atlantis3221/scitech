import React from 'react'

/** GrantCard
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
export function GrantCard(props) {
  const { cardType = '', isShown, image, title = '', description = '', link = '', deadline = '', price = '' } = props
  function isShownCard() {
    if(isShown === cardType) {
      return ''
    }
    if (isShown === null) {
      return ''
    }
    return 'grantCard__hidden';
  }

  return <a className={`grantCard ${isShownCard()} `}
            title={title}
            target='_blank'
            href={link}
  >
    <div className="grant_image">
      <img src={image} alt="" />
    </div>
    <div className="grant_description">
      <p className="projectGrowthCard_title mt0">{title}</p>
      <p className="raleway m0" dangerouslySetInnerHTML={{__html: description}}></p>

      <div className="projectGrowthCard_description mt_half">
        {deadline && <p className="description_text">
          <span className="icon"><img src='/img/icons/clock.svg' alt='icon'/></span>
          {deadline}
        </p>}
        {price && <p className="description_text">
          <span className="icon"><img src='/img/icons/money.svg' alt='icon'/></span>
          {price}
        </p>}
      </div>
    </div>
  </a>
}
