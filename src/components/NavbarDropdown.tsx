// Copyright © 2024 Navarrotech

// Core
import { useState } from 'react'
import { LightPropHandler } from '@/utility/LightPropHandler'
import { useTranslation } from '@/utility/hooks'

// Typescript
import type { MouseEvent, ReactNode, ReactElement, MouseEventHandler } from 'react'
import type { LightProps, ChildProps, LanguageKeyOrText } from '@/types'
import type { NavbarItem } from './NavbarItem'
import type { NavbarDivider } from './NavbarDivider'

type NavbarItemElement =
  | ReactElement<typeof NavbarItem>
  | ReactElement<typeof NavbarDivider>
  | ReactNode

type Props =
  & LightProps
  & ChildProps
  & {
    // Required
    text: LanguageKeyOrText | ReactNode

    // Items
    items?: NavbarItemElement[]
    children?: NavbarItemElement[]

    // Styles
    hoverable?: boolean
    right?: boolean
    up?: boolean
    arrowless?: boolean

    // Logic
    onClick?: MouseEventHandler<HTMLDivElement>
    onOpen?: () => void
    onClose?: () => void
  }
  & Record<string, unknown>

export function NavbarDropdown(props: Props) {
  const [ isActive, setActive, ] = useState<boolean>(false)
  const { translate, } = useTranslation()

  const classes = [
    props.hoverable && 'is-hoverable',
    props.up && 'has-dropdown-up',
    isActive && 'is-active',
    props.className,
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    rootClassname='navbar-item has-dropdown'
    className={classes}
    onClick={(event: MouseEvent<HTMLDivElement>) => {
      const newVal = !isActive
      setActive(newVal)
      props.onClick?.(event)
      if (newVal) {
        props.onOpen?.()
      }
      else {
        props.onClose?.()
      }
    }}
    as='div'
  >
    <a
      className={`navbar-link ${props.arrowless ? 'is-arrowless' : ''}`}
    >{
        typeof props.text === 'string'
          ? translate(props.text)
          : props.text
      }</a>

    <div
      className={`navbar-dropdown ${props.right ? 'is-right' : ''}`}
    >{
        ([
          ...(props.items || []),
          ...(props.children || []),
        ] as NavbarItemElement[])
      }</div>
  </LightPropHandler>
}
