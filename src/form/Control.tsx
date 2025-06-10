// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { LightProps, ChildProps, LanguageKeyOrText, IconDefinition, AsSize } from '@/types'
import type { HelpProps } from './Help'
import type { ReactNode } from 'react'

// UI
import { Help } from './Help'

// Utility
import { useSize } from '@/utility/hooks'
import { useTranslation } from '@/utility/translation'

// Misc
import { Nothing } from '@/constants'

export type ControlProps =
  & LightProps
  & ChildProps
  & AsSize
  & {
    label?: LanguageKeyOrText
    help?: LanguageKeyOrText
    | LanguageKeyOrText[]
    | HelpProps
    | HelpProps[]
    | ReactNode
    error?: string | string[]
    icon?: IconDefinition,
    iconRight?: IconDefinition,
    fullwidth?: boolean
    loading?: boolean
    expanded?: boolean
    iconSize?: 'small' | 'medium' | 'large'
  }
  & Record<string, unknown>

export function Control({ children, ...props }: ControlProps) {
  const { translate, } = useTranslation()
  const sizeClass = useSize(props)

  const classes = [
    props.className,
    sizeClass,
    props.fullwidth && 'is-fullwidth is-expanded',
    props.expanded && 'is-expanded',
    props.icon && 'has-icons-left',
    props.iconRight && 'has-icons-right',
    props.loading && 'is-loading',
  ].filter(Boolean).join(' ')

  return <>
    {props.label
      ? <label className='label'>{
        translate(props.label)
      }</label>
      : Nothing
    }
    <LightPropHandler
      {...props}
      rootClassname='control'
      className={classes}
    >
      {props.icon
        ? <span
          className={`icon is-${props.iconSize || 'small'} is-left`}
        >{
            props.icon
          }</span>
        : Nothing
      }
      {children}
      {props.iconRight
        ? <span
          className={`icon is-${props.iconSize || 'small'} is-right`}
        >{
            props.iconRight
          }</span>
        : Nothing
      }
    </LightPropHandler>
    {props.help
      ? <>{
        Array.isArray(props.help)
          ? props.help.map((item) => {
            if (typeof item === 'string') {
              return <p key={item} className='help'>{
                translate(item)
              }</p>
            }

            if (item.text) {
              return <Help key={item.text} {...item} />
            }

            return item as unknown as ReactNode
          })
          : (props.help as HelpProps)?.text
            ? <Help {...props.help as HelpProps} />
            : typeof props.help === 'string'
              ? <p className='help'>{
                translate(props.help)
              }</p>
              : <p className='help'>{
                props.help as ReactNode
              }</p>
      }</>
      : Nothing
    }
    {
      props.error
        ? <>
          <p className='help is-danger'>{
            props.error instanceof Array
              ? props.error.map((item, index) => <>
                <span>{translate(item)}</span>
                {index !== props.error.length - 1 && <br />}
              </>)
              : translate(props.error)
          }</p>
        </>
        : Nothing
    }
  </>
}
