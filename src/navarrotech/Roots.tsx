// Copyright © 2024 Navarrotech

// Core
import { ToastsRoot } from './Toasts'
import { ConfirmRoot } from './Confirm'
import { PromptRoot } from './Prompt'

// Typescript
import type { ChildProps } from '@/types'

export type RootsProps =
  & ChildProps
  & {

  }

export function Roots(props: RootsProps) {
  return <ToastsRoot>
    <PromptRoot>
      <ConfirmRoot>{
        props.children
      }</ConfirmRoot>
    </PromptRoot>
  </ToastsRoot>
}
