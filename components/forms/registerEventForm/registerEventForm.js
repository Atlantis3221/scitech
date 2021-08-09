import React, { Fragment, useState } from 'react'


import { RadioGroup } from '../../inputs/inputRadioGroup'
import { InputText } from '../../inputs/inputText'
import { className } from '../../../helpers/className'
import { InputCheckbox } from '../../inputs/inputCheckbox'
import { InputTextarea } from '../../inputs/inputTextarea'
import { InputFile } from '../../inputs/inputFile'
// import { NewsSubscribers } from '../../../collections'
import { InputSelect } from '../../inputs/inputSelect'

export const Field = ({ label, component, desc, isSpeaker, ...props }) => {
  const Com = component
  console.log(props)
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

export const RegisterEventForm = ({
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

    const props = {
      name,
      value: values[name],
      async onChange(e) {

        console.log('onChange')
        
        let value = e.target.value

        if (type === 'file') {
          value = await toBase64(e.target.files[0])
        }
        
        if(name === 'phone') {
          /**
           * это для плагина 
           */
          setValues({
            ...values,
            [name]: e,
          })
        } else {
          setValues({
            ...values,
            [name]: value,
          })
        }
      },
    }

    // console.log('props')
    // console.log(props)
    return props
  }

  console.log('test1')
  console.log(getProps('participantType'))

  return (
    <form
      onSubmit={e => {
        e.preventDefault()

        const payload = {
          ...values,
          option: [...values.option],
        }

        try {
          props.onSubmit(e, payload)
          setIsSend(true)

          // NewsSubscribers
          //   .methods
          //   .insert({email: payload.email, sendpulseBookId: eventType})
          //   .finally(console.log)
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

            <Field
              label={hideParticipant === undefined ? values.participantType === 'individual' ? 'Имя и Фамилия' : 'Организация' : 'Имя и Фамилия'}
              required={true}
              placeholder={hideParticipant === undefined ? values.participantType === 'individual' ? 'Иван Петров' : 'ТюмГУ' : 'Имя и Фамилия'}
              component={InputText}
              {...getProps('name')}
            />
          {showOrganizationField ?
            <Field
              label={'Организация'}
              required={true}
              placeholder={'ТюмГУ'}
              component={InputText}
              {...getProps('organization')}
            />
            : null }
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
            : null }
          {isTheme ?
            <Field
              label={'Тема диссертации'}
              required={true}
              placeholder={'Тема диссертации'}
              component={InputText}
              {...getProps('dissertationTopic')}
            />
            : null}
          {isTraineeship ?
            <Field
              label={'Направление аспирантуры'}
              required={true}
              placeholder={'Направление аспирантуры'}
              component={InputText}
              {...getProps('traineeship')}
            />
            : null}
          {isTraineeshipYear ?
            <Field
              label={'Год аспирантуры'}
              required={true}
              placeholder={'Год аспирантуры'}
              component={InputText}
              {...getProps('traineeshipYear')}
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
        {askIsSpeaker ?
          <Field
            isSpeaker={isSpeaker}
            label=''
            description='Принять участие как спикер'
            component={InputCheckbox}
            required={false}
            {...getProps('isSpeaker')}
          />
        : null}
        {showCommentsField ?
          <Field
            label='Комментарий'
            component={InputTextarea}
            required={true}
            {...getProps('comments')}
          />
        : null }
        {inputFileEsse ?
          <Field
            label='Эссе'
            description="Эссе"
            component={InputFile}
            required={true}
            {...getProps('inputFileEsse')}
          />
         : null}
          {inputFileCV ?
            <Field
              label='CV'
              description="CV"
              component={InputFile}
              required={true}
              {...getProps('inputFileCV')}
            />
            : null}
        <Field
          label=''
          description='Даю согласие на обработку персональных данных, описанную в '
          linkToPolicy="Политике обработки персональных данных"
          required={true}
          component={InputCheckbox}
          {...getProps('personalData')}
        />
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
          <p>{askAQuestion ? 'Ожидайте ответа': 'До встречи на мероприятии!'}</p>
        </div>
      </div>
      )}
    </form>
  )
}