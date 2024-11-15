// Copyright © 2024 Navarrotech

// Core
import { Children, isValidElement } from 'react'
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { LightProps, ChildProps, AsSize, OptionalNever } from '@/types'

// Documentation:
// https://bulma.io/documentation/elements/tags/

type Props =
  & (
    ({ singleLine?: false } & AsSize)
    | ({ singleLine: true } & OptionalNever<AsSize>)
  )
  & LightProps
  & ChildProps
  & {
    disabled?: boolean
    fullwidth?: boolean
    hasAddons?: boolean
  }
  & Record<string, unknown>

export function Tags(props: Props) {
  if (props.singleLine) {
    const className: string = [
      'is-grouped',
      props.className,
      props.disabled && 'are-disabled',
      props.fullwidth && 'is-fullwidth',
      props.hasAddons && 'has-addons',
    ].filter(Boolean).join(' ')

    return <LightPropHandler
      { ...props }
      rootClassname='field'
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
      }</LightPropHandler>
  }

  const className: string = [
    props.className,
    props.disabled && 'are-disabled',
    props.small && 'are-small',
    props.medium && 'are-medium',
    props.large && 'are-large',
    props.fullwidth && 'is-fullwidth',
    props.hasAddons && 'has-addons',
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    rootClassname='tags'
    className={className}
  >{
      props.children
    }</LightPropHandler>
}
