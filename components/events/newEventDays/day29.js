import React from 'react'
import {EventItem, EventItem_Container} from '../../eventItem'

export function Day29() {
    return <div className="day" id="29">
        <div className="event">
            <EventItem_Container>
                <EventItem date='29 ноября (воскресенье)'
                           date_add='10:00 – 12:00'
                           title='Блок 1. Что нужно знать?'>
                    <p className="eventItem_title mt0">Занятие 4. Игровая математика: теория игр и теория вероятностей.</p>
                    <p className="eventItem_title mt0">Инструменты для проведения образовательных игр онлайн.</p>
                    Необходимость случайных событий и их место в игре. Понятие баланса игры, равновесия и напряженности игры.
                </EventItem>
            </EventItem_Container>
        </div>
    </div>
}