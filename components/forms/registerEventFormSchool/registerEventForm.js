import React, { Fragment, useState } from 'react'

import './registerEventForm.less'
import { RadioGroup } from '../../inputs/inputRadioGroup'
import { InputText } from '../../inputs/inputText'
import { className } from '../../../helpers/className'
import { InputCheckbox } from '../../inputs/inputCheckbox'
import { InputTextarea } from '../../inputs/inputTextarea'
import { InputFile } from '../../inputs/inputFile'
// import { Forms} from '../../../collections'
import { InputSelect } from '../../inputs/inputSelect'

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

export const Field = ({ label, component, desc, isSpeaker, ...props }) => {
  const Com = component
  return (
    <div>
      <label className={isSpeaker ? 'form_label__isSpeaker' : null}>
        <div className='form_labelContainer'>
          <span>{label}</span>
          {desc && <span className='form_labelDescription'>{desc}</span>}
        </div>
        <Com {...props} />
      </label>
      <br />
    </div>
  )
}

export const RegisterEventFormSchool = ({
                                          hideParticipant,
                                          hideSituation,
                                          isTheme,
                                          isTraineeship,
                                          isTraineeshipYear,
                                          individual,
                                          askIsSpeaker,
                                          isSpeaker,
                                          showCommentsField,
                                          showOrganizationField,
                                          askAQuestion,
                                          eventType,
                                          applicationType,
                                          inputFileEsse,
                                          inputFileCV,
                                          ...props
                                        }) => {

  const initialValues = {
    participantType: 'individual',
    applicationType: '',
    name: '',
    situation: '',
    phone: '',
    email: '',
    dissertationTopic: '',
    traineeship: '',
    traineeshipYear: '',
  }

  const [values, setValues] = useState({
    ...initialValues,
    type: 'listener',
    option: new Set(),
  })
  const [isSend, setIsSend] = useState(false)

  const getProps = (name, type) => {

    if (type === 'file') {

      const props = {
        name,
        async onChange(e) {

           const value = await toBase64(e.target.files[0])
            console.log('Type ===== file')
            console.log(value)
          setValues({
            [name]: value,
          })
          console.log(values)
        },
      }
      return props

    } else {
      const props = {
        name,
        onChange(e) {

          setValues({
            ...values,
            [name]: e.target.value,
          })
        },
      }
      return props
    }
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const payload = {
          ...values,
          option: [...(values?.option || [] ) ],
        }
        console.log(payload)

        try {
          props.onSubmit(e, payload)

          setIsSend(true)
          // setIsSend(true)

          // NewsSubscribers
          //   .methods
          //   // .insert({ email: payload.email, sendpulseBookId: eventType })
          //   .finally(console.log)

          // Forms.methods.insert({type: 'form1', payload: payload})
        } catch (e) {
          alert(e)
        }

      }}
      className={className('form', ['mark'], props)}
    >

      {isSend !== true ? (
        <>
          {hideParticipant === false ?
            <Field
              label='Тип участия'
              component={RadioGroup}
              options={[
                { _id: 1, title: 'Индивидуальное', value: 'individual' },
                { _id: 2, title: 'Групповое', value: 'group' },
              ]}
              {...getProps('participantType')}
            />
            : null
          }

          {
            values.participantType === 'individual'
              ?
              <Fragment>
                <Field
                  label={'Имя и Фамилия'}
                  required={true}
                  placeholder={'Иван Петров'}
                  component={InputText}
                  {...getProps('name')}
                />
                <Field
                  label={'Организация'}
                  required={true}
                  placeholder={'ТюмГУ'}
                  component={InputText}
                  {...getProps('organization')}
                />
              </Fragment>
              :
              <Fragment>
                <Field
                  label={'Организация'}
                  required={true}
                  placeholder={'Иван Петров'}
                  component={InputText}
                  {...getProps('name')}
                />
                <Field
                  label={'Имя и фамилия автора заявки'}
                  required={true}
                  placeholder={'ТюмГУ'}
                  component={InputText}
                  {...getProps('organization')}
                />
              </Fragment>
          }

          {!hideSituation ?
            <Field
              label={individual ? 'Должность'
                : hideParticipant === undefined ?
                  values.participantType === 'individual' ? 'Должность'
                    : 'Количество человек' : 'Организация'}
              required={true}
              placeholder={individual ? 'Руководитель научных проектов'
                : hideParticipant === undefined ?
                  values.participantType === 'individual' ? 'Руководитель научных проектов'
                    : 'Например, 20-30' : 'Организация'}
              component={InputText}
              {...getProps('situation')}
            />
            : null}

          <Field
            label='Телефон'
            required={true}
            placeholder='+ 7 (999) 999-99-99'
            phoneNumber={true}
            component={InputText}
            {...getProps('phone')}
          />
          <Field
            label='Email'
            required={true}
            placeholder='example@gmail.com'
            component={InputText}
            {...getProps('email')}
          />

          {
            values.participantType === 'individual'
              ?
              <Fragment>
                <Field
                  label='Эссе'
                  description="Эссе"
                  component={InputFile}
                  required={true}
                  {...getProps('inputFileEsse', 'file')}
                />
                <Field
                  label='CV'
                  description="CV"
                  component={InputFile}
                  required={true}
                  {...getProps('inputFileCV', 'file')}
                />
              </Fragment>
              :
              <Fragment>
                <Field
                  label='Список команды'
                  description="Список команды"
                  component={InputFile}
                  required={true}
                  {...getProps('inputFileEsse', 'file')}
                />
                <Field
                  label='Презентация команды'
                  description="Презентация команды"
                  component={InputFile}
                  required={true}
                  {...getProps('inputFileCV', 'file')}
                />
              </Fragment>
          }
          {/*<Field*/}
          {/*  label=''*/}
          {/*  description='Даю согласие на обработку персональных данных, описанную в '*/}
          {/*  linkToPolicy="Политике обработки персональных данных"*/}
          {/*  required={true}*/}
          {/*  component={InputCheckbox}*/}
          {/*  {...getProps('personalData')}*/}
          {/*/>*/}
          <div>
            <button type='submit' className='registerEventForm_button'>
              Отправить
            </button>
          </div>
        </>
      ) : (
        <div className='isSend'>
          <div className='isSend_content'>
            <div className='isSend_icon' />
            <p className='isSend_text'>Спасибо, Ваши данные отправлены</p>
            <p>{askAQuestion ? 'Ожидайте ответа' : 'До встречи на мероприятии!'}</p>
          </div>
        </div>
      )}
    </form>
  )
}