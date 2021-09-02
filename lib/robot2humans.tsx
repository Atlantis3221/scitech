import { IRegModalInput } from '../components/modals/ModalContext'

export const robots2humans: Map<IRegModalInput, string> = new Map([
    [ 'participationType', 'Тип участия' ],
    [ 'name', 'Имя' ],
    [ 'role', 'Должность' ],
    [ 'amount', 'Количество участников' ],
    [ 'theme', 'Тема диссертации' ],
    [ 'phone', 'Телефон' ],
    [ 'email', 'Email' ],
    [ 'confidential', 'Дал согласие на обработку данных' ],
    [ 'company', 'Организация' ],
    [ 'speaker', 'Принял участие как спикер' ],
    [ 'year', 'Год аспирантуры' ],
    [ 'speciality', 'Направление аспирантуры' ],
    [ 'comment', 'Комментарий' ],
    [ 'file', 'Файл' ],

  // ?
  //   [ 'additionalAttendee', 'Дополнительный участник' ],
  //   [ 'comments', 'Комментарий / Вопрос' ],
  //   [ 'applicationType', 'Форма заявки' ],
]);
