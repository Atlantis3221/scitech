import React, { useState } from 'react'
import Link from 'next/link'
import './footer.less'
import { RegisterEventForm } from '../forms/registerEventForm/registerEventForm'

// import { Modal } from '/imports/@fireball/components/modal'
// import { Requests } from '/imports/@fireball/collections/requests'
// import { NewsSubscribers } from '/imports/collections'


// export function Footer(props) {
// 	return <div className="container sans footer">
// 		<div className="footer__mini_column footer_logo">
// 			<a href="/">
// 				<img className="brand" src="/img/logo.svg" alt="logo" />
// 			</a>
// 		</div>
// 		<div className="footer__mini_column footer_policy">
// 			<a href="/policy" target="_blank">
// 				<p className='footer_signup__grey'>Политика конфиденциальности</p>
// 			</a>
// 			<p className='footer_signup__grey'>Сайт разработан в Цитадели
// 				<a className='footer_signup__bold' href="https://ctdl.space" target='_blank'>ctdl</a>
// 			</p>
// 		</div>
// 		<div className="footer__mini_column footer_contacts">
// 			<p>Тюмень</p>
// 			<a href="/" target='_blank'>cdc@scitech.ru</a>
// 		</div>
// 	</div>
// }

export function Footer(props) {
  const [isSend, setIsSend] = useState(false)
  const [inputEmailValue, setInputEmailValue] = useState('')

  const saveToServer = (e) => {
    e.preventDefault()
    if(inputEmailValue) {
      setIsSend(true)
      e.target.classList.toggle('footer_form__success')

      // NewsSubscribers.methods
      //   .insert({ email: inputEmailValue, sendpulseBookId: 'subscribeToNews' })
      //   .finally(console.log)
    }
  }

  return <div className="container sans footer">
    <div className="footer_column footer_logo">
      <Link href='/'>
        <a>
          <img className="brand" src="/img/logo.svg" loading="lazy" alt="logo" />
        </a>
      </Link>
    </div>
    <div className="footer_column footer_contacts">
      <p className="footer_title">контакты</p>
      <p className="footer_text">Тюмень — Сургут</p>
      <a href="mailto:cdc@scitech.ru" target='_blank'>
        <p className="footer_text link link_red">cdc@scitech.ru</p>
      </a>
      <div className="footer_socials">
        <a href="https://www.facebook.com/cdcscitech" target="_blank">
          <img className="" src="/img/icons/Facebook.svg" loading="lazy" alt="facebook" />
        </a>
        <a href="https://vk.com/public202354376" target="_blank">
          <img className="ml1" src="/img/icons/Vkontakte.svg" loading="lazy" alt="vkontakte" />
        </a>
        <a href="https://www.instagram.com/scitech.ru/ " target="_blank">
          <img className="ml1" src="/img/icons/Instagram.svg" loading="lazy" alt="instagram" />
        </a>
        <a href="https://t.me/scitechru" target="_blank">
          <img className="ml1" src="/img/icons/Telegram.svg" loading="lazy" alt="telegram" />
        </a>
      </div>
    </div>
    <div className="footer_column footer_about">
      <p className="footer_title">о центре</p>
      {/*<div className='registerEventForm'>*/}
      {/*  <Modal*/}
      {/*    Trigger={props => (*/}
      {/*      <p className="footer_text link" onClick={props.onClick}>*/}
      {/*        Стать клиентом*/}
      {/*      </p>*/}
      {/*    )}*/}
      {/*    Content={props => (*/}
      {/*      <div>*/}
      {/*        <div className='registerEventForm_title'>*/}
      {/*          Стать клиентом*/}
      {/*        </div>*/}
      {/*        <RegisterEventForm*/}
      {/*          hideParticipant={true}*/}
      {/*          onSubmit={(e, payload) => {*/}
      {/*            Requests.methods.insert({*/}
      {/*              group: 'registrations_beClient',*/}
      {/*              payload,*/}
      {/*            })*/}
      {/*            props.close()*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  />*/}
      {/*</div>*/}
      <a href="mailto:cdc@scitech.ru" className="footer_text link" target="_blank">Стать партнером</a>
    </div>
    <div className="footer_column footer_signup">
      {!isSend ? <p className="footer_title">подпишитесь на новости</p> : null}
      <form className="footer_form" onSubmit={saveToServer}>
        <input onChange={(e) => setInputEmailValue(e.target.value)}
               className="form_input"
               name="email"
               type="email"
               placeholder="example@mail.ru"
        />
        <button className={`form_button ${isSend ? 'form_button__send' : ''}`} disabled={isSend} type='submit'></button>
        {isSend ? <p className="successText">Вы добавлены в новостную рассылку</p> : null}
      </form>
      <Link href="/policy">
      <a>
        <p className='footer_signup__grey'>Политика конфиденциальности</p>
      </a>
      </Link>
      <p className='footer_signup__grey'>Сайт разработан в Цитадели
        <a className='footer_signup__bold' href="https://ctdl.space" target='_blank'>ctdl</a>
      </p>
    </div>
  </div>
}