import React from 'react'
import { EventItem, EventItem_Container } from '../../components/eventItem'

export function Day24() {
  return (
    <div className='day' id='24'>
      <div className='event'>
        <h4>
          <b>Секция 1:</b> Роль экологической ситуации Обь-иртышского речного бассейна в трансформации Арктики
          (Ob’&Irtysh catchment area as a driver of change in the Arctic)
        </h4>
        <div className='videoContainer'>
          <iframe
            src='//vk.com/video_ext.php?oid=-29346&id=456239356&hash=ce3458df3ea3da46&hd=2'
            width='853'
            height='480'
            frameBorder='0'
            allowFullScreen
          />
        </div>
        <br />
        <EventItem_Container>
          <EventItem date='10:00 – 10:05' title='Greetings (модератор Henry Burgess (BAS))'></EventItem>
          <EventItem
            date='10:00 – 10:05'
            title='Открытая лекция: The United Kingdom and international Arctic research cooperation – developments and new opportunities'
          >
            Henry Burgess, the Head of the NERC Arctic Office (British Antarctic Survey) in Cambridge
          </EventItem>
          <EventItem date='10:45 – 11:05' title='Questions & discussion'></EventItem>
          <EventItem
            date='11:05 – 11:25'
            title='Доклад: Peatland Hydrology – Importance for ecosystem functioning, carbon cycle, and water resources'
          >
            Jelmer J. Nijp, Researcher of the Ecohydrology Department, KWR Water Research Institute Nieuwegein (The
            Netherlands)
          </EventItem>
          <EventItem date='11:25 – 11:40' title='Questions & discussion'></EventItem>
          <EventItem
            date='11:40 – 11:55'
            title='Доклад: The Impact of non-point sources on surface water petroleum hydrocarbons pollution (case of Western Siberia, Russia)'
          >
            Vitaliy Khoroshavin, the Director of the Institute of Earth Sciences, University of Tyumen
          </EventItem>
          <EventItem date='11:55 – 12:05' title='Questions & discussion'></EventItem>
          <EventItem
            date='12:05 – 12:20'
            title='Доклад: Крупномасштабное ландшафтное дешифрирование участков нефтегазового освоения'
          >
            Ильдар Идрисов, зав.каф. картографии и ГИС Института наук о Земле ТюмГУ
          </EventItem>
          <EventItem date='12:20 – 12:30' title='Questions & discussion'></EventItem>
          <EventItem
            date='12:30 – 12:50'
            title='Доклад: Climate change impact on hydropower, irrigated agriculture and coastal floods'
          >
            Charalampos Skoulikaris, School of Civil Engineering, Aristotle University of Thessaloniki (Greece)
          </EventItem>
          <EventItem date='12:50 – 13:00' title='Questions & discussion'></EventItem>
          <EventItem
            date='13:00 – 13:20'
            title='Впечатления и мнения руководства ШНЛ, слушателей, вовлеченных экспертов'
          ></EventItem>
          <EventItem date='13:20 – 13:30' title='Conclusion'>
            Henry Burgess, the Head of the NERC Arctic Office (British Antarctic Survey) in Cambridge
          </EventItem>
        </EventItem_Container>
      </div>
      <br />
      <div className='event'>
        <h4>
          <b>Секция 2:</b> «Легенды и легендарные народы Севера»
        </h4>
        <br />
        <div className='timeline'>
          <EventItem_Container>
            <EventItem date='14:40 – 15:00' title='Обсуждение. Вопросы'></EventItem>
          </EventItem_Container>
          <br />
          <h4>Семинар «Легенды и легендарные народы Севера» Модератор Мешалкина М.А.</h4>
          <br />
          <EventItem_Container>
            <EventItem
              date='15:00 – 15:15'
              title='Доклад «Признаки народа сихиртя и их отражение в археологических материалах Севера»'
            >
              Ткачев А.А., к.и.н., доцент ТюмГУ
            </EventItem>
            <EventItem date='15:15 – 15:25' title='Обсуждение'></EventItem>
            <EventItem
              date='15:25 – 15:40'
              title='Доклад «А были ли сихиртя? Лингвистический анализ ненецкого фольклорного корпуса»'
            >
              Дрожащих Н.В., д.ф.н., доцент ТюмГУ, Люблинская М.В., д.ф.н., с.н.с. ИЛИ РАН, лингвист Ефимова Е.А.
            </EventItem>
            <EventItem date='15:40 – 15:50' title='Обсуждение'></EventItem>
            <EventItem
              date='15:50 – 16:10'
              title='Доклад «Использование подземного пространства в культуре человека на территории Европы и Азии»'
            >
              Агапов И.А., действительный член РГО, член Российского союза спелеологов
            </EventItem>
            <EventItem date='16:10 – 16:20' title='Обсуждение'></EventItem>
            <EventItem
              date='16:20 – 16:40'
              title='Доклад «Трудный путь к легенде. Использование специальной техники в экспедиционной деятельности»'
            >
              Юркина М.Д., Вороной Р.В. представители Ассоциации Русское вездеходное общество
            </EventItem>
            <EventItem date='16:40 – 16:50' title='Обсуждение'></EventItem>
            <EventItem
              date='16:50 – 17:05'
              title='Доклад «Результаты и перспективы археологического изучения Тазовского Заполярья»'
            >
              Ткачев А.А., д.и.н., профессор, заведующий сектором археологии Института проблем освоения Севера ТюмНЦ СО
              РАН
            </EventItem>
            <EventItem date='17:05 – 17:15' title='Обсуждение'></EventItem>
            <EventItem date='17:15 – 17:30' title='Доклад «Дендрохронология средневекового Севера»'>
              Филатова М.О., м.н.с. лаборатории «PaleoData» Отдел геохронологии кайнозоя Институт археологии и
              этнографии СО РАН
            </EventItem>
            <EventItem date='17:30 – 17:40' title='Обсуждение'></EventItem>
          </EventItem_Container>
        </div>
      </div>
    </div>
  )
}
