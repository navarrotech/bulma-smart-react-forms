// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'
import { useSize, useLeftCenteredRight } from '@/utility/hooks'
import { useTranslation } from '@/utility/translation'

// Typescript
import type { LightProps, AsSize, AsLeftCenteredRight, LanguageKeyOrText } from '@/types'

// Misc
import { clamp } from 'lodash-es'
import { Nothing } from '@/constants'

type TranslationCallbackWithPage = (page: number) => string

// If the dev wants to use a page system
// For example, "page 10 of 50"
type PageInformation = {
  current: number | string
  total: number | string
}

// If the dev wants to use a counting system, and we count pages for them
// For example, "showing 500->600 of 1000, which we determined is page 5 of 10"
type CountInformation = {
  skip: number | string
  total: number | string
  countPerPage: number | string
}

type AsPageInformation = {
  page: PageInformation
  count?: never
  onPageChange: (newPage: number) => void
}

type AsCountInformation = {
  page?: never
  count: CountInformation
  onPageChange: (newSkip: number) => void
}

type Props =
  & LightProps
  & AsSize
  & AsLeftCenteredRight
  & (AsPageInformation | AsCountInformation)
  & {
    // Required:
    id: string // Good practice

    // Styles:
    rounded?: boolean
    hideEllipsis?: boolean
    hideFirstLast?: boolean
    hidePrevNext?: boolean
    showEvenIfOnlyOnePage?: boolean

    // State:
    disabled?: boolean

    // Text
    nextText?: LanguageKeyOrText | TranslationCallbackWithPage
    prevText?: LanguageKeyOrText | TranslationCallbackWithPage
    nextTitle?: LanguageKeyOrText | TranslationCallbackWithPage
    prevTitle?: LanguageKeyOrText | TranslationCallbackWithPage
    currentPageTitle?: LanguageKeyOrText | TranslationCallbackWithPage
    firstPageTitle?: LanguageKeyOrText | TranslationCallbackWithPage
    lastPageTitle?: LanguageKeyOrText | TranslationCallbackWithPage
  }
  & Record<string, unknown>

