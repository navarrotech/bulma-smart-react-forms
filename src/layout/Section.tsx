// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'
import { useSize } from '@/utility/hooks'

// Typescript
import type { LightProps, ChildProps, AsSize } from '@/types'

export type SectionProps =
  & LightProps
  & ChildProps
  & AsSize
  & {
    as?: keyof JSX.IntrinsicElements
  }
  & Record<string, unknown>

export function Section(props: SectionProps) {
  const sizeClass = useSize(props)

  // Template, otherwise LightPropHandler will do this for you
  const classes = [
    props.className,
    sizeClass,
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    rootClassname='section'
    className={classes}
    as={props.as || 'section'}
  >{
      props.children
    }</LightPropHandler>
}
