// Copyright © 2024 Navarrotech

// Core
import { createPortal } from 'react-dom'
import { BulmaFormSettings } from '@/BulmaFormSettings'

// Typescript
import type { ReactNode } from 'react'
import type { StandardProps } from '@/types'
import type { ButtonProps } from '@/elements/Button'

// Components
import { Button } from '@/elements/Button'
import { ErrorBoundary } from '@/navarrotech/ErrorBoundary'

// Misc
import { useTranslation } from '@/utility/translation'
import { useHotkey } from '@/utility/hooks'
import { Delete } from '@/elements/Delete'

// Based on the Bulma modal
// https://bulma.io/documentation/components/modal/

type AsTrigger = {
  // Optional button or other element to trigger the modal
  trigger: ReactNode
  onOpen: () => void
}

type AsShow = {
  // Manually control the modal visibility
  trigger?: never
  onOpen?: never
}

type ModalProps =
  & (AsTrigger | AsShow)
  & StandardProps
  & {
    // Required:
    id: string
    onClose: () => void
    children: ReactNode // Body content
    actions?: ButtonProps[]
    show: boolean

    // Smart:
    disableEscapeKeyToClose?: boolean
  }

export function Modal(props: ModalProps) {
  const { translate, } = useTranslation()

  // Keyboard listener to close the modal on the 'escape' key
  useHotkey(
    'escape',
    () => {
      if (props.show) {
        props.onClose()
      }
    },
    [],
    !!props.disableEscapeKeyToClose,
  )

  if (!props.show || props.disabled) {
    return <></>
  }

  let className = props.className || ''
  if (props.fullwidth) {
    className += ' is-fullwidth'
  }
  if (props.className) {
    className += ' ' + props.className
  }

  return <>
    { props.trigger }
    {
      createPortal(
        <ErrorBoundary id={'modal-' + props.id}>
          <div
            id={props.id}
            className={`modal is-active ${className}`}
            style={props.style}
            onClick={props.onClick}
          >
            <div className='modal-background' onClick={props.onClose}></div>
            <div className='modal-card'>
              <header className='modal-card-head'>
                <p className='modal-card-title'>{
                  translate(props.title)
                }</p>
                <Delete onClick={props.onClose} />
              </header>
              <section className='modal-card-body'>
                <ErrorBoundary id={`modal-${props.id}-content`}>{
                  typeof props.children === 'string'
                    ? <p>{props.children}</p>
                    : props.children
                }</ErrorBoundary>
              </section>
              <footer className='modal-card-foot buttons is-right'>{
                props.actions?.map((action, index) => (
                  <Button
                    key={index + '-' + action.id}
                    { ...action }
                  />
                ))
              }</footer>
            </div>
          </div>
        </ErrorBoundary>,
        BulmaFormSettings.CustomModalParentElement,
        props.id,
      )
    }
  </>
}
