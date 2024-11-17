// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'
import { useTranslation } from '@/utility/hooks'

// Typescript
import type { MouseEventHandler, ReactNode } from 'react'
import type { LightProps, ChildProps, IconDefinition, LanguageKeyOrText } from '@/types'

// Misc
import { Nothing } from '@/constants'

type AsChildren = {
  text?: never
  children: ReactNode
}

type AsText = {
  text: LanguageKeyOrText
  children?: never
}

export type TabProps =
  & LightProps
  & ChildProps
  & (AsChildren | AsText)
  & {
    active?: boolean
    icon?: IconDefinition
    onClick?: MouseEventHandler<HTMLAnchorElement>
  }
  & Record<string, unknown>

export function Tab({ onClick, icon, ...props }: TabProps) {
  const { translate, } = useTranslation()

  const iconElement = icon
    ? <span className='icon is-small'>{
      icon
    }</span>
    : Nothing

  return <LightPropHandler
    { ...props }
    rootClassname=''
    as='li'
  >
  ? <a
      onClick={onClick}
    >
      { iconElement }
      { props.children
        || <span>{
          translate(props.text)
        }</span>
      }
    </a>
    <a onClick={onClick}></a>
  </LightPropHandler>
}
