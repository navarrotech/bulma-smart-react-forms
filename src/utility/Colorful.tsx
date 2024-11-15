// Copyright © 2024 Navarrotech

// Typescript
import { type CSSProperties } from 'react'
import type { BulmaColor, ColorfulType } from '@/types'

type AsExact = {
  color?: never
  primary?: boolean
  secondary?: boolean
  warning?: boolean
  danger?: boolean
  success?: boolean
  info?: boolean
  link?: boolean
  white?: boolean
  black?: boolean
  light?: boolean
  dark?: boolean
}

type asColor = {
  color: BulmaColor | string
  primary?: never
  secondary?: never
  warning?: never
  danger?: never
  success?: never
  info?: never
  link?: never
  white?: never
  black?: never
  light?: never
  dark?: never
}

export type ColorfulProps = (asColor | AsExact) & {
  className?: string
  style?: CSSProperties
}

export function useColorful(props: ColorfulProps): ColorfulType {
  let { className = '', style={}, } = props

  const colors = [
    props.primary && 'is-primary',
    props.secondary && 'is-secondary',
    props.warning && 'is-warning',
    props.danger && 'is-danger',
    props.success && 'is-success',
    props.info && 'is-info',
    props.link && 'is-link',
    props.white && 'is-white',
    props.black && 'is-black',
    props.dark && 'is-dark',
    props.light && 'is-light',
  ].filter(Boolean)

  if (colors.length) {
    className += ' ' + colors.join(' ')
  }

  else if (props.color) {
    const len = props.color.length
    // Give the option to pass the color props as a hex, rgb, hls, or css var
    if (
      // If it's a hex color
      (props.color.startsWith('#') && len === 4 || len === 7 || len === 9)
      // If it's an rgb or rgba color
      || (props.color.startsWith('rgb'))
      // If it's a hsl or hsla color
      || (props.color.startsWith('hsl'))
      // If it's a named color
      || (props.color.startsWith('var(--'))
    ) {
      // It is NOT our job to determine if the text color should be white or black
      style = {
        ...style,
        backgroundColor: props.color,
      }
    }
    // OR it could be a named Bulma color
    else {
      className += ` is-${props.color}`
    }
  }

  return { className, style, } as ColorfulType
}
