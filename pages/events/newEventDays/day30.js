import React from 'react'
import {EventItem, EventItem_Container} from '../../../components/eventItem'

export function Day30() {
    return <div className="day" id="30">
        <div className="event">
            <EventItem_Container>
                <EventItem date='30 декабря (среда)'
                           date_add='10:00 – 12:00'
                           title='Игропрактическая мастерская.'>
                    <p className="eventItem_title mt0">Подводим итоги курса, обсуждаем получившиеся игры.</p>
                    <p className="eventItem_title mt0">Продолжаем разговор об особенностях проведения образовательных игр онлайн.</p>
                    Результат: готовая к пилотному проведению игра.
                </EventItem>
            </EventItem_Container>
        </div>
    </div>
}