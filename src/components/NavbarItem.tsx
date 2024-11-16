// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { MouseEventHandler } from 'react'
import type { LightProps, ChildProps } from '@/types'

export type NavbarItemProps =
  & LightProps
  & ChildProps
  & {
    as?: keyof JSX.IntrinsicElements
    onClick?: MouseEventHandler<HTMLAnchorElement>
    selected?: boolean
    href?: string
  }
  & Record<string, unknown>

export function NavbarItem(props: NavbarItemProps) {
  const classes = [
    props.selected && 'is-selected',
    props.className,
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    rootClassname='navbar-item'
    className={classes}
    as={props.as || 'a'}
  >{
      props.children
    }</LightPropHandler>
}
