// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { ChildProps, LightProps } from '@/types'

// Documentation:
// https://bulma.io/documentation/elements/dropdown/

type Props =
  &LightProps
  & ChildProps
  & Record<string, unknown>

export function DropdownItem(props: Props) {
  return <LightPropHandler
    {...props}
    rootClassname='dropdown-item'
    as='div'
  >{
      props.children
    }</LightPropHandler>
}
