import React from 'react'
import { EventItem, EventItem_Container } from '../../components/eventItem'

export function Day28() {
  return (
    <div className='day' id='28'>
      <div className='event'>
        <h4>«Внедрение зеленых технологий в устойчивое развитие Арктики»</h4>
        <div className='videoContainer'>
          <iframe
            src='//vk.com/video_ext.php?oid=-29346&id=456239368&hash=8d431a7d2fb081d3&hd=3'
            width='1280'
            height='720'
            frameBorder='0'
            allowFullScreen
          />
        </div>
        <br />
        <p className='flex'>
          <span>
            <img src='/img/download.svg' alt='icon' />
          </span>
          <a href='/internetionalConf/crowdfunding.pdf' download>
            Краудфандинг
          </a>
        </p>
        <p className='flex'>
          <span>
            <img src='/img/download.svg' alt='icon' />
          </span>
          <a href='/internetionalConf/Доклад по ценностям на конференции.pdf' download>
            Доклад по ценностям на конференции
          </a>
        </p>
        <p className='flex'>
          <span>
            <img src='/img/download.svg' alt='icon' />
          </span>
          <a href='/internetionalConf/Зеленые практики инновация и драйвер развития.pdf' download>
            Зеленые практики инновация и драйвер развития
          </a>
        </p>
        <p className='flex'>
          <span>
            <img src='/img/download.svg' alt='icon' />
          </span>
          <a href='/internetionalConf/Презентация по зеленым практикам.pdf' download>
            Презентация по зеленым практикам
          </a>
        </p>
        <div className='timeline'>
          <EventItem_Container>
            <EventItem date='08:45 – 09:00' title='Подключение участников'></EventItem>
            <EventItem date='09:00 – 09:05' title='Открытие секции. Приветственное слово к участникам'>
              Бобылев Сергей Николаевич, зав.кафедрой экономики природопользования, Экономический факультет МГУ им.
              М.В.Ломоносова, профессор, д.э.н., Руководитель Центра биоэкономики и эко-инноваций при МГУ им.
              М.В.Ломоносова, Заслуженный деятель науки РФ, Академик РАЕН и РЭА (Москва, Россия)
            </EventItem>
            <EventItem
              date='09:05 – 09:20'
              title='Оценка устойчивого развития Арктического региона. Методология и проблемы
							практического применения рейтингов «Полярный индекс. Компании», «Полярный индекс.
							Регионы», «Полярный индекс Баренц-Региона»'
            >
              Никоноров Сергей Михайлович, д.э.н., профессор. Руководитель проектной группы «Полярный индекс» профессор
              кафедры экономики природопользования экономического факультета МГУ им М.В. Ломоносова (Москва, Россия)
            </EventItem>
            <EventItem date='09:20 – 09:35' title='Обсуждение'></EventItem>
            <EventItem
              date='09:35 – 09:50'
              title='Системная экономика для финансовой устойчивости Арктических компаний'
            >
              Стеблянская Алина Николаевна, PhD, Assoc. Prof., Institute of Economics and Management, Harbin Engineering
              University (Harbin, China)
            </EventItem>
            <EventItem date='09:50 – 10:05' title='Обсуждение'></EventItem>
            <EventItem date='10:05 – 10:20' title='Устойчивое развитие Арктики: взгляд из Европы'>
              Рахимова Неля Рафхатовна PhD (Dr.rer.nat.), профессор географического факультета Технического университета
              Дрездена, лидер проекта «Открытая школа устойчивого развития» (Дрезден, Германия)
            </EventItem>
            <EventItem date='10:20 – 10:35' title='Обсуждение'></EventItem>
            <EventItem date='10:35 – 10:50' title='Роль «зеленого» фактора в устойчивом развитии российской Арктики'>
              Терентьев Николай Евгеньевич, кандидат экономических наук, старший научный сотрудник ИНП РАН (Москва,
              Россия)
            </EventItem>
            <EventItem date='10:50 – 11:05' title='Обсуждение'></EventItem>
            <EventItem
              date='11:05 – 11:20'
              title='«Зеленые» технологии в практике российских предприятий: вопросы типологизации, регулирования и применения'
            >
              Притужалова Ольга Александровна, кандидат географических наук PhD (Dr.rer.nat.), доцент, доцент кафедры
              геоэкологии и природопользования ТюмГУ (Тюмень, Россия)
            </EventItem>
            <EventItem date='11:20 – 11:35' title='Обсуждение'></EventItem>
            <EventItem
              date='11:35 – 11:50'
              title='Экономическая оценка применения наилучших доступных технологий снижения выбросов
							черного углерода в условиях российской Арктики.'
            >
              Акишин Дмитрий Александрович, кандидат экономических наук, директор практики «Газ и химия» VYGON
              Consulting (Москва, Россия)
            </EventItem>
            <EventItem date='11:50 – 12:05' title='Обсуждение'></EventItem>
            <EventItem
              date='12:05 – 12:20'
              title='О программах поддержки инновационного предпринимательства в Тюменской области'
            >
              Остроумов Леонид Сергеевич, директор департамента инвестиционной политики и господдержки
              предпринимательства Тюменской области (Тюмень, Россия)
            </EventItem>
            <EventItem date='12:20 – 12:35' title='Обсуждение'></EventItem>
            <EventItem date='12:35 – 12:50' title='Заключительное слово. Закрытие работы секции'>
              Бобылев Сергей Николаевич
            </EventItem>
          </EventItem_Container>
        </div>
      </div>
      <br />
      <div className='event'>
        <h4>Группа «Цифровизация мудрости»</h4>
        <br />
        <div className='timeline'>
          <EventItem_Container>
            <EventItem
              date='14:00 – 14:25'
              title='Открытие конференции. Традиция изучения мудрости в зарубежной и отечественной психологии'
            >
              Мехтиханова Н.Н, к.пс.н., доцент (ЯрГУ)
            </EventItem>
            <EventItem
              date='14:25 – 14:55'
              title='1-Исследование мудрости в работах Л.И. Анцыферовой.
							2- Имплицитные представления о мудрости: возрастные различия'
            >
              Никитина Е.А., к.пс.н. научный сотрудник (ИП РАН)
            </EventItem>
            <EventItem date='14:55 – 15:20' title='Мудрость в деятельности предпринимателей: от личности к нейросети'>
              Мурзина Ю.С., к.пс.н., доцент (ТюмГУ)
            </EventItem>
            <EventItem date='15:20 – 15:40' title='Спорт и мудрость'>
              Андреева Юлия, PhD, Assoc. Prof., Physiotherapist (Университет Клайпеды, Литва)
            </EventItem>
            <EventItem
              date='15:40 – 16:10'
              title='Мудрость в Библии. Мудрость в Коране. Мудрость в представлениях современной молодежи России'
            >
              Шитиков П.М., к.фил.н., доцент Иброгимов М., аспирант Вершинина С.В., к.экон.н., доцент (ТюмГУ)
            </EventItem>
            <EventItem date='16:10 - 16:30' title='Опыт использования и создания систем поддержки принятия решений'>
              Нестерова О.А., к.техн.н., доцент ТюмГУ; Шитов И., специалист по информационной безопасности
            </EventItem>
            <EventItem date='16:30 - 16:40' title='Подведение итогов'>
              Мехтиханова Н.Н, к.пс.н., доцент ЯрГУ
            </EventItem>
            <EventItem date='16:40 - 17:00' title='Перерыв'></EventItem>
            <EventItem
              date='17:00 - 18:00'
              title='Открытая лекция: «Wisdom Science in a Polarized World: Knowns and Unknowns» (in English)'
            >
              Igor Grossmann, Ph.D., Associate Professor Department of Psychology, University of Waterloo, Canada
            </EventItem>
          </EventItem_Container>
        </div>
      </div>
    </div>
  )
}
