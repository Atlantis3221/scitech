import { IRegModalInput } from '../components/modals/ModalContext'

export const robots2humans: Map<IRegModalInput, string> = new Map([
    [ 'participationType', 'Форма собственности' ],
    [ 'name', 'Имя' ],
    [ 'role', 'Должность' ],
    [ 'amount', 'Количество участников' ],
    [ 'theme', 'Тема' ],
    [ 'phone', 'Телефон' ],
    [ 'email', 'Email' ],
    [ 'policy', 'Дал согласие на обработку данных' ],
    [ 'company', 'Организация' ],

  // ?
  //   [ 'additionalAttendee', 'Дополнительный участник' ],
  //   [ 'type', 'Тип участия' ],
  //   [ 'isSpeaker', 'Принял участие как спикер' ],
  //   [ 'dissertationTopic', 'Тема диссертации' ],
  //   [ 'traineeship', 'Направление аспирантуры' ],
  //   [ 'comments', 'Комментарий / Вопрос' ],
  //   [ 'applicationType', 'Форма заявки' ],
]);
