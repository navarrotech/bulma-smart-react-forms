// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Types
import type { BulmaColor, IconDefinition, LightProps, AsSize } from '@/types'

// Documentation:
// https://bulma.io/documentation/elements/icon/

type Props =
  & LightProps
  & AsSize
  & {
    color?: BulmaColor
    children: IconDefinition
  }
  & Record<string, unknown>

export function Icon(props: Props) {
  const classes = [
    'icon',
    props.color && `has-text-${props.color}`,
    props.small && 'is-small',
    props.medium && 'is-medium',
    props.large && 'is-large',
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    as='span'
    rootClassname={classes}
  />
}
