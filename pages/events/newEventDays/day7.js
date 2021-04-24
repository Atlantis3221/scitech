import React from 'react'
import {EventItem, EventItem_Container} from '../../../components/eventItem'

export function Day7() {
    return <div className="day" id="7">
        <div className="event">
            <EventItem_Container>
                <EventItem date='7 ноября (суббота)'
                           date_add='10:00 – 12:00'
                           title={`Вводный открытый вебинар.`}>
                    <p className="eventItem_title mt0">Тема: «Новая реальность: игры для онлайн-обучения»</p>
                    Р. Крылов: Представление курса, методология, расписание, форматы работы. <br/>
                    А. Латышев: Идеология и история развития курса для преподавателей высшей школы. Личные кейсы. <br/>
                    Р. Крылов: Практика внедрения игрофикации в высшей школе на примере реальных проектов. Вопросы и ответы по дальнейшей работе.
                </EventItem>
            </EventItem_Container>
        </div>
    </div>
}