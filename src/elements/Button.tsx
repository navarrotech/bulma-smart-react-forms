// Copyright © 2024 Navarrotech

// Core
import { useCallback } from 'react'

// Typescript
import type { ReactNode, MouseEvent as ReactMouseEvent } from 'react'
import type { AsSize, IconDefinition, StandardProps } from '@/types'
import type { ColorfulProps } from '@/utility/Colorful'

// Utility
import { useColorful } from '@/utility/Colorful'
import { useTranslation } from '@/utility/hooks'

// Misc
import { Nothing } from '@/constants'

// Documentation:
// https://bulma.io/documentation/elements/button/

export type ButtonProps =
  & AsSize
  & StandardProps
  & ColorfulProps
  & {
    // Required:
    id: string // Id is good practice, we should require it
    children: ReactNode

    // Style:
    icon?: IconDefinition
    iconRight?: IconDefinition

    // Smart:
    as?: keyof JSX.IntrinsicElements // Allows you to specify a tag like 'div', 'span', etc:

    // State:
    static?: boolean
    focused?: boolean
    active?: boolean
    inverted?: boolean
    rounded?: boolean
    outlined?: boolean
    loading?: boolean
    selected?: boolean
  }
  & Record<string, unknown>

export function Button(props: ButtonProps) {
  const { translate, } = useTranslation()
  const { className, style, } = useColorful(props)

  const classes: string = [
    'button',
    className,
    props.outlined && 'is-outlined',
    props.inverted && 'is-inverted',
    props.rounded && 'is-rounded',
    props.disabled && 'is-disabled',
    props.loading && 'is-loading',
    props.small && 'is-small',
    props.medium && 'is-medium',
    props.large && 'is-large',
    props.focused && 'is-focused',
    props.active && 'is-active',
    props.static && 'is-static',
    props.selected && 'is-selected',
    props.fullwidth && 'is-fullwidth',
  ].filter(Boolean).join(' ')

  // On click middleware to ensure the JS protections match the CSS protections
  const onClick = useCallback((event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!props.onClick || props.disabled || props.loading) {
      return
    }

    props.onClick(event)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ props.onClick, props.disabled, props.loading, ])

  const iconLeft = props.icon ? <span className='icon'>{ props.icon }</span> : Nothing
  const iconRight = props.iconRight ? <span className='icon'>{ props.iconRight }</span> : Nothing

  const Component = props.as || 'button'

  return (
    <Component
      { ...props }
      id={props.id}
      // @ts-ignore
      type='button'
      title={translate(props.title)}
      disabled={props.disabled || props.loading}
      // @ts-ignore
      onClick={onClick}
      className={classes}
      style={style}
    >{
        typeof props.children === 'string'
          ? <>
            { iconLeft }
            <span>{
              translate(props.children)
            }</span>
            { iconRight }
          </>
          : props.children
      }</Component>
  )
}
