// Copyright © 2024 Navarrotech

// Core
import { useEffect, useState } from 'react'
import { LightPropHandler } from '@/utility/LightPropHandler'
import { useColorful } from '@/utility/color'

// Typescript
import type { ReactNode, ReactElement } from 'react'
import type { LightProps, ChildProps } from '@/types'
import type { NavbarItem } from './NavbarItem'
import type { NavbarDivider } from './NavbarDivider'
import type { NavbarDropdown } from './NavbarDropdown'
import type { ColorfulProps } from '@/utility/color'

// Misc
import { Nothing } from '@/constants'

type NavbarItemElement =
  | ReactElement<typeof NavbarItem>
  | ReactElement<typeof NavbarDivider>
  | ReactElement<typeof NavbarDropdown>
  | ReactNode

type Props =
  & LightProps
  & ChildProps
  & ColorfulProps
  & {
    // Items:
    brand?: NavbarItemElement
    startItems?: NavbarItemElement[]
    endItems?: NavbarItemElement[]

    // Styles:
    transparent?: boolean
    spaced?: boolean
    hasShadow?: boolean
    fixedTop?: boolean
    fixedBottom?: boolean
    fixedPaddingTarget?: 'body' | 'html'
  }
  & Record<string, unknown>

export function Navbar(props: Props) {
  const { className: colorfulClassname, style, } = useColorful(props)

  const [ isActive, setActive, ] = useState<boolean>(false)

  const { fixedTop, fixedBottom, fixedPaddingTarget, } = props

  const classes = [
    props.transparent && 'is-transparent',
    fixedTop && 'is-fixed-top',
    fixedBottom && 'is-fixed-bottom',
    props.spaced && 'is-spaced',
    props.hasShadow && 'has-shadow',
    colorfulClassname,
    props.className,
  ].filter(Boolean).join(' ')

  useEffect(() => {
    const target = fixedPaddingTarget || 'body'

    if (fixedTop) {
      document.querySelector(target)?.classList.add('has-navbar-fixed-top')
      return () => {
        document.querySelector(target)?.classList.remove('has-navbar-fixed-top')
      }
    }
    if (fixedBottom) {
      document.querySelector(target)?.classList.add('has-navbar-fixed-bottom')
      return () => {
        document.querySelector(target)?.classList.remove('has-navbar-fixed-bottom')
      }
    }

    return () => {}
  }, [ fixedTop, fixedBottom, fixedPaddingTarget, ])

  return <LightPropHandler
    { ...props }
    rootClassname='navbar'
    className={classes}
    as='div'
    role='navigation'
    aria-label='main navigation'
    style={{
      ...style,
      ...(props.style || {}),
    }}
  >
    <div className='navbar-brand'>
      { props.brand
        ? props.brand
        : Nothing
      }
      {/* @ts-ignore - Bulma supports the aria-expanded attribute, so will we */}
      <a
        role='button'
        className={'navbar-burger' + (isActive ? ' is-active' : '')}
        aria-label='menu'
        aria-expanded={String(!!isActive)}
        onClick={() => setActive(!isActive)}
      >
        <span aria-hidden='true' />
        <span aria-hidden='true' />
        <span aria-hidden='true' />
        <span aria-hidden='true' />
      </a>
    </div>
    <div className={'navbar-menu' + (isActive ? ' is-active' : '')}>
      <div className='navbar-start'>{
        props.startItems || Nothing
      }</div>
      <div className='navbar-end'>{
        props.endItems || Nothing
      }</div>
    </div>
  </LightPropHandler>
}
