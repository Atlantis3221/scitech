import React from 'react'
import {EventItem, EventItem_Container} from '../../eventItem'

export function Day2() {
    return <div className="day" id="2">
        <div className="event">
            <EventItem_Container>
                <EventItem date='2 декабря (среда)'
                           date_add='10:00 – 12:00'
                           title='Блок 2. Что нужно уметь?'>
                    <p className="eventItem_title mt0">Занятие 5. Пишем правила игры.</p>
                    <p className="eventItem_title mt0">Рассылаем и отслеживаем выполнение правил онлайн.</p>
                    Как подобрать механики? Как упростить правила? Как правильно формулировать мысли.
                </EventItem>
            </EventItem_Container>
        </div>
    </div>
}