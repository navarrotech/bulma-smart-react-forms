// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { LightProps } from '@/types'

// Documentation:
// https://bulma.io/documentation/elements/dropdown/

type Props =
  & LightProps
  & Record<string, unknown>

export function DropdownDivider(props: Props) {
  return <LightPropHandler
    {...props}
    rootClassname='dropdown-divider'
    as='hr'
  >
    <></>
  </LightPropHandler>
}
