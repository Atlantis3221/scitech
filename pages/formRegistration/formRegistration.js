import React, { useState } from 'react'

import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import 'react-phone-number-input/style.css'

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

// async function Main() {
//  const file = document.querySelector('#myfile').files[0];
//  console.log(await toBase64(file));
// }

// Main();

export function FormRegistration({ phoneNumberValue }) {

  const [data, setData] = useState({
    registerType: 'individual',
    schoolType: 'liderSchool'
  })

  const getProps = (name, defaultValue, type = 'text') => {

    const onChange = async (event) => {
      let value = event.target.value

      if (type === 'file') {
        value = await toBase64(event.target.files[0])
      }

      setData({
        ...data, [name]: value
      })

    }

    if (type === 'file') {
      return {
        name,
        onChange,
      }     
    }

    return {
      name,
      onChange,
      value: data[name] || defaultValue || ''
    }

  }

  const saveToServer = async (event) => {
    event.preventDefault()
    // const _id = await Forms.methods.insert({
    //   type: 'form1',
    //   payload: data
    // })
    alert('Ваша заявка принята')
  }

  return (
    <Page>
      <Layout>
        <div className='show wrapper_hero'>
          <div className='container'>
            <div className='content pb0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Заявка на участие</p>
                </li>
                <li className='i3_9'>
                  <div className="formContainer">
                    <div className="formWrapper">
                      <div className="fromTitle">
                        <img loading="lazy" src="/img/formTitle.png" alt="Title" />
                      </div>

                      <form onSubmit={saveToServer}>

                        <div className="formDescription formDescription_title">
                          <p className="title">
                            Заявка на участие в Школах ЦРК Западно-Сибирского НОЦ, 2021/2022
                          </p>
                          <p className="red">* Обязательно</p>
                        </div>

                          <div className="formDescription registerInput_type">
                            <p className="input-title firstColumn">Тип участия <span className="red">*</span></p>
                            <div className="radio_container">
                              <label className="registerInput_type_label">
                                Индивидуальный участник
                                <input className="registerInput_type_input"
                                       type="radio"
                                       defaultChecked={true}
                                       {...getProps('registerType', 'individual')}
                                />
                                <span className='checkmark' />
                              </label>
                              <label className="registerInput_type_label">
                                Команда
                                <input className="registerInput_type_input"
                                       type="radio"
                                       {...getProps('registerType', 'team')}
                                />
                                <span className='checkmark' />
                              </label>
                            </div>
                          </div>

                          <div className="formDescription registerInput_type">
                            <p className="input-title firstColumn">Название образовательной программы - Школы <span
                              className="red">*</span></p>
                            <div className="radio_container">
                              <label className="registerInput_type_label">
                                Школа научного лидерства (ШНЛ)
                                <input className="registerInput_type_input"
                                       type="radio"
                                       defaultChecked={true}
                                       {...getProps('schoolType', 'liderSchool')}
                                />
                                <span className='checkmark' />
                              </label>
                              <label className="registerInput_type_label">
                                Школа руководителей научно-технических проектов (ШРНТП)
                                <input className="registerInput_type_input"
                                       type="radio"
                                       {...getProps('schoolType', 'technicalSchool')}
                                />
                                <span className='checkmark' />
                              </label>
                            </div>
                          </div>

                          <div className="formDescription">
                            <label className="input-title input-title_column">
                            Организация (полностью) <span className="red">*</span>
                            </label>
                            <input type="text" required {...getProps('organization')} />
                          </div>

                          <div className="formDescription">
                            <label className="input-title input-title_column">ФИО (полностью) <span
                            className="red">*</span></label>
                            <input className="" type="text" {...getProps('fullName')} required />
                          </div>

                          <div className="formDescription">
                            <label className="input-title input-title_column">
                              Должность (полностью)<span className="red">*</span>
                            </label>
                            <input className="" type="text" {...getProps('jobPosition')} required />
                          </div>

                          <div className="formDescription">
                            <label className="input-title input-title_column">
                              Email <span className="red">*</span>
                            </label>
                            <input className="" type="email" {...getProps('email')} required />
                          </div>

                          <div className="formDescription">
                            <label className="input-title input-title_column">Мобильный телефон <span
                            className="red">*</span></label>
                              {/*<PhoneInput*/}
                              {/*  value={phoneNumberValue}*/}
                              {/*  international*/}
                              {/*  // onChange={onChange}*/}
                              {/*  defaultCountry="RU"*/}
                              {/*  name={'phone'}*/}
                              {/*  required={true}*/}
                              {/*/>*/}
                            <input className="" type="text" {...getProps('phone')} required />
                          </div>

                          <div className="column">
                            <p className="input-title firstColumn">
                            Прикрепите эссе по установленной форме. Имя файла должно быть в
                            формате ФамилияИО_эссе <span className="red">*</span></p>
                            <label className="fileLoaderInput_label">
                            <input type="file"
                              className="fileLoaderInput"
                            {...getProps('esseFile', '', 'file')}
                            />
                            </label>
                            <p className="input-title">Прикрепите CV. Имя файла должно быть в формате ФамилияИО_CV <span
                            className="red">*</span></p>
                            <label className="fileLoaderInput_label">
                            <input
                              type="file"
                              className="fileLoaderInput"
                            {...getProps('cvFile', '', 'file')}
                            />
                            </label>
                          </div>

                          <div className="formDescription registerInput_agree">
                            <label className="input-title input-title_column">
                            Согласие на обработку персональных данных
                            <span className="red">*</span></label>
                            <div>
                              <input className="grey-checkbox"
                                type="checkbox"
                                id={'personalAgreement'}
                                name={'personalAgreement'}
                                required />
                              <label htmlFor="personalAgreement">
                                <a href="https://scitech.ru/policy">
                                Даю согласие на обработку персональных данных.</a>
                              </label>
                            </div>
                          </div>

                        {/*{isZIMAFORM === true ? (*/}
                        {/*  <>*/}
                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <label className="input-title input-title_column">*/}
                        {/*        Адрес электронной почты <span className="red">*</span>*/}
                        {/*      </label>*/}
                        {/*      <input className="" type="mail" {...getProps('teamMail')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Укажите ФИО Заявителя от команды, с которым организаторы могут коммуницировать для уточнения деталей проекта <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('teamHead')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Укажите контактные данные Заявителя от команды, с которым организаторы могут коммуницировать для уточнения деталей проекта (сотовый телефон) <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('teamHeadPhone')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Укажите контактные данные Заявителя от команды, с которым организаторы могут коммуницировать для уточнения деталей проекта (электронная почта) <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="mail" {...getProps('teamHeadEmail')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <label className="input-title input-title_column">*/}
                        {/*        Название проекта <span className="red">*</span>*/}
                        {/*      </label>*/}
                        {/*      <input className="" type="text" {...getProps('projectTitle')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        В какой из фокусных тематик ЗИМА 21 находится ваш проект  <span className="red">*</span></p>*/}
                        {/*      <div className="ltl_checkbox">*/}
                        {/*        <input className="grey-checkbox"*/}
                        {/*               type="checkbox"*/}
                        {/*               id={'bioSecurityOfHuman'}*/}
                        {/*               name={'bioSecurityOfHuman'}*/}
                        {/*               required />*/}
                        {/*        <label htmlFor="bioSecurityOfHuman">*/}
                        {/*          <p>*/}
                        {/*            Биобезопасность человека, растений и животных, включая цифровую трансформацию медицинских технологий и цифровизацию сельского хозяйства.</p>*/}
                        {/*        </label>*/}
                        {/*      </div>*/}
                        {/*      <div className="ltl_checkbox">*/}
                        {/*        <input className="grey-checkbox"*/}
                        {/*               type="checkbox"*/}
                        {/*               id={'newTechnologiesDevelopment'}*/}
                        {/*               name={'newTechnologiesDevelopment'}*/}
                        {/*               required />*/}
                        {/*        <label htmlFor="newTechnologiesDevelopment">*/}
                        {/*          <p>*/}
                        {/*            Разработки новых технологий в области контроля углеродного баланса и совершенствования контроля над состоянием окружающей среды.</p>*/}
                        {/*        </label>*/}
                        {/*      </div>*/}
                        {/*      <div className="ltl_checkbox">*/}
                        {/*        <input className="grey-checkbox"*/}
                        {/*               type="checkbox"*/}
                        {/*               id={'themeAboutArctic'}*/}
                        {/*               name={'themeAboutArctic'}*/}
                        {/*               required />*/}
                        {/*        <label htmlFor="themeAboutArctic">*/}
                        {/*          <p>*/}
                        {/*            Арктика. Ресурсы и качество окружающей среды. Человек в Арктике.</p>*/}
                        {/*        </label>*/}
                        {/*      </div>*/}
                        {/*      <div className="ltl_checkbox">*/}
                        {/*        <input className="grey-checkbox"*/}
                        {/*               type="checkbox"*/}
                        {/*               id={'digitalTransformation'}*/}
                        {/*               name={'digitalTransformation'}*/}
                        {/*               required />*/}
                        {/*        <label htmlFor="digitalTransformation">*/}
                        {/*          <p>*/}
                        {/*            Цифровая трансформация нефтегазовой индустрии.</p>*/}
                        {/*        </label>*/}
                        {/*      </div>*/}
                        {/*      <div className="ltl_checkbox">*/}
                        {/*        <input className="grey-checkbox"*/}
                        {/*               type="checkbox"*/}
                        {/*               id={'innovationSolutions'}*/}
                        {/*               name={'innovationSolutions'}*/}
                        {/*               required />*/}
                        {/*        <label htmlFor="innovationSolutions">*/}
                        {/*          <p>*/}
                        {/*            Передовые решения в области образовательных технологий (EdTech-проекты).</p>*/}
                        {/*        </label>*/}
                        {/*      </div>*/}
                        {/*      <div className="ltl_checkbox">*/}
                        {/*        <input className="grey-checkbox"*/}
                        {/*               type="checkbox"*/}
                        {/*               id={'anotherTheme'}*/}
                        {/*               name={'anotherTheme'}*/}
                        {/*               required />*/}
                        {/*        <label htmlFor="anotherTheme">*/}
                        {/*          <p>*/}
                        {/*            Другая тема при условии их соответствия стратегии научно-технологического развития РФ.</p>*/}
                        {/*        </label>*/}
                        {/*      </div>*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Дайте краткий ответ на вопрос "Решаемые проблемы". Какую проблему решает этот проект, чья это проблема и почему она до сих пор не решена.  <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('questionSolvableProblems')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Дайте краткий ответ на вопрос «Технологии». На какие исследования и технологии (научно-технический задел) опирается проект. <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('questionTechnologies')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Дайте краткий ответ на вопрос "Область применения". Где находятся области применения вашего продукта при полной реализации.  <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('questionApplicationArea')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Опишите потенциально возможные направления коммерциализации на ренке перспективных технологий, которые будут получены в результате проекта  <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('questionPotentialWays')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Кратко опишите ключевых членов вашей команды и их компетенции (фио, роль в команде, релевантный для данной роли опыт и тп). Включая заявителя. Член команды #1 <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('keyMembers1')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Кратко опишите ключевых членов вашей команды и их компетенции (фио, роль в команде, релевантный для данной роли опыт и тп). Включая заявителя. Член команды #2 <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('keyMembers2')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Кратко опишите ключевых членов вашей команды и их компетенции (фио, роль в команде, релевантный для данной роли опыт и тп). Включая заявителя. Член команды #3 <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('keyMembers3')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Кратко опишите ключевых членов вашей команды и их компетенции. Включая заявителя. Член команды #4 <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('keyMembers4')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Кратко опишите ключевых членов вашей команды и их компетенции. Включая заявителя. Член команды #5 <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('keyMembers5')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Кратко опишите ключевых членов вашей команды и их компетенции. Включая заявителя. Член команды #6 <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('keyMembers6')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Кратко опишите ключевых членов вашей команды и их компетенции. Включая заявителя. Член команды #7 <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('keyMembers7')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        На какой стадии готовности сейчас находится Ваш проект, приведите краткое описание. При возможности приведите ссылки на информацию о проекте.<span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('readyStageDescription')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription registerInput_type flex-column">*/}
                        {/*      <p className="input-title">*/}
                        {/*        На какой стадии готовности по шкале TRL сейчас находится Ваш проект - выберите один вариант из списка.*/}
                        {/*        <span className="red">*</span></p>*/}
                        {/*      <div className="radio_container">*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          • TRL 1: Сформулирована фундаментальная концепция, обоснована полезность новой технологии*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 defaultChecked={true}*/}
                        {/*                 {...getProps('readyStageTRL', 'stageTRL1')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          • TRL 2: Сформулирована техническая концепция, установлены возможные области применения разработки*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('readyStageTRL', 'stageTRL2')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          • TRL 3: Для подтверждения концепции разработан макетный образец технологии, чтобы продемонстрировать ее ключевые характеристики*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('readyStageTRL', 'stageTRL3')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          • TRL 4: Разработан детальный макет решения для демонстрации работоспособности технологии*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('readyStageTRL', 'stageTRL4')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          • TRL 5: Работоспособность технологии может быть продемонстрирована на детализированном макете в условиях, приближенным к реальным*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('readyStageTRL', 'stageTRL5')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          • TRL 6: Демонстрация работоспособности технологии на полномасштабном полнофункциональном прототипе в условиях, соответствующих реальности. Если данный уровень успешно пройден, то принимается решение о последующем внедрении технологии в реальные промышленные продукты.*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('readyStageTRL', 'stageTRL6')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          • TRL 7: Прототип системы может быть показан в составе других систем в реальных эксплуатационных условиях.*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('readyStageTRL', 'stageTRL7')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          • TRL 8: Сборка реального устройства, которое тестируется в составе системы в ожидаемых эксплуатационных условиях.*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('readyStageTRL', 'stageTRL8')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          • TRL 9: Реальная демонстрация технологии в ее завершенном виде, после чего принимается решение о серийном выпуске.*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('readyStageTRL', 'stageTRL9')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*      </div>*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        При полной реализации вашего проекта, в какие сроки и каким образом его результаты будут внедрены в экономику Тюменского региона?  <span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('projectDeadline')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        При наличии IP по тематике проекта просим Вас указать простым нумерованным списком в формате "Наименование" \ "Регистрационный номер"<span className="red">*</span></p>*/}
                        {/*      <label className="input-title input-title_column"> </label>*/}
                        {/*      <input className="" type="text" {...getProps('projectIPTitle')} required />*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription registerInput_type flex-column">*/}
                        {/*      <p className="input-title">Команда заявляется как: <span className="red">*</span></p>*/}
                        {/*      <div className="radio_container">*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          Юридическое лицо (организация)*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 defaultChecked={true}*/}
                        {/*                 {...getProps('teamRegisteredAs', 'juridicalOrganization')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          Представители юридического лица (организации)*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('teamRegisteredAs', 'juridicalMembers')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          Физические лица*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('teamRegisteredAs', 'physical')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*      </div>*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription registerInput_type flex-column">*/}
                        {/*      <p className="input-title">*/}
                        {/*        В случае победы в акселераторе и вхождение в число команд, претендующих на получение гранта, команда:*/}
                        {/*        <span className="red">*</span></p>*/}
                        {/*      <div className="radio_container">*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          Готова будет локализовать свои разработки и их результаты в одном из трех регионов НОЦ ( Тюменская область, Ханты-Мансийский автономный округ – Югра, Ямало-Ненецкий автономный округ).*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 defaultChecked={true}*/}
                        {/*                 {...getProps('winCaseResult', 'readyToLocalize')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          Не готова локализовать свои разработки и их результаты в одном из трех регионов НОЦ*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('winCaseResult', 'notReadyToLocalize')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*      </div>*/}
                        {/*    </div>*/}

                        {/*    <div className="column flex-column">*/}
                        {/*      <p className="input-title firstColumn">*/}
                        {/*        Приложите краткую презентацию, не более 12 содержательных слайдов, о вашем проекте, включающую следующую информацию: 1. В чем заключается новизна и инновационность проекта и его идея; 2. Описание технологии и продукта Проекта и его ключевых характеристик; 3. Какие конкретные задачи и проблемы решает технология или продукт; 4. Cравнение с конкурентами; 5. Приблизительное описание рынка для вашего проекта; 6. Кто является потенциальным заинтересованным лицом или заинтересованными лицами в результатах вашего проекта; 7. Приблизительная дорожная карта развития проектов включая его коммерциализацию; 8. Ключевые члены команды и их компетенции; 9. Предложение для оператора ЗИМА 21 в чем заключается цель команды - (продажа технологии, пилотный проект, получение инвестиций, совместный бизнес и др.); 10. При наличии, примеры успешных проектов команды.  <span className="red">*</span></p>*/}
                        {/*      <label className="fileLoaderInput_label">*/}
                        {/*        <input type="file"*/}
                        {/*               className="fileLoaderInput"*/}
                        {/*               {...getProps('presentationFile', '', 'file')}*/}
                        {/*        />*/}
                        {/*      </label>*/}
                        {/*    </div>*/}

                        {/*    <div className="formDescription registerInput_type flex-column">*/}
                        {/*      <p className="input-title">*/}
                        {/*        Напоминаем, что каждый участник проекта до 30 апреля 2021 года должен пройти базовую регистрацию в "Цифровом профиле исследователя" <a*/}
                        {/*        href="http://lab.scienceteam.ru/nocPortal/#/PersonLogin">http://lab.scienceteam.ru/nocPortal/#/PersonLogin</a>*/}
                        {/*        <span className="red">*</span></p>*/}
                        {/*      <div className="radio_container">*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          Команда понимает это требование и обеспечить его выполнение*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 defaultChecked={true}*/}
                        {/*                 {...getProps('isRequirementsAccepted', 'requirementsAccepted')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*        <label className="registerInput_type_label">*/}
                        {/*          Команда не готова выполнить это требование*/}
                        {/*          <input className="registerInput_type_input"*/}
                        {/*                 type="radio"*/}
                        {/*                 {...getProps('isRequirementsAccepted', 'requirementsNotAccepted')}*/}
                        {/*          />*/}
                        {/*          <span className='checkmark' />*/}
                        {/*        </label>*/}
                        {/*      </div>*/}
                        {/*    </div>*/}

                        {/*  </>*/}
                        {/*) : null }*/}


                        <button
                          className="btn btn__red formRegistration_btn"
                          type="submit">
                            Отправить форму
                        </button>
                        
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  )
}
