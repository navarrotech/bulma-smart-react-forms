// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { ChildProps, LightProps } from '@/types'
import type { HTMLAttributes } from 'react'

type Props =
  & LightProps
  & ChildProps
  & Record<string, unknown>
  & HTMLAttributes<HTMLDivElement>

// Documentation:
// https://bulma.io/documentation/elements/block/

export function Block(props: Props) {
  return <LightPropHandler
    rootClassname='block'
    {...props}
  />
}
