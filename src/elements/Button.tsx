// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { ReactNode, MouseEvent as ReactMouseEvent } from 'react'
import type { AsSize, IconDefinition, LanguageKeyOrText, StandardProps } from '@/types'
import type { ColorfulProps } from '@/utility/color'

// Utility
import { useCallback } from 'react'
import { useColorful } from '@/utility/color'
import { useTranslation } from '@/utility/translation'
import { useSize } from '@/utility/hooks'

// Misc
import { Nothing } from '@/constants'

// Documentation:
// https://bulma.io/documentation/elements/button/

type AsText = {
  text: LanguageKeyOrText
  children?: never
}

type AsChildren = {
  text?: never
  children: ReactNode
}

export type ButtonProps =
  & AsSize
  & StandardProps
  & ColorfulProps
  & (AsText | AsChildren)
  & {
    // Required:
    id: string // Id is good practice, we should require it

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
  const sizeClass = useSize(props)

  const classes: string = [
    className,
    sizeClass,
    props.outlined && 'is-outlined',
    props.inverted && 'is-inverted',
    props.rounded && 'is-rounded',
    props.disabled && 'is-disabled',
    props.loading && 'is-loading',
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

  const as = props.as || 'button'

  return <LightPropHandler
    { ...props }
    as={as}
    type={as === 'button'
      ? 'button'
      : undefined
    }
    rootClassname='button'
    disabled={props.disabled || props.loading}
    onClick={onClick}
    className={classes}
    style={style}
  >
    { iconLeft }
    {
      typeof props.children === 'string' || props.text
        ? <>
          <span>{
            translate(props.text || props.children as string)
          }</span>
        </>
        : props.children
    }
    { iconRight }
  </LightPropHandler>
}
