// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface IEmployersFields {
  /** Наименование работодателя */
  name: string

  /** Изображение работодателя */
  image: Asset

  /** Адрес работодателя */
  address?: string | undefined

  /** Короткое имя работодателя */
  shortName?: string | undefined

  /** Описание работодателя */
  description?: Document | undefined

  /** URL работодателя */
  url: string
}

export interface IEmployers extends Entry<IEmployersFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'employers'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IGrantsFields {
  /** Описание */
  description?: Document | undefined

  /** Обложка */
  image?: Asset | undefined

  /** Средства */
  price?: string | undefined

  /** Наименование */
  title?: string | undefined

  /** Ссылка */
  link?: string | undefined

  /** Отображение на главной */
  order?: number | undefined

  /** Дедлайн */
  deadline?: string | undefined

  /** Тип */
  type?: 'Грант' | 'Конкурс' | 'Фестиваль' | 'Премия' | undefined
}

export interface IGrants extends Entry<IGrantsFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'grants'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface INewsFields {
  /** Название новости */
  title?: string | undefined

  /** url */
  url?: string | undefined

  /** Текст новости */
  body?: Document | undefined

  /** Обложка новости */
  front?: Asset | undefined

  /** Это новость из СМИ? */
  isSmi?: boolean | undefined

  /** Показывать в верхней строке новостей? */
  isShownInNewsTopLine?: boolean | undefined

  /** Дата новости */
  date?: string | undefined

  /** test */
  test?: Document | undefined

  /** Проекты */
  projects?: string[] | undefined

  /** Убрать из списка новостей "СМИ о нас"? */
  hiddenFromAllNews?: boolean | undefined
}

export interface INews extends Entry<INewsFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'news'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IVacanciesFields {
  /** Наименование вакансии */
  vacancyName: string

  /** Описание вакансии */
  vacancyDescription?: Document | undefined

  /** Категория вакансии */
  vacancyCategory: ('Инжиниринг' | 'Математика' | 'Физика' | 'Химия')[]

  /** Сайт работодателя */
  employerWebsite?: string | undefined

  /** Уровень зароботной платы */
  salary?: string | undefined

  /** Локация */
  location: 'Москва' | 'Тюмень' | 'Удаленно'

  /** Работодатель */
  employer: IEmployers

  /** URL вакансии */
  vacancyURL: string

  /** Минимальная зп */
  minSalary?: number | undefined

  /** Максимальная зп */
  maxSalary?: number | undefined

  /** Отображение на главной */
  isOnMainPage: boolean

  initUrl?:string
}

export interface IVacancies extends Entry<IVacanciesFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'vacancies'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'employers' | 'grants' | 'news' | 'vacancies'

export type LOCALE_CODE = 'en-US' | 'ru-RU'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
