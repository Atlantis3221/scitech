import React from 'react'
import {EventItem, EventItem_Container} from '../../../components/eventItem'

export function Day18() {
    return <div className="day" id="18">
        <div className="event">
            <EventItem_Container>
                <EventItem date='18 ноября (среда)'
                           date_add='10:00 – 12:00'
                           title='Блок 1. Что нужно знать?'>
                    <p className="eventItem_title mt0">Занятие 2. Понятия и определения. Типы образовательных игр.</p>
                    <p className="eventItem_title mt0">Замысел. Специфика онлайн-игр.</p>
                    Элементы, формирующие игру. Процессы в игре. Идея игры. Начало процесса разработки.
                </EventItem>
            </EventItem_Container>
        </div>
    </div>
}