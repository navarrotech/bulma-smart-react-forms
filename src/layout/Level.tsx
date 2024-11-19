// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { LightProps } from '@/types'
import type { ReactNode } from 'react'

// UI
import { LevelItem } from './LevelItem'

// Misc
import { Nothing } from '@/constants'

type LevelProps =
  & LightProps
  & {
    mobile?: boolean
    left?: boolean | ReactNode
    right?: boolean | ReactNode
    as?: keyof JSX.IntrinsicElements
    children?: ReactNode
    items?: ReactNode[]
  }
  & Record<string, unknown>

const levelPropsOmitted: string[] = [
  'mobile',
  'items',
] as const

export function Level(props: LevelProps) {
  // Template, otherwise LightPropHandler will do this for you
  const classes = [
    props.className,
    props.mobile && 'is-mobile',
    props.left === true && 'level-left',
    props.right === true && 'level-right',
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    rootClassname='CHANGE_ME'
    className={classes}
    omit={levelPropsOmitted}
    as={props.as || 'div'}
  >
    { props.left !== undefined && props.left !== true
      ? <div className='level-left'>{
        props.left
      }</div>
      : Nothing
    }
    { props.children || Nothing }
    { props.items?.map((item, index) => <LevelItem key={index}>{ item }</LevelItem>) || Nothing }
    { props.right !== undefined && props.right !== true
      ? <div className='level-right'>{
        props.right
      }</div>
      : Nothing
    }
  </LightPropHandler>
}
