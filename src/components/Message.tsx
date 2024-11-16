// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'
import { useColorful } from '@/utility/color'
import { useSize, useTranslation } from '@/utility/hooks'

// Typescript
import type { LightProps, ChildProps, AsSize } from '@/types'
import type { ColorfulProps } from '@/utility/color'

// UI
import { Delete } from '@/elements/Delete'

// Misc
import { Nothing } from '@/constants'

type WithDelete = {
  showDelete: true
  onDelete: () => void
}

type WithoutDelete = {
  showDelete?: never
  onDelete?: never
}

type Props =
  & LightProps
  & ChildProps
  & (WithDelete | WithoutDelete)
  & AsSize
  & ColorfulProps
  & {
    header?: string
  }
  & Record<string, unknown>

export function Message(props: Props) {
  const { className, style, } = useColorful(props)
  const sizeClassName = useSize(props)
  const { translate, } = useTranslation()

  const classes: string = [
    className,
    sizeClassName,
    props.className || '',
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    rootClassname='message'
    className={classes}
    style={{
      ...style,
      ...(props.style || {}),
    }}
    as='article'
  >
    { props.header || props.showDelete
      ? <div className='message-header'>
        <p>{
          props.header
            ? translate(props.header)
            : ''
        }</p>
        { props.showDelete
          ? <Delete onClick={props.onDelete} className={sizeClassName} />
          : Nothing
        }
      </div>
      : Nothing
    }
    <div className='message-body'>{
      typeof props.children === 'string'
        ? translate(props.children)
        : props.children
    }</div>
  </LightPropHandler>
}
