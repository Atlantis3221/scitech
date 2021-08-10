import React from 'react'
import '../styles/variables.less'
import 'polyfill-object.fromentries/index'
import 'tailwindcss/tailwind.css'
import '../styles/reset.less'
import '../styles/layout.less'
import '../styles/sciteam.less'
import '../styles/fonts.css'
import '../styles/project.less'
import '../styles/projectGrowthCard.less'
import '../styles/registerEventForm.less'
import '../styles/form.less'
import '../styles/grid2.less'
import '../styles/home.less'
import '../styles/textPopup.less'
import '../styles/loader.less'
import '../styles/button.less'
import '../styles/datePlace.less'
import '../styles/inputCheckbox.less'
import '../styles/footer.less'
import '../styles/inputFile.less'
import '../styles/newHeader.less'
import '../styles/newsLine.less'
import '../styles/speakerCard.less'
import '../styles/strongText.less'
import '../styles/grants.less'
import '../styles/dateSwicher.less'
import '../styles/eventItem.less'
import '../styles/navbar.less'
import '../styles/partner.less'
import '../styles/schedule.less'
import '../styles/schoolProject.less'
import '../styles/table.less'
import '../styles/events.less'
import '../styles/experts.less'
import '../styles/formRegistration.less'
import '../styles/vacancies.less'


import { ModalsContextProvider } from '../components/modals/ModalContext'

function MyApp({ Component, pageProps }) {
  return (
    <ModalsContextProvider>
      <Component {...pageProps} />
    </ModalsContextProvider>
  ) 
}

export default MyApp
