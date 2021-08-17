/**
 *  @author Ezerskaya
 *  @version 0.0.1
 */

import React from 'react'

import { className } from '../../helpers/className'

export function Table(props) {
  return (
    <TableContainer {...props}>
      <table className={className('table', ['mainPage', 'fullSize'], props)}>{props.children}</table>
    </TableContainer>
  )
}

/** TableContainer
 *  @param props
 *  @param props.children
 *  @return {any}
 */
const TableContainer = (props) => {
  const { children } = props
  return <div className={className('table_container', ['scroll'], props)}>{children}</div>
}

/**
 * Table_head
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function Table_head(props) {
  return (
    <thead className='table_thead'>
      <tr>{props.children}</tr>
    </thead>
  )
}

/**
 * Table_column
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function Table_column(props) {
  return <td className={className('table_column', ['skinny', 'quarter', 'space'], props)}>{props.children}</td>
}

/**
 * Table_body
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function Table_body(props) {
  return <tbody className={className('table_tbody', ['zebra'], props)}>{props.children}</tbody>
}

/**
 * Table_row
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function Table_row(props) {
  return <tr className='table_row'>{props.children}</tr>
}
