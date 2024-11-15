// Copyright © 2024 Navarrotech

// Core
import { Children, isValidElement } from 'react'
import { useTranslation } from '@/utility/hooks'

// Typescript
import type { LightProps, ChildProps, AsSize, AsLeftCenteredRight } from '@/types'

type Props =
  & (
    ({ singleLine?: false } & AsLeftCenteredRight & AsSize)
    | { singleLine: true }
  )
  & LightProps
  & ChildProps
  & {
    disabled?: boolean
    fullwidth?: boolean
    hasAddons?: boolean
  }
  & Record<string, unknown>

export function Buttons(props: Props) {
  const { translate, } = useTranslation()

  if (props.singleLine) {
    let className = 'field is-grouped'
    if (props.hasAddons) {
      className += ' has-addons'
    }
    if (props.fullwidth) {
      className += ' is-fullwidth'
    }
    if (props.disabled) {
      className += ' are-disabled'
    }
    return <div
      { ...props }
      title={translate(props.title)}
      className={className}
    >{
        Children.map(props.children, (child) => {
          if (isValidElement(child)) {
            return <div className='control'>{
              child
            }</div>
          }

          return child
        })
      }</div>
  }

  const className: string = [
    'block buttons',
    props.className,
    props.disabled && 'are-disabled',
    props.small && 'are-small',
    props.medium && 'are-medium',
    props.large && 'are-large',
    props.left && 'is-left',
    props.centered && 'is-centered',
    props.right && 'is-right',
    props.fullwidth && 'is-fullwidth',
    props.hasAddons && 'has-addons',
  ].filter(Boolean).join(' ')

  return <div
    { ...props }
    title={translate(props.title)}
    className={className}
  >{
      props.children
    }</div>
}
