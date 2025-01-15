// Copyright © 2024 Navarrotech

// Core
import { createElement } from 'react'
import { useTranslation } from '@/utility/translation'
import { omitProps } from './filters'

// Typescript
import type { ChildProps, LightProps } from '@/types'

// Where this is from:
// https://stackoverflow.com/a/56411377/9951599

export type LightPropHandlerProps =
  & LightProps
  & ChildProps
  & {
    rootClassname: string
    omit?: string[]
    // Allows you to specify a tag like 'div', 'span', etc:
    as?: keyof JSX.IntrinsicElements
  }
  & Record<string, unknown>

export function LightPropHandler({ rootClassname, omit = [], ...props }: LightPropHandlerProps) {
  const { translate, } = useTranslation()

  return createElement(
    props.as || 'div',
    {
      ...omitProps(props, omit),
      title: translate(props.title),
      // TODO: What if props.className is undefined?
      className: `${rootClassname} ${props.className}`,
    },
    typeof props.children === 'string'
      ? translate(props.children)
      : props.children,
  )
}