export function Pagination(props: Props) {
  const { translate, } = useTranslation()
  const sizeClassname = useSize(props)
  const positionClassname = useLeftCenteredRight(props)

  const id = props.id || 'pagination'

  const classes: string = [
    sizeClassname,
    positionClassname,
    props.rounded && 'is-rounded',
    props.disabled && 'is-disabled',
    props.className,
  ].filter(Boolean).join(' ') || ''

  const minPage: number = 0
  let maxPage: number = 0
  let currentPage: number = 0

  if (props.page) {
    if (typeof props.page?.current === 'string') {
      currentPage = parseInt(props.page.current || '0')
    }
    else {
      currentPage = props.page?.current || 0
    }
    if (typeof props.page?.total === 'string') {
      maxPage = parseInt(props.page.total || '0')
    }
    else {
      maxPage = props.page?.total || 0
    }
  }
  else if (props.count) {
    // We can't divide by 0, so we'll just assume 1 if none is given
    const countPerPage = typeof props.count?.countPerPage === 'string'
      ? parseInt(props.count.countPerPage || '1')
      : props.count?.countPerPage || 1

    const total = typeof props.count?.total === 'string'
      ? parseInt(props.count.total || '0')
      : props.count?.total || 0

    const skip = typeof props.count?.skip === 'string'
      ? parseInt(props.count.skip || '0')
      : props.count?.skip || 0

    currentPage = Math.floor(skip / countPerPage) + 1
    maxPage = Math.floor(total / countPerPage) + 1
  }

  if (!props.showEvenIfOnlyOnePage && maxPage === minPage) {
    return Nothing
  }

  function changePageTo(newPage: number) {
    // A minus 1 offset, because these are 1-based pages
    // Page "1" is actually index 0
    newPage = clamp(newPage - 1, minPage, maxPage)
    props.onPageChange(newPage)
  }

  function superTranslate(
    key: LanguageKeyOrText | TranslationCallbackWithPage,
    page: number,
  ) {
    if (typeof key === 'function') {
      return key(page)
    }
    return translate(key)
  }

  return <LightPropHandler
    { ...props }
    id={id}
    rootClassname='pagination'
    className={classes}
    as='nav'
    role='navigation'
    aria-label='pagination'
  >
    {/* Next page & prev page buttons: */}
    { !props.hidePrevNext
      ? <>
        <a
          id={id + '-prev'}
          className='pagination-previous'
          // @ts-ignore - Bulma supports the disabled attribute
          disabled={props.disabled || currentPage === minPage}
          onClick={!props.disabled && currentPage !== minPage && (() => {
            changePageTo(currentPage - 1)
          })}
        >{
            superTranslate(
              props.nextText || 'Previous page',
              currentPage - 1,
            )
          }</a>
        <a
          id={id + '-next'}
          className='pagination-next'
          // @ts-ignore - Bulma supports the disabled attribute
          disabled={props.disabled || currentPage === maxPage}
          onClick={!props.disabled && currentPage !== maxPage && (() => {
            changePageTo(currentPage + 1)
          } )}
        >{
            superTranslate(
              props.nextText || 'Next page',
              currentPage + 1,
            )
          }</a>
      </>
      : Nothing
    }
    <ul className='pagination-list'>
      {/* First page: */}
      { !props.hideFirstLast
        ? <li>
          <a
            className='pagination-link'
            aria-label='Goto page 1'
            title={superTranslate(
              props.firstPageTitle || 'Goto page 1',
              minPage,
            )}
            // @ts-ignore - Bulma supports the disabled attribute
            disabled={props.disabled || currentPage === minPage}
            onClick={!props.disabled && currentPage !== minPage && (() => {
              changePageTo(minPage)
            } )}
          >{ minPage }</a>
        </li>
        : Nothing
      }
      {/* Ellipsis */}
      { !props.hideEllipsis
        ? <li>
          <span className='pagination-ellipsis'>&hellip;</span>
        </li>
        : Nothing
      }
      {/* Prev page: */}
      { currentPage !== minPage
        ? <li>
          <a
            className='pagination-link'
            aria-label={`Goto page ${currentPage - 1}`}
            title={superTranslate(
              props.firstPageTitle || `Goto page ${currentPage - 1}`,
              currentPage - 1,
            )}
            // @ts-ignore - Bulma supports the disabled attribute
            disabled={props.disabled}
            onClick={!props.disabled && (() => {
              changePageTo(currentPage - 1)
            } )}
          >{
              clamp(
                currentPage - 1,
                maxPage,
                minPage,
              )
            }</a>
        </li>
        : Nothing
      }
      {/* Current page: */}
      <li>
        <a
          className='pagination-link is-current'
          aria-label={`Page ${currentPage}`}
          title={superTranslate(
            props.currentPageTitle || `Goto page ${currentPage}`,
            currentPage,
          )}
          aria-current='page'
          // @ts-ignore - Bulma supports the disabled attribute
          disabled={props.disabled}
        >{ currentPage }</a>
      </li>
      {/* Next page: */}
      { currentPage !== maxPage
        ? <li>
          <a
            className='pagination-link'
            aria-label={`Goto page ${currentPage + 1}`}
            title={superTranslate(
              props.firstPageTitle || `Goto page ${currentPage + 1}`,
              currentPage + 1,
            )}
            // @ts-ignore - Bulma supports the disabled attribute
            disabled={props.disabled}
            onClick={!props.disabled && (() => {
              changePageTo(currentPage + 1)
            } )}
          >{
              clamp(
                currentPage + 1,
                maxPage,
                minPage,
              )
            }</a>
        </li>
        : Nothing
      }
      {/* Ellipsis */}
      { !props.hideEllipsis
        ? <li>
          <span className='pagination-ellipsis'>&hellip;</span>
        </li>
        : Nothing
      }
      {/* Last page: */}
      { !props.hideFirstLast
        ? <li>
          <a
            className='pagination-link'
            aria-label={`Goto page ${maxPage}`}
            title={superTranslate(
              props.lastPageTitle || `Goto page ${maxPage}`,
              maxPage,
            )}
            // @ts-ignore - Bulma supports the disabled attribute
            disabled={props.disabled || currentPage === maxPage}
            onClick={!props.disabled && currentPage !== maxPage && (() => {
              changePageTo(maxPage)
            } )}
          >{ maxPage }</a>
        </li>
        : Nothing
      }
    </ul>
  </LightPropHandler>
}
