import React from 'react'


/** DatePlace
 *  @param props
 *  @param props.dataFirst
 *  @param props.dataSecond
 *  @param props.place
 *  @param props.description
 *  @return {any}
 */
export function DatePlace(props) {
    const {dataFirst, dataSecond, place, description} = props

    return <div className="datePlace">
        <div className="datePlace_text">
            <div className="datePlace_date">
                <p className="date_day">{dataFirst[0]}</p>
                <span className="date_month">{dataFirst[1]}</span>
            </div>
            {dataSecond ? (<>
                    <div className="sting">-</div>
                    <div className="datePlace_date">
                        <p className="date_day">{dataSecond[0]}</p>
                        <span className="date_month">{dataSecond[1]}</span>
                    </div>
                </>
            ) : null}

            <div>
            <div className="datePlace_place">
                <img src='/img/pin.svg' loading="lazy" alt='icon'/>
                <div className={`place_text ${description ? 'place_text_wide' : ''}`}>
                    <p>{place}</p>
                </div>
            </div>

            {description ?
                <span className="datePlace_description">{description}</span>
                : null}
            </div>
        </div>
    </div>
}
