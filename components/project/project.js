import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'

/** Project
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function Project(props) {
  const { query: {lang: lang} } = useRouter()

    return <div className="show wrapper_project">
        <div className="container">
            <div className="content">
                <ul className="g3">
                    <li className="i3_3">
                        <p className="asideMarker white">{lang === 'ru'? 'Проекты': 'Projects'}</p>
                    </li>
                    <li className="i3_9">
                        <div className="projectCards">
                            {props.children}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

/** Project_Card
 *  @param props
 *  @param props.title
 *  @param props.link
 *  @param props.durations
 *  @param props.description
 *  @param props.arrowColor
 *  @param props.isInProcess
 *  @param props.gradient
 *  @param props.gradient_spot
 *  @param props.opacity
 *  @param props.children
 *  @return {any}
 */
export function Project_Card(props) {
  const { query: {lang: lang} } = useRouter()
  const router = useRouter()
    const {title, link, durations, description, arrowColor, gradient_spot, isInProcess, gradient, opacity, children} = props

    const grad = useRef(null)
    const [bgPosition, setBgPosition] = useState(['0', '0'])
    const [isHover, setIsHover] = useState(false)

    const handleAnimation = (e) => {
      setIsHover(true)
      const container_w = grad.current.clientWidth
      const container_h = grad.current.clientHeight
      const pos_x = e.pageX
      const  pos_y = e.pageY
      const left = container_w / 2 - pos_x
      const top  = container_h / 2 - pos_y
      const res = [left / 12 + 'px', top / 12 + 'px']
      setBgPosition(res)
    }

    const finish = () => {
      setIsHover(false)
      setBgPosition(['0', '0'])
    }

  const switchToPath = (link) => {
    let path = router.asPath.split("/")
    router.push(`${link}`)
  }

  return <div className="projectCard"
              title={title}
              onClick={() => {switchToPath(link)}}
              ref={grad}
              onMouseMove={link ? handleAnimation : null}
              onMouseLeave={link ? finish : null}
              style={{backgroundImage: children ? gradient : null}}
           >
        <img className="gradient"
             loading="lazy"
             src={!children ? gradient.slice(4, gradient.length-1) : gradient_spot}
             style={{opacity: opacity, transform: `translate(${bgPosition.join(",")})`}}
        />
        <div className="projectCard_title">
            <p className="card_title">{title}</p>
            <span className="card_arrow">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.4996 4.00494L1.77461 14.6479L0.35498 13.2391L11.1772 2.49963L1.66897 2.49963L1.66897 0.499634L13.4996 0.499634L14.4996 0.499634L14.4996 1.49963L14.4996 13.2237L12.4996 13.2237L12.4996 4.00494Z"
                          fill={arrowColor ? arrowColor : 'transparent'}/>
                </svg>
            </span>
        </div>
        {durations ? <div className="projectCard_spacer"></div> : null}

        <div  className={`projectCard_members ${isHover? 'projectCard_members__hover' : !durations ? 'projectCard_members__wide' : ''}`}>
            {children}
        </div>

    {!durations ?<a href={`${lang}/${link}`} className="projectCard_spacer"></a> : null}

        {isInProcess ?
            // <Link href={link}>
              <a className="projectCard_duration">
                <p className="duration">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4878 8.70829L10.4274 9.76867L10.4274 9.76863L3.10291 2.44412L3.66582 1.8812L1.33171 0L0 1.33171L1.8812 3.66579L2.44415 3.10287L9.76867 10.4274L8.70829 11.4878L10.2205 13L13 10.2205L11.4878 8.70829Z" fill="white"/>
                        <path d="M13.7674 11L11 13.7669L12.6604 15.427C13.03 15.7965 13.5214 16 14.0441 16C14.5668 16 15.0582 15.7965 15.4278 15.427C16.1907 14.6641 16.1907 13.4229 15.4278 12.6601L13.7674 11Z" fill="white"/>
                        <path d="M8 10.1584L5.84206 8L4.26216 9.58003C3.10169 9.21628 1.83533 9.52012 0.961966 10.394C0.341751 11.0143 0 11.8391 0 12.7167C0 13.5939 0.341751 14.419 0.961966 15.0394C1.60225 15.6798 2.4432 16 3.28414 16C4.12509 16 4.96635 15.6798 5.60632 15.0394C6.48 14.1658 6.78377 12.8992 6.4201 11.7384L8 10.1584ZM4.03587 13.4682C3.62065 13.8835 2.94764 13.8835 2.53272 13.4682C2.1175 13.0532 2.1175 12.3801 2.53272 11.9648C2.94764 11.5497 3.62065 11.5497 4.03587 11.9648C4.45079 12.3801 4.45079 13.0533 4.03587 13.4682Z" fill="white"/>
                        <path d="M15.7847 1.98076L15.5266 1.32167L13.8698 2.97849L13.2008 2.79913L13.0214 2.13017L14.6783 0.473661L14.0192 0.215275C12.8637 -0.237285 11.5504 0.0368443 10.6734 0.913874C9.87009 1.71712 9.57249 2.8868 9.87626 3.96573L8 5.84216L10.1579 8L12.0342 6.12357C12.3126 6.20198 12.5966 6.24026 12.8791 6.24026C13.692 6.23995 14.49 5.9226 15.0861 5.3265C15.9632 4.4495 16.2373 3.13627 15.7847 1.98076Z" fill="white"/>
                      </svg>
                  {isInProcess}
                </p>
              </a>
            // </Link>
        : null}

        {durations ?
            // <Link href={link}>
              <a className="projectCard_duration">
                <p className="duration">
                       <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.52047 6.33759C10.5813 5.37044 12.0158 4.06241 12.1466 0.9375H13.0938V0H0.90625V0.9375H1.85341C1.98416 4.06241 3.41872 5.37044 4.47953 6.33759C5.19112 6.98637 5.59375 7.38347 5.59375 8C5.59375 8.61653 5.19112 9.01363 4.47953 9.66241C3.41872 10.6296 1.98416 11.9376 1.85341 15.0625H0.90625V16H13.0938V15.0625H12.1466C12.0158 11.9376 10.5813 10.6296 9.52047 9.66241C8.80888 9.01363 8.40625 8.61653 8.40625 8C8.40625 7.38347 8.80888 6.98637 9.52047 6.33759ZM6.53125 11.5137C6.38647 11.5436 6.24344 11.587 6.10384 11.6448L3.23269 12.8329C3.70156 11.6407 4.45675 10.9518 5.11116 10.3552C5.84147 9.68937 6.53125 9.06047 6.53125 8V11.5137ZM8.88884 10.3552C9.54325 10.9518 10.2984 11.6407 10.7673 12.8328L7.89616 11.6447C7.75656 11.587 7.61353 11.5435 7.46875 11.5137V8C7.46875 9.06047 8.15853 9.68937 8.88884 10.3552ZM3.21622 3.125C2.98956 2.53441 2.83303 1.82131 2.79206 0.9375H11.2079C11.1669 1.82131 11.0104 2.53441 10.7837 3.125H3.21622Z"
                          fill="white"/>
                       </svg>
                    {durations}
                </p>
                <p className="duration_description">{description}</p>
              </a>
            // </Link>
        : null}
    </div>
}