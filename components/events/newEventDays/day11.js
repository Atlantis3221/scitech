import React from 'react'
import {EventItem, EventItem_Container} from '../../eventItem'

export function Day11() {
    return <div className="day" id="11">
        <div className="event">
            <EventItem_Container>
                <EventItem date='11 ноября (среда)'
                           date_add='10:00 – 12:00'
                           title='Блок 1. Что нужно знать?'>
                    <p className="eventItem_title mt0">Занятие 1. Игровой подход к задачам образования.</p>
                    <p className="eventItem_title mt0">Цель игры. Онлайн-игры.</p>
                    Принципы составления технического задания на создание целевой игры. Начало разработки игры.
                </EventItem>
            </EventItem_Container>
        </div>
    </div>
}