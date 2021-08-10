import React, { useContext } from "react"
import ModalsContext, { Colors } from "../ModalContext"
import ModalOverlay from "../ModalOverlay"
import { RadioGroup } from '../../inputs/inputRadioGroup'
import { InputText } from '../../inputs/inputText'
import { className } from '../../../helpers/className'
import { InputCheckbox } from '../../inputs/inputCheckbox'
import { InputTextarea } from '../../inputs/inputTextarea'
import { InputFile } from '../../inputs/inputFile'

const RegModal = () => {
    const modal = "reg"
    const {modalService, modalsState, regModalState} = useContext(ModalsContext)
    const isOpen = modalsState[modal]
    
    return (
        <ModalOverlay modal={modal}>
            <div         
            onClick={(e) => {
                e.stopPropagation()
            }}
            onMouseUp={(e) => {
                e.stopPropagation()
            }}
            style={{
                backgroundColor: Colors[regModalState]
            }}
            className={`
            overflow-y-auto max-w-3xl w-full h-full relative z-50 bg-white 
            ${isOpen ? "opacity-100 visible scale-100" : "opacity-10 invisible scale-75"}
            transistion-all duration-300 transform origin-center
            pt-14 px-6 md:px-14 pb-10`}>

              <div className='registerEventForm'>
                  <div className='registerEventForm_title'>{'Registration to'}</div>

                  <form className='form'>
                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Тип участия</span>
                        </div>
                        <RadioGroup
                          id="participantType"
                          required={true}
                          options={[
                            { _id: 1, title: 'Индивидуальное', value: 'individual' },
                            { _id: 2, title: 'Групповое', value: 'group' },
                          ]}
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Организация</span>
                        </div>
                        <InputText
                          id="organization"
                          required={true}
                          placeholder="ТюмГУ"
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Имя и Фамилия</span>
                        </div>
                        <InputText
                          id="name"
                          required={true}
                          placeholder="Иван Петров"
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Должность</span>
                        </div>
                        <InputText
                          id="situation"
                          required={true}
                          placeholder="Руководитель научных проектов"
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Количество человек</span>
                        </div>
                        <InputText
                          id="situation"
                          required={true}
                          placeholder="Например, 20-30"
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Тема диссертации</span>
                        </div>
                        <InputText
                          id="dissertationTopic"
                          required={true}
                          placeholder="Тема диссертации"
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Направление аспирантуры</span>
                        </div>
                        <InputText
                          id="traineeship"
                          required={true}
                          placeholder="Направление аспирантуры"
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Год аспирантуры</span>
                        </div>
                        <InputText
                          id="traineeshipYear"
                          required={true}
                          placeholder="Год аспирантуры"
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Телефон</span>
                        </div>
                        <InputText
                          id="phone"
                          required={true}
                          phoneNumber={true}
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Email</span>
                        </div>
                        <InputText
                          id="email"
                          required={true}
                          placeholder="example@gmail.com"
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label className="form_label__isSpeaker">
                        <div className='form_labelContainer'> </div>
                        <InputCheckbox
                          id="isSpeaker"
                          required={false}
                          description="Принять участие как спикер"
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Комментарий</span>
                        </div>
                        <InputTextarea
                          id="comments"
                          required={true}
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>Эссе</span>
                        </div>
                        <InputFile
                          id="inputFileEsse"
                          required={true}
                          description="Эссе"
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'>
                          <span>CV</span>
                        </div>
                        <InputFile
                          id="inputFileCV"
                          required={true}
                          description="CV"
                        />
                      </label>
                      <br />
                    </div>

                    <div>
                      <label>
                        <div className='form_labelContainer'> </div>
                        <InputCheckbox
                          id="personalData"
                          required={true}
                          description="Даю согласие на обработку персональных данных, описанную в "
                          linkToPolicy="Политике обработки персональных данных"
                        />
                      </label>
                      <br />
                    </div>


                    <div>
                      <button type='submit' className='registerEventForm_button'>
                        Отправить
                      </button>
                    </div>
                  </form>
              </div>
            </div>
        </ModalOverlay>
    )
}

export default RegModal