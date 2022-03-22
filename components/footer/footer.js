import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import ModalsContext from '../modals/ModalContext'

export function Footer(props) {
  const { query: {lang: lang} } = useRouter()
  const [isSend, setIsSend] = useState(false)
  const [inputEmailValue, setInputEmailValue] = useState('')
  const {modalService, setRegModalState} = useContext(ModalsContext)

  const openModal = () => {
    modalService.openModal("reg")
    setRegModalState({
      color: "red",
      inputs: ["name", "company", "phone", "email", "confidential"],
      configName: "becomeClient",
      title: lang === 'ru'? 'Стать клиентом': 'Become a client'
    })
  }

  const saveToServer = (e) => {
    e.preventDefault()
    if(inputEmailValue) {
      setIsSend(true)
      e.target.classList.toggle('footer_form__success')
    }
  }

  return <div className="container sans footer">
    <div className="footer_column footer_logo">
      <Link href={`/${lang}/`}>
        <a>
          <img className="brand" src="/img/logo.svg" loading="lazy" alt="logo" />
        </a>
      </Link>
    </div>
    <div className="footer_column footer_contacts">
      <p className="footer_title">{lang === 'ru'? 'контакты': 'contacts'}</p>
      <p className="footer_text">{lang === 'ru'? 'Тюмень — Сургут': 'Tyumen - Surgut'}</p>
      <a href="mailto:cdc@scitech.ru" target='_blank'>
        <p className="footer_text link link_red">cdc@scitech.ru</p>
      </a><br/>
      <div className="footer_socials">
        {/* <a href="https://www.facebook.com/cdcscitech" target="_blank">
          <img className="" src="/img/icons/Facebook.svg" loading="lazy" alt="facebook" />
        </a> */}
        <a href="https://vk.com/public202354376" target="_blank">
          <img className="" src="/img/icons/Vkontakte.svg" loading="lazy" alt="vkontakte" />
        </a>
        {/* <a href="https://www.instagram.com/scitech.ru/ " target="_blank">
          <img className="ml1" src="/img/icons/Instagram.svg" loading="lazy" alt="instagram" />
        </a> */}
        <a href="https://t.me/scitechru" target="_blank">
          <img className="ml1" src="/img/icons/Telegram.svg" loading="lazy" alt="telegram" />
        </a>
      </div>
    </div>
    <div className="footer_column footer_about">
      <p className="footer_title">{lang === 'ru'? 'о центре': 'about the center'}</p>
      <div className='registerEventForm'>

        {/* MODAL POP-UP*/}
       <p className="footer_text link" onClick={() => {openModal()}}>
         {lang === 'ru'? 'Стать клиентом': 'Become a client'}
       </p>

      </div>
      <a href="mailto:cdc@scitech.ru" className="footer_text link" target="_blank">{lang === 'ru'? 'Стать партнером': 'Become a partner'}</a>
    </div>
    <div className="footer_column footer_signup">
      {!isSend ? <p className="footer_title">{lang === 'ru'? 'подпишитесь на новости': 'Subscribe to news'}</p> : null}
      <form className="footer_form" onSubmit={saveToServer}>
        <input onChange={(e) => setInputEmailValue(e.target.value)}
               className="form_input"
               name="email"
               type="email"
               placeholder="example@mail.ru"
        />
        <button className={`form_button ${isSend ? 'form_button__send' : ''}`} disabled={isSend} type='submit'></button>
        {isSend ? <p className="successText">{lang === 'ru'? 'Вы добавлены в новостную рассылку': 'You\'ve been added to the newsletter'}</p> : null}
      </form>
      <Link href={`/${lang}/policy`}>
      <a>
        <p className='footer_signup__grey'>{lang === 'ru'? 'Политика конфиденциальности': 'Personal Data Processing Policy'}</p>
      </a>
      </Link>
      <p className='footer_signup__grey'>{lang === 'ru'? 'Сайт разработан в Цитадели': 'Developed by the Citadel'}
        <a className='footer_signup__bold' href="https://ctdl.space" target='_blank'>ctdl</a>
      </p>
    </div>
  </div>
}