// Copyright © 2024 Navarrotech

// Core
import { useEffect } from 'react'

// Typescript
import type { AsLeftCenteredRight, AsSize } from '../types'

export function useHotkey(
  key: string,
  callback: () => void,
  deps: any[] = [],
  disabled = false,
) {
  useEffect(() => {
    if (disabled) {
      return () => {}
    }

    const handler = (event: KeyboardEvent) => {
      event.preventDefault?.()
      event.stopPropagation?.()
      event.stopImmediatePropagation?.()
      if (event.key !== key) {
        return
      }
      callback()
    }

    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ key, callback, disabled, ...deps, ])
}

export function useLeftCenteredRight(props: AsLeftCenteredRight, prefix = 'is'): string {
  const { left, right, centered, } = props

  return [
    left && `${prefix}-left`,
    right && `${prefix}-right`,
    centered && `${prefix}-centered`,
  ].filter(Boolean).join(' ') || ''
}

export function useSize(props: AsSize, prefix = 'is'): string {
  const { small, medium, large, } = props

  return [
    small && `${prefix}-small`,
    medium && `${prefix}-medium`,
    large && `${prefix}-large`,
  ].filter(Boolean).join(' ') || ''
}
