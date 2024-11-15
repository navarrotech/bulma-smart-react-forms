// Copyright © 2024 Navarrotech

// Core
import { useState, useEffect } from 'react'

// Typescript
import type { ReactNode } from 'react'

// Misc
import { Nothing } from '@/constants'

type Props = {
  children: ReactNode
  time?: number
}

export function ShowAfterNSeconds({ children, time = 500, }: Props) {
  const [ show, setShow, ] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, time)

    return () => {
      clearTimeout(timeout)
    }
  }, [ time, ])

  if (show) {
    return children
  }

  return Nothing
}
