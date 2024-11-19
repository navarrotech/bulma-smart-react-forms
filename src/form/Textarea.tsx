// Copyright © 2024 Navarrotech

// Core
import { Input } from './Input'

// Typescript
import type { InputProps } from './Input'

// Documentation:
// https://bulma.io/documentation/form/textarea/

// This is just a typed wrapped around the Input component

export type TextareaProps =
  & Exclude<InputProps, 'textarea'>
  & {
    rows: string | number
    cols: string | number
    resize?: 'none' | 'both' | 'horizontal' | 'vertical'
  }
export function Textarea(props: TextareaProps) {
  return <Input
    {...props}
    textarea
  />
}
