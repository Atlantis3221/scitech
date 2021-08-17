import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import { SpeakerCards, SpeakerCard } from '../../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../../components/schoolProject'
import { StrongText } from '../../../components/strongText'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../../i18n/translator'

export default function DLLProject({ modalForm }) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout style={{
        backgroundImage: 'url(/img/gradients/school_gradient_viol.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '120% -10%',
      }} modalFormText={modalForm}>
        <Helmet>
          <meta name="description" content='Digital Lean-Lab (DLL): электронная образовательная платформа' />
          <meta name="keywords" content='проект школы руководителей научно-технических проектов центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/managementSchoolProjects/DLLProject`} />
          <meta property="og:title" content='Digital Lean-Lab (DLL): электронная образовательная платформа' />
          <meta property="og:description" content='проект школы руководителей научно-технических проектов центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Digital Lean-Lab (DLL): электронная образовательная платформа</title>
          <link rel="canonical" href={`https://scitech.ru/managementSchoolProjects/DLLProject`} />
        </Helmet>

        <div className='show wrapper_hero'>
          <div className='container relative'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>проект школы руководителей научно-технических проектов
                  </p>
                  <p className='asideMarker'>поток 2019–2020</p>
                </li>
                <li className='i3_9'>
                  <h1>Digital Lean-Lab (DLL): электронная образовательная платформа</h1>
                  <img className="pt2 mb0" src="/img/managementSchoolProjects/DLLProject.png"
                       alt="Digital Lean-Lab (DLL): электронная образовательная платформа" />
                  <div className="mt_big">
                    <h4 className="raleway"><StrongText>Профиль:</StrongText> бизнес-образование, корпоративное и
                      индивидуальное онлайн-обучение бережливому управлению.</h4>
                    <h4 className="raleway"><StrongText>Продукт:</StrongText> Электронная платформа обучения бережливому
                      управлению «Digital Lean-Lab (DLL)», включающая онлайн-модули корпоративного и индивидуального
                      трека.
                    </h4>
                    <h4 className="raleway"><StrongText>Содержание платформы:</StrongText></h4>
                    <h4>1) Регистрация на электронной платформе DDL;</h4>
                    <h4>2) Матрица Lean-компетенций «на входе»;</h4>
                    <h4>3) Матрица онлайн-курсов и модулей;</h4>
                    <h4>4) Разработка Lean-проекта с доступом к бизнес-кейсам;</h4>
                    <h4>5) Консультации Lean-тренера;</h4>
                    <h4>6) Матрица Lean-компетенций «на выходе».</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show wrapper_speakers'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Команда</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo="/img/managementSchoolProjects/irina_takmasheva.png"
                                 fullName="Ирина Такмашева"
                                 email="d-lembert@mail.ru"
                    >
                      Лидер проекта, коммуникатор по проекту
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/evgenij_evlanov.png"
                                 fullName="Евгений Евланов"
                    >
                      Менеджер, экономист проекта
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/alexandr_paramzin.png"
                                 fullName="Александр Парамзин"
                    >
                      Программист, разработчик платформы
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/olesya_aladko.png"
                                 fullName="Олеся Аладко"
                    >
                      Лин-технолог, методолог, сертифицированный тренер
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/larisa_utyusheva.png"
                                 fullName="Лариса Утюшева"
                    >
                      Маркетолог, продажи в интернете
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/egor_safonov.png"
                                 fullName="Егор Сафонов"
                    >
                      Программист, проектировщик, разработчик платформы и сценариев
                    </SpeakerCard>
                  </SpeakerCards>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Фандрайзинг</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12 mt_half'>
                          <StrongText>Предполагаемые экономические и социальные эффекты проекта:</StrongText>
                          <p>- Создание конкурентоспособной на мировой арене инновационной EdTech-компании.
                          </p>
                          <p>- Развитие платформенных решений: появление двуязычной (английский, русский языки) образовательной платформы Lean-менеджмента.</p>
                          <p>- Преодоление «компетентностной ямы», которая в России оценивается экспертами в 33,9 миллиона человек.</p>
                          <p>- Развитие культуры бережливого управления в отечественных компаниях.</p>
                          <p>- Количество созданных высокотехнологичных компаний: 1.</p>
                          <p>- Количество новых высокотехнологичных рабочих мест: 25.</p>
                          <p>- Объем выполненных услуг: 50 млн руб.</p>
                          <p>- Привлечено средств инвесторов: 36 млн руб.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>руководитель</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo="/img/managementSchoolProjects/irina_takmasheva.png"
                                 fullName="Ирина Такмашева"
                                 email="d-lembert@mail.ru"
                    >
                      Лидер проекта, коммуникатор по проекту
                    </SpeakerCard>
                  </SpeakerCards>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_mt1'>другие проекты первого потока</p>
                </li>
                <li className='i3_9'>
                  <SchoolProject>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/ElectroBase.png'
                      link="/managementSchoolProjects/ElectroBase"
                    >
                      Мобильная многофункциональная электрическая платформа с дистанционным управлением ElectroBase
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/FaceDrive.png'
                      link="/managementSchoolProjects/FaceDrive"
                    >
                      FaceDrive - Услуга по идентификации водителя транспортного средства путём распознавания его лица
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/BioPlantsSecure.png'
                      link="/managementSchoolProjects/BioPlantsSecure"
                    >
                      Интеллектуальная система биологической защиты растений
                    </SchoolProject_Card>
                  </SchoolProject>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  )
}

export async function getServerSideProps(ctx) {
  const {current} = Translator("test", ctx.params.lang)

  return {
    props: { current: current["test"], modalForm: current["modalForm"]  },
  }
}