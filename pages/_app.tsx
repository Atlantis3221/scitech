import React from 'react'
import '../styles/registerEventForm.less'
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
import '../styles/button.less'
import '../styles/datePlace.less'
import '../styles/inputCheckbox.less'
import '../styles/footer.less'
import '../styles/inputFile.less'
import '../styles/layout.less'
import '../styles/newHeader.less'
import '../styles/newsLine.less'
import '../styles/project.less'
import '../styles/speakerCard.less'
import '../styles/speakerCard.less'
import '../styles/fonts.css'
import '../styles/reset.less'
import '../styles/sciteam.less'
import '../styles/form.less'
import '../styles/home.less'
import '../styles/grid2.less'
import '../styles/textPopup.less'
import '../styles/variables.less'
import '../styles/strongText.less'
import '../styles/fonts.css'
import '../styles/reset.less'
import '../styles/sciteam.less'
import '../styles/form.less'
import '../styles/home.less'
import '../styles/grid2.less'
import '../styles/textPopup.less'
import '../styles/variables.less'
import '../styles/grants.less'



import { ModalsContextProvider } from '../components/modals/ModalContext'

function MyApp({ Component, pageProps }) {
  return (
    <ModalsContextProvider>
      <Component {...pageProps} />
    </ModalsContextProvider>
  ) 
}

export default MyApp
