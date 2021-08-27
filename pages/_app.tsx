import React, { useEffect, useState } from 'react'
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
import 'react-phone-input-2/lib/style.css'
import { ModalsContextProvider } from '../components/modals/ModalContext'
import Router, { useRouter } from "next/router"
import smoothscroll from 'smoothscroll-polyfill';
import Loader from '../components/Loader'
import { NewsContextProvider } from '../components/context/newsContext'
import router from 'next/router'


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const {asPath} = useRouter()


  useEffect(() => {
    const array = asPath.split("/")
    if (array[1] !== "ru" && array[1] !== "en" && array[1] !== "admin") {
        array.shift()
        const newArr = ["", "ru", ...array]
        console.log(array)
        router.replace(newArr.join("/"))
    }
  }, [])

 
  useEffect(() => {
    smoothscroll.polyfill();
    const appHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    const loading = () => {
      setLoading(false)
    }
    window.addEventListener("resize", appHeight);
    window.addEventListener("load", loading)
    appHeight();
    return () => {
      window.removeEventListener("resize", appHeight);
      window.removeEventListener("load", loading)
    };
    
  }, []);


Router.events.on("routeChangeStart", () => {setLoading(true)} );
Router.events.on("routeChangeComplete", () => {setLoading(false)});
Router.events.on("routeChangeError", () => {setLoading(false)});
  return (
    <ModalsContextProvider>
      <NewsContextProvider>
      <Component {...pageProps} />
       <Loader loading={loading}/>
      </NewsContextProvider>
    </ModalsContextProvider>
  )
}

export default MyApp
