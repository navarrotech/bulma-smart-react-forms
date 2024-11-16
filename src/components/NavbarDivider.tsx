// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { LightProps } from '@/types'

type Props =
  & LightProps
  & {

  }
  & Record<string, unknown>

export function NavbarDivider(props: Props) {
  return <LightPropHandler
    { ...props }
    rootClassname='navbar-divider'
    as='hr'
  >
    <></>
  </LightPropHandler>
}
