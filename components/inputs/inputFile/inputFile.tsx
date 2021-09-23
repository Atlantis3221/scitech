import React, { useState } from 'react'

type IPropsInputFile = {
  description: string;
  state: Object;
  setState: any;
  name: string;
  accept?: string;
}

export function InputFile(props: IPropsInputFile) {
  const {
    description = 'common',
    state = {},
    setState = (args) => {},
    name = "upload",
    accept = "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  } = props
  const [sizeError, setSizeError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const descriptions = {
    resume: 'Выбрать файл (doc. или pdf.)',
    esse: 'Имя файла должно быть в формате ФамилияИО_эссе',
    teamList: 'Для каждого участника укажите ФИО, должность, email и номер телефона. Имя файла должно быть в формате Огранизация_проект.xls',
    teamPresentation: 'Имя файла должно быть в формате Организация_презентация',
    common: 'Имя файла должно быть в формате ФамилияИО_CV',
  }

  return (
    <div className='inputFile_container'>
      <span>{descriptions[description]}</span>
      <div className="flex">
        {isLoading ?
            <div className="m-0 p-0 mr-1" style={{ width: '2rem' }}>
              <img className={`w-full h-full`} src="/img/icons/spiner.gif" loading="lazy" alt="spiner" />
            </div>
          : null}
          <input
            style={{ backgroundColor: 'unset' }}
            type='file'
            name={name}
            required
            accept={accept}
            onChange={(e) => {
              if (!/(pdf|doc|docx)/.test(e.target?.files[0].type)) {
                setTypeError(true)
                setSizeError(false)
                return
              }
              if (e.target?.files[0].size > 5000102) {
                setSizeError(true)
                setTypeError(false)
                return
              } else {
                setTypeError(false)
                setSizeError(false)
                setIsLoading(true)
                setTimeout(() => {
                  setIsLoading(false)
                  setState({
                    ...state,
                    [name]: e.target?.files?.[0]
                  })
                }, 700)
              }
            }}
          />
      </div>
      <span className="text-blue-400 font-bold">
        {sizeError && 'Файл слишком большой!'}
        {typeError && 'Файл должен быть формата pdf или doc'}
      </span>
    </div>
  )
}

InputFile.emptyValue = ''


// import React, {useState} from 'react'
// import './inputFile.less'
//
// export function InputFile(props) {
//   const { name, required,  description = 'эссе'} = props
//
//   const [files, setFiles] = useState([{name: ''}]);
//
//   const patchOnChangeAndForward = e => {
//     const fileList = [];
//     for (let i = 0; i < e.target.files.length; i++) {
//       fileList.push(e.target.files[i]);
//     }
//     setFiles(fileList);
//   }
//
//   return (
//     <div className='inputFile_container'>
//       <div className='inputFile_description'>Имя файла должно быть в формате ФамилияИО_{description}</div>
//       <div className="inputFile_wrap">
//         <input
//           className='inputFile'
//           type='file'
//           required={required}
//           name={name}
//           onChange={patchOnChangeAndForward}
//         />
//         <span className="inputFile_icon">выбрать файл</span>
//         <span className="inputFile_label">{files.map(el => el.name)}</span>
//       </div>
//     </div>
//   )
// }
//
// InputFile.emptyValue = false
