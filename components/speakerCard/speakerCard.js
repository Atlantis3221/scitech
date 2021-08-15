import React from 'react'
import { className } from '../../helpers/className'


import { experts } from '../../data/experts'
import Link from "next/link";
import { useRouter } from 'next/router'

/** SpeakerCards
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export const SpeakerCards = props => {
  return <div className='speakerCards'>{props.children}</div>
}

/** SpeakerCard
 *  @param props
 *  @param props.photo
 *  @param props.fb
 *  @param props.email
 *  @param props.phone
 *  @param props.linkedin
 *  @param props.fullName
 *  @param props.children
 *  @return {any}
 */

export const SpeakerCard = props => {
  const { query: {lang: lang} } = useRouter()
  const { photo, fullName, email, phone, linkedin, fb, children, position } = props
  const expert = experts.find(item => item.title === fullName)
  return (
    <div className={className('speakerCard', props)}>
      <div className='card_photo'>
        {photo ? <img src={photo} loading="lazy" alt='avatar' /> : null}
      </div>
      <div className='card_text'>
        <p className='card_title'>
            {expert ? <Link href={`/${lang}/experts/${expert._id}`}><a title={fullName}>{fullName}</a></Link> : fullName}
          {position ? `, ${position}` : ''}
        </p>
        <p className='card_about'>{children}</p>
        <div className='socials'>
          {email && (
              <a className='socials_mail' href={`mailto:${email}`}>
              .
            </a>
          )}
          {linkedin && (
              <a className='socials_linkedin' href={linkedin}>
              .
            </a>
          )}
          {fb && (
              <a className='socials_fb' href={fb}>
              .
            </a>
          )}
          {phone && (
              <a className='socials_phone' href={`tel:${phone}`}>
              .
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
