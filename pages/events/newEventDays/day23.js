import React from 'react'
import {EventItem, EventItem_Container} from '../../../components/eventItem'

export function Day23() {
    return <div className="day" id="23">
        <div className="event">
            <EventItem_Container>
                <EventItem date='23 декабря (среда)'
                           date_add='10:00 – 12:00'
                           title='Блок 2. Что нужно уметь?'>
                    <p className="eventItem_title mt0">Занятие 8. Проводим пилотную версию игры онлайн, оценку образовательных результатов.</p>
                    В чем особенность модерации онлайн-игр? Как проводить оценку знаний с помощью таких игр? Какие выводы нужно
                    сделать после первого проведения игры?
                </EventItem>
            </EventItem_Container>
        </div>
    </div>
}