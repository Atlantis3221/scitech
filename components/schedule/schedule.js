import React from 'react'
import './schedule.less'
import { Button } from '../button'
// import { Modal } from '../../@fireball/components/modal'
import { RegisterEventForm } from '../forms/registerEventForm/registerEventForm'
// import { Requests } from '../../@fireball/collections/requests'

/** Schedule
 *  @param props
 *  @param props.dataFirst
 *  @param props.dataSecond
 *  @param props.place
 *  @param props.time
 *  @param props.description
 *  @param props.eventTitle
 *  @param props.eventLinkToTable
 *  @param props.isShowButton
 *  @return {any}
 */
export function Schedule(props) {
    const {
      dataFirst,
      dataSecond,
      place,
      time,
      description,
      eventTitle,
      eventType,
      eventLinkToTable,
      showOrganizationField,
      isShowButton,
      individual,
      showAskIsSpeakerButton,
      eventLinkToTableTitle = 'перейти к трансляции'
    } = props

    return <div className="schedule_box">
                    <div className="schedule_date">
                        <p className="date_day">{dataFirst[0]}</p>
                      <div className="date_wrapper">
                        <span className={`date_month ${!dataFirst[0] ? 'date_month__wide' : null}`}>{dataFirst[1]}</span>
                        <span className="date_text">{dataFirst[2]}</span>
                      </div>

                        {dataSecond ? (<>
                            <div className="sting">-</div>
                            <div className="schedule_date">
                                <p className="date_day">{dataSecond[0]}</p>
                                <span className={`date_month ${dataSecond ? 'date_month__wide' : ''}`}>{dataSecond[1]}</span>
                            </div>
                           </>
                        ) : null}
                    </div>

                    {!dataSecond ?
                      <div className="schedule_time">
                        <p>{time}</p>
                        <p className="schedule_time__tiny">Московское время</p>
                      </div>
                    : null}

                    <div className="schedule_place">
                        <div className={`place_text ${description ? 'place_text_wide' : ''}`}>
                          <div className="place_text_icon">
                            <img loading="lazy" src='/img/pin.svg' alt='icon'/>
                            <p className="schedule_time__tiny mt0">{place}</p>
                          </div>
                            {description ?
                              <span className="schedule_box_description">{description}</span>
                              : null}
                        </div>
                    </div>

                   {isShowButton ?
                       <div className="schedule_button">
                         {eventTitle ?
                           <div className='registerEventForm'>
                             {/*@todo REPLACE with new from*/}
                             <a href={'/'} className="btn btn__red">Зарегистрироваться</a>
                               {/*<Modal*/}
                               {/*  Trigger={props => (*/}
                               {/*    <Button red onClick={props.onClick}>*/}
                               {/*        Зарегистрироваться*/}
                               {/*    </Button>*/}
                               {/*  )}*/}
                               {/*  Content={props => (*/}
                               {/*    <div>*/}
                               {/*        <div className='registerEventForm_title'>*/}
                               {/*            {eventTitle}*/}
                               {/*        </div>*/}
                               {/*        <RegisterEventForm*/}
                               {/*          hideParticipant={true}*/}
                               {/*          individual={individual}*/}
                               {/*          showOrganizationField={showOrganizationField}*/}
                               {/*          askIsSpeaker={showAskIsSpeakerButton}*/}
                               {/*          isSpeaker={showAskIsSpeakerButton}*/}
                               {/*          eventType={eventType}*/}
                               {/*          onSubmit={(e, payload) => {*/}
                               {/*              Requests.methods.insert({*/}
                               {/*                  group: `registrations_${eventLinkToTable}`,*/}
                               {/*                  payload,*/}
                               {/*              })*/}
                               {/*              // props.close()*/}
                               {/*          }}*/}
                               {/*        />*/}
                               {/*    </div>*/}
                               {/*  )}*/}
                               {/*/>*/}
                           </div>
                           : <a href={eventLinkToTable} className="btn btn__red">{eventLinkToTableTitle}</a> }
                       </div>
                   : <p className="raleway">Прием заявок окончен</p> }
 </div>
}
