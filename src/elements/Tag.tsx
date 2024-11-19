// Copyright © 2024 Navarrotech

// Core
import { useColorful } from '@/utility/color'
import { LightPropHandler } from '@/utility/LightPropHandler'
import { useTranslation } from '@/utility/translation'

// Typescript
import type { LightProps, AsSize } from '@/types'
import type { ColorfulProps } from '@/utility/color'
import type { ReactNode } from 'react'

// UI
import { Delete } from './Delete'

// Misc
import { Nothing } from '@/constants'

// Documentation:
// https://bulma.io/documentation/elements/tag/

type AsChildren = {
  children: ReactNode
  message?: never
}

type AsMessage = {
  children?: never
  message: string
}

type WithDelete = {
  withDeleteButton: true
  onDelete: () => void
  isDelete?: never
  disabled?: boolean
}

type AsDelete = {
  isDelete: true
  onDelete: () => void
  disabled?: boolean
  withDeleteButton?: never
}

type WithoutDelete = {
  isDelete?: never
  onDelete?: never
  disabled?: never
  withDeleteButton?: never
}

type Props =
  & LightProps
  & ColorfulProps
  & AsSize
  & (AsChildren | AsMessage)
  & (WithDelete | AsDelete | WithoutDelete)
  & {
    normal?: boolean
    hoverable?: boolean
    rounded?: boolean
  }
  & Record<string, unknown>

export function Tag(props: Props) {
  const { className, style, } = useColorful(props)
  const { translate, } = useTranslation()

  const sizeClass: string = [
    props.small && 'is-small',
    props.medium && 'is-medium',
    props.large && 'is-large',
    props.normal && 'is-normal',
  ].filter(Boolean).join(' ')

  const classes: string = [
    className,
    sizeClass,
    props.hoverable && 'is-hoverable',
    props.rounded && 'is-rounded',
    props.isDelete && 'is-delete',
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    as={props.isDelete ? 'a' : 'span'}
    onClick={!props.disabled && props.onDelete}
    rootClassname='tag'
    className={classes}
    style={style}
  >
    { props.message
      ? translate(props.message)
      : typeof props.children === 'string'
        ? translate(props.children)
        : props.children
    }
    { props.withDeleteButton
      ? <Delete
        onClick={!props.disabled && props.onDelete}
        className={sizeClass}
      />
      : Nothing
    }
  </LightPropHandler>
}
