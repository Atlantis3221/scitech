import React from 'react'
import {EventItem, EventItem_Container} from '../../../components/eventItem'

export function Day9() {
    return <div className="day" id="9">
        <div className="event">
            <EventItem_Container>
                <EventItem date='9 декабря (среда)'
                           date_add='10:00 – 12:00'
                           title='Блок 2. Что нужно уметь?'>
                    <p className="eventItem_title mt0">Занятие 6. Считаем баланс игры, дописываем правила.</p>
                    Какие бывают виды баланса? Как регулировать сложность игры?
                </EventItem>
            </EventItem_Container>
        </div>
    </div>
}