// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'
import { useLeftCenteredRight, useSize } from '@/utility/hooks'

// Typescript
import type { ChildProps, LightProps, AsLeftCenteredRight, AsSize } from '@/types'

// Documentation:
// https://bulma.io/documentation/components/breadcrumb/

type AsArrowSeparator = {
  hasArrowSeparator: true
  hasBulletSeparator?: never
  hasDotSeparator?: never
  hasSucceedsSeparator?: never
}

type AsBulletSeparator = {
  hasArrowSeparator?: never
  hasBulletSeparator: true
  hasDotSeparator?: never
  hasSucceedsSeparator?: never
}

type AsDotSeparator = {
  hasArrowSeparator?: never
  hasBulletSeparator?: never
  hasDotSeparator: true
  hasSucceedsSeparator?: never
}

type AsSucceedsSeparator = {
  hasArrowSeparator?: never
  hasBulletSeparator?: never
  hasDotSeparator?: never
  hasSucceedsSeparator: true
}

type Props =
  & LightProps
  & ChildProps
  & AsSize
  & AsLeftCenteredRight
  & (AsArrowSeparator | AsBulletSeparator | AsDotSeparator | AsSucceedsSeparator)
  & {
    // Required:
    id: string // Good practice
  }

export function Breadcrumb(props: Props) {
  const positionedClassName = useLeftCenteredRight(props)
  const sizeClassName = useSize(props)

  const classes = [
    'breadcrumb',
    positionedClassName,
    sizeClassName,
    props.hasArrowSeparator && 'has-arrow-separator',
    props.hasBulletSeparator && 'has-bullet-separator',
    props.hasDotSeparator && 'has-dot-separator',
    props.hasSucceedsSeparator && 'has-succeeds-separator',
  ].filter(Boolean).join(' ').trim()

  return <LightPropHandler
    { ...props }
    rootClassname={classes}
    aria-label='breadcrumbs'
    as='nav'
  >{
      props.children
    }</LightPropHandler>
}
