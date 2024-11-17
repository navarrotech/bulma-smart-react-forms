// Copyright © 2024 Navarrotech

// Core
import { Component } from 'react'

// Typescript
import type { ReactNode } from 'react'

// Misc
import { Nothing } from '@/constants'

// TODO: Build this out!

type ErrorProps = {
  // Required:
  id: string
  children: ReactNode
}

type ErrorState = {
  tripped: boolean
}

const DEFAULT_ERROR_STATE: ErrorState = {
  tripped: false,
} as const

export class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    // Parent construct
    super(props)

    // Initialize state
    this.state = { ...DEFAULT_ERROR_STATE, }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    const { id, } = this.props

    // eslint-disable-next-line no-console
    console.error(
      `ErrorBoundary [${id}] caught an error:`,
      error,
      errorInfo,
    )

    this.setState({
      tripped: true,
    })

    return true
  }
  render() {
    if (!this.state.tripped) {
      return this.props.children
    }

    return Nothing
  }
}
