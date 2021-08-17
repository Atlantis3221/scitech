import React from 'react'
import { $props } from '../../helpers/$props'
import { NewHeader } from '../newHeader'
import { NewsLine } from '../newsLine'
import {Footer} from "../footer";
import { useRouter } from 'next/router'
import Modals from '../modals/Modals'

const UI_HEADER = 'header'
const UI_FOOTER = 'footer'
const UI_MAIN = 'main'
const UI_ASIDE = 'aside'
const UI_CONTENT = 'content'

export const LayoutDefaults = {
  header: <NewHeader />,
  footer: <Footer />,
  asideLeft: undefined,
  asideRight: undefined,
  main: undefined,
}

/**
 * @param { Object } props
 * @param { Function } props.header
 * @param { Function } props.asideLeft
 * @param { Function } props.asideRight
 * @param { Function } props.footer
 * @param { Function } props.children
 */
export function Layout(props) {
  const router = useRouter()
  const pathname = router.pathname
  const lang = router.query
  const isShownNewsLine = lang.lang !== 'en' && (/news/ig).test(pathname) !== true;

  const {
    header = LayoutDefaults.header,
    footer = LayoutDefaults.footer,
    asideLeft = LayoutDefaults.asideLeft,
    asideRight = LayoutDefaults.asideRight,
    main = props.children,
    style = {},
    modalFormText,
    $,
  } = $props(Layout, props)

  return (
    <div>
      { isShownNewsLine && <NewsLine/> }
      <div {...$()} style={style}>
      {header && <div {...$(UI_HEADER)}>{header}</div>}
      <div {...$(UI_MAIN)}>
        {asideLeft && <div {...$(UI_ASIDE)}>{asideLeft}</div>}
        <div {...$(UI_CONTENT)}>{main}</div>
        {asideRight && <div {...$(UI_ASIDE)}>{asideRight}</div>}
      </div>
      {footer && <div {...$(UI_FOOTER)}>{footer}</div>}
    </div>
    <Modals modalFormText={modalFormText}/>
  </div>
  )
}
