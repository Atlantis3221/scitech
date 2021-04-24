import React from 'react'
import { className } from '../../helpers/className'

import './dateSwicher.less'

/** dateSwitcher
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function DateSwitcher(props) {
    return <div className="dateSwitcher">
        {props.children}
    </div>
}

/** DateItem
 *  @param props
 *  @param props.date
 *  @param props.active
 *  @param props.month
 *  @param props.onClick
 *  @return {any}
 */
export function DateItem(props) {
    const { date, month, onClick, active } = props

    return <div className={className('dateItem', active? ['active']: [], props)}
                onClick={onClick}>
        <p className="dateItem_date">{date}</p>
        <p className="dateItem_month">{month}</p>
    </div>
}
