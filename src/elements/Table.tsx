// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { LightProps, ChildProps } from '@/types'

// Documentation:
// https://bulma.io/documentation/elements/table/

type Props =
  & LightProps
  & ChildProps
  & {
    // Optional:
    scrollable?: boolean
    striped?: boolean
    narrow?: boolean
    bordered?: boolean
    hoverable?: boolean
    fullwidth?: boolean
  }
  & Record<string, unknown>

export function Table(props: Props) {
  const classes: string = [
    'table',
    props.striped ? 'is-striped' : '',
    props.narrow ? 'is-narrow' : '',
    props.bordered ? 'is-bordered' : '',
    props.hoverable ? 'is-hoverable' : '',
    props.fullwidth ? 'is-fullwidth' : '',
  ].filter(Boolean).join(' ')

  const element = <LightPropHandler
    {...props}
    rootClassname={classes}
    as='table'
  />

  if (props.scrollable) {
    return <div className='table-container'>{
      element
    }</div>
  }

  return element
}
