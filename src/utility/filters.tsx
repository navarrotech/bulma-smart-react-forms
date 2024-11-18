// Copyright © 2024 Navarrotech

// Core
import { omit } from 'lodash-es'
import { standardPropsToOmitBeforeSpread } from '@/constants'

export function omitProps(
  props: Record<string, unknown>,
  specifics: string[] = [],
): Record<string, unknown> {
  return omit(
    props,
    [
      ...standardPropsToOmitBeforeSpread,
      ...specifics,
    ],
  )
}
