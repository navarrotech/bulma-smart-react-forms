// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { LightProps, ChildProps } from '@/types'

export type FooterProps =
  & LightProps
  & ChildProps
  & {
    as?: keyof JSX.IntrinsicElements
  }
  & Record<string, unknown>

export function Footer(props: FooterProps) {
  // Template, otherwise LightPropHandler will do this for you
  const classes = [
    props.className,
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    rootClassname='footer'
    className={classes}
    as={props.as || 'footer'}
  >{
      props.children
    }</LightPropHandler>
}
