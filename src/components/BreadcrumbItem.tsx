// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { ChildProps, LightProps } from '@/types'

// Documentation:
// https://bulma.io/documentation/components/breadcrumb/

type Props =
  & LightProps
  & ChildProps
  & {
    href?: string
    active?: boolean
    text?: string
    anchorProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>
  }

export function BreadcrumbItem(props: Props) {
  return <LightPropHandler
    { ...props }
    rootClassname={props.active ? 'is-active' : ''}
    as='li'
  >
    <a
      { ...(props.anchorProps || {}) }
      href={props.href}
      aria-current={props.active ? 'page' : undefined}
    >{
        props.children
      }</a>
  </LightPropHandler>
}
