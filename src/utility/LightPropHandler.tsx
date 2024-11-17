// Copyright © 2024 Navarrotech

// Core
import { createElement } from 'react'
import { useTranslation } from '@/utility/hooks'

// Typescript
import type { ChildProps, LightProps } from '@/types'

// Where this is from:
// https://stackoverflow.com/a/56411377/9951599

type Props =
  & LightProps
  & ChildProps
  & {
    rootClassname: string
    // Allows you to specify a tag like 'div', 'span', etc:
    as?: keyof JSX.IntrinsicElements
  }
  & Record<string, unknown>

export function LightPropHandler(props: Props) {
  const { translate, } = useTranslation()

  return createElement(
    props.as || 'div',
    {
      ...props,
      title: translate(props.title),
      className: `${props.rootClassname} ${props.className}`,
    },
    typeof props.children === 'string'
      ? translate(props.children)
      : props.children,
  )
}
