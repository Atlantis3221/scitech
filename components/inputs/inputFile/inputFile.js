import React from 'react'


export function InputFile(props) {
  const { description = 'common', state = {}, setState = (args) => {}, name} = props

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
      <input
        style={{ backgroundColor: 'unset' }}
        type='file'
        name={name}
        required
        onChange={(e) => {
          console.log(e.target?.files?.[0])
          setState({
            ...state,
            [name]: e.target?.files?.[0]
          })
        }}
      />
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
