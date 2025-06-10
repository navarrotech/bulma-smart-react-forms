// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { LightProps, ChildProps } from '@/types'
import type { ColorfulProps } from '@/utility/color'
import type { ReactNode } from 'react'

// Utility
import { useTranslation } from '@/utility/translation'
import { useColorful } from '@/utility/color'

// Misc
import { Nothing } from '@/constants'

type AsSmall = {
  small?: true
  medium?: never
  large?: never
  halfHeight?: never
  fullHeight?: never
  fullHeightWithNavbar?: never
}

type AsMedium = {
  small?: never
  medium?: true
  large?: never
  halfHeight?: never
  fullHeight?: never
  fullHeightWithNavbar?: never
}

type AsLarge = {
  small?: never
  medium?: never
  large?: true
  halfHeight?: never
  fullHeight?: never
  fullHeightWithNavbar?: never
}

type AsHalfHeight = {
  small?: never
  medium?: never
  large?: never
  halfHeight?: true
  fullHeight?: never
  fullHeightWithNavbar?: never
}

type AsFullHeight = {
  small?: never
  medium?: never
  large?: never
  halfHeight?: never
  fullHeight?: true
  fullHeightWithNavbar?: never
}

type AsFullHeightWithNavbar = {
  small?: never
  medium?: never
  large?: never
  halfHeight?: never
  fullHeight?: never
  fullHeightWithNavbar?: true
}

type AsSize = (AsSmall | AsMedium | AsLarge | AsHalfHeight | AsFullHeight | AsFullHeightWithNavbar)

export type HeroProps =
  & LightProps
  & ChildProps
  & ColorfulProps
  & AsSize
  & {
    as?: keyof JSX.IntrinsicElements
    header?: ReactNode
    footer?: ReactNode
  }
  & Record<string, unknown>

export function Hero(props: HeroProps) {
  const { translate, } = useTranslation()
  const { className: colorfulClass, style, } = useColorful(props)

  // Template, otherwise LightPropHandler will do this for you
  const classes = [
    props.className,
    colorfulClass,
    props.small && 'is-small',
    props.medium && 'is-medium',
    props.large && 'is-large',
    props.halfHeight && 'is-halfheight',
    props.fullHeight && 'is-fullheight',
    props.fullHeightWithNavbar && 'is-fullheight-with-navbar',
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    {...props}
    rootClassname='hero'
    className={classes}
    style={style}
    as={props.as || 'section'}
  >
    {props.header
      ? <div className='hero-head'>{props.header}</div>
      : Nothing
    }
    <div className='hero-body'>{
      typeof props.children === 'string'
        ? translate(props.children)
        : props.children
    }</div>
    {props.footer
      ? <div className='hero-foot'>{props.footer}</div>
      : Nothing
    }
  </LightPropHandler>
}
