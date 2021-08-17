import { IRegModalInput } from '../components/modals/ModalContext'

export const robots2humans: Map<IRegModalInput, string> = new Map([
    [ 'participationType', 'Тип участия' ],
    [ 'name', 'Имя' ],
    [ 'role', 'Должность' ],
    [ 'amount', 'Количество участников' ],
    [ 'theme', 'Тема' ],
    [ 'phone', 'Телефон' ],
    [ 'email', 'Email' ],
    [ 'confidential', 'Дал согласие на обработку данных' ],
    [ 'company', 'Организация' ],
    [ 'speaker', 'Принял участие как спикер' ],

  // ?
  //   [ 'additionalAttendee', 'Дополнительный участник' ],
  //   [ 'type', 'Тип участия' ],
  //   [ 'dissertationTopic', 'Тема диссертации' ],
  //   [ 'traineeship', 'Направление аспирантуры' ],
  //   [ 'comments', 'Комментарий / Вопрос' ],
  //   [ 'applicationType', 'Форма заявки' ],
]);
