import React from 'react'

/** EventItem_Container
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function EventItem_Container(props) {
    return (
        <div className="eventItem_container">
          {props.children}
        </div>
    )
}

/** EventItem_guests
 *  @param props
 *  @param props.guests
 *  @param props.children
 *  @return {any}
 */
export function EventItem_guests(props) {
  const { children, guests } = props

  return (
    <>
      <span className="guest__bold">{guests}</span>
      <ol>
        {children}
      </ol>
    </>
  )
}

/** EventItem_guest
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function EventItem_guest(props) {
  return (
    <li className='guest__italic'>
       {props.children}
    </li>
  )
}

/** EventItem
 *  @param props
 *  @param props.date
 *  @param props.date_add
 *  @param props.title
 *  @param props.bottom
 *  @param props.children
 *  @return {any}
 */
export function EventItem(props) {
    const { date, date_add, title, bottom, children } = props

    return (
       <div className="eventItem">
           <p className={`eventItem_time ${bottom ? 'eventItem_time__bottom0' : ''}`}>{date}{date ? <br/> : null}{date_add}</p>
           <div className="eventItem_description">
               <p className="eventItem_title">{title}</p>
               <p className="eventItem_about">{children}</p>
           </div>
       </div>
    )
}