// Copyright © 2024 Navarrotech

// Core
import { createElement } from 'react'
import { useTranslation } from '@/utility/translation'

// Types
import type { BulmaTextSizes, LanguageKeyOrText } from '@/types'
import type { HTMLAttributes } from 'react'

// Misc
import { Nothing } from '@/constants'

// Documentation:
// https://bulma.io/documentation/elements/title/

export type TitlesProps =
  & {
    // Optional
    title: LanguageKeyOrText
    titleSize?: BulmaTextSizes
    titleProps?: HTMLAttributes<HTMLElement>
    subtitle?: LanguageKeyOrText
    subtitleSize?: BulmaTextSizes
    subtitleProps?: HTMLAttributes<HTMLElement>
    spaced?: boolean
  }

const sizeToTagNameMap: Record<BulmaTextSizes, keyof JSX.IntrinsicElements> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
  7: 'h6',
} as const

export function Titles(props: TitlesProps) {
  const { translate, } = useTranslation()

  const titleSize = props.titleSize || 3
  const subtitleSize = props.subtitleSize || 5

  const TitleTag = sizeToTagNameMap[titleSize] as keyof JSX.IntrinsicElements
  const SubtitleTag = sizeToTagNameMap[subtitleSize] as keyof JSX.IntrinsicElements

  const titleClass = `title is-${
    titleSize
  } ${
    props.titleProps?.className
  } ${
    props.spaced ? 'is-spaced' : ''
  }`.trim()

  const subtitleClass = `subtitle is-${
    subtitleSize
  } ${
    props.subtitleProps?.className
  }`.trim()

  return <>
    { props.title
      ? createElement(
        TitleTag,
        {
          ...props.titleProps,
          className: titleClass,
        },
        translate(props.title),
      )
      : Nothing
    }
    { props.subtitle
      ? createElement(
        SubtitleTag,
        {
          ...props.subtitleProps,
          className: subtitleClass,
        },
        translate(props.subtitle),
      )
      : Nothing
    }
  </>
}
