import React from 'react'
import {EventItem, EventItem_Container} from '../../eventItem'

export function Day16() {
    return <div className="day" id="16">
        <div className="event">
            <EventItem_Container>
                <EventItem date='16 декабря (среда)'
                           date_add='10:00 – 12:00'
                           title='Блок 2. Что нужно уметь?'>
                    <p className="eventItem_title mt0">Занятие 7. Создаем атмосферу игры, подбираем сеттинг и формируем легенду.</p>
                    Зачем игре для Высшей школы легенда? Что нам даёт фан? Как удовольствие от процесса помогает достигать цели?
                </EventItem>
            </EventItem_Container>
        </div>
    </div>
}