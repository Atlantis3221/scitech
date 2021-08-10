import React from 'react'
import {EventItem, EventItem_Container} from '../../eventItem'

export function Day25() {
    return <div className="day" id="25">
        <div className="event">
            <EventItem_Container>
                <EventItem date='25 ноября (среда)'
                           date_add='10:00 – 12:00'
                           title='Блок 1. Что нужно знать?'>
                    <p className="eventItem_title mt0">Занятие 3. Игровые механики и компетенции игроков.</p>
                    <p className="eventItem_title mt0">Проявление компетенций в онлайн-формате.</p>
                    Базовые игровые механики и мульти-механика игры. Правила игры. Связь механик игры и компетенций
                    игроков.
                </EventItem>
            </EventItem_Container>
        </div>
    </div>
}