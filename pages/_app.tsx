import React from 'react'

import '../styles/fonts.css'
import '../styles/reset.less'
import '../styles/sciteam.less'
import '../styles/form.less'
import '../styles/grid2.less'
import '../styles/home.less'
import '../styles/textPopup.less'
import '../styles/variables.less'
import 'tailwindcss/tailwind.css'
import '../components/loader/loader.less'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
