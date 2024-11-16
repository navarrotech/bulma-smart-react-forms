// Copyright © 2024 Navarrotech

// Core
import { useState, useEffect, useRef } from 'react'

// Typescript
import type { ReactNode } from 'react'
import type { LanguageFunction, StandardProps } from '@/types'
import { useTranslation } from '@/utility/hooks'

// Documentation:
// https://bulma.io/documentation/components/dropdown/

export type DropdownTriggerProps = {
  translate: LanguageFunction,
  isActive: boolean
}

type Props = StandardProps & {
  // Required:
  trigger: ReactNode | ((props: DropdownTriggerProps) => ReactNode)
  children: ReactNode

  // Smart:
  forceActive?: boolean
  forceClosed?: boolean
  onOpened?: () => void
  onClosed?: () => void

  // From bulma:
  hoverable?: boolean
  right?: boolean
  up?: boolean

  // Optional:
  triggerClassname?: string
  menuClassname?: string
  contentClassname?: string
} & Record<string, unknown>

export function Dropdown(props: Props) {
  const { translate, } = useTranslation()

  // State
  const [ isOpen, setIsOpen, ] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Listen to clicks outside the dropdown
  useEffect(() => {
    if (!isOpen) {
      return () => {}
    }

    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = dropdownRef.current
      if (!dropdown) {
        return
      }

      const target = event.target as HTMLElement

      // If the click was outside of the dropdown, close it
      if (!dropdown.contains(target)) {
        setIsOpen(false)
      }
      // If the click was inside the dropdown, and the element was an anchor (<a>), close it
      else if (target.tagName === 'A') {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ isOpen, ])

  // Close when it becomes disabled
  useEffect(() => {
    if (props.disabled && isOpen) {
      setIsOpen(false)
    }
  }, [ isOpen, props.disabled, ])

  // Listen to force events
  useEffect(() => {
    if (props.forceActive && !isOpen) {
      setIsOpen(true)
    }
    if (props.forceClosed && isOpen) {
      setIsOpen(false)
    }
  }, [ isOpen, props.forceActive, props.forceClosed, ])

  // Custom events
  useEffect(() => {
    if (isOpen && props.onOpened) {
      props.onOpened()
    }
    if (!isOpen && props.onClosed) {
      props.onClosed()
    }
    // eslint-disable-next-line
  }, [ isOpen, ])

  // Classnames
  const classes: string = [
    'dropdown',
    props.className,
    !props.forceClosed && (isOpen || props.forceActive) && 'is-active',
    props.fullwidth && 'is-fullwidth',
    props.up && 'is-up',
    props.right && 'is-right',
    props.hoverable && 'is-hoverable',
  ].filter(Boolean).join(' ')

  const triggerClassname = 'dropdown-trigger ' + (props.triggerClassname || '')
  const menuClassname = 'dropdown-menu ' + (props.menuClassname || '')
  const contentClassname = 'dropdown-content ' + (props.contentClassname || '')

  return (
    <div
      { ...props }
      id={props.id}
      ref={dropdownRef}
      title={translate(props.title)}
      className={classes}
    >
      <div
        className={triggerClassname}
        onClick={() => {
          if (props.disabled || props.forceActive || props.forceClosed) {
            return
          }
          setIsOpen(!isOpen)
        }}
      >
        { typeof props.trigger === 'function'
          ? props.trigger({
            isActive: isOpen,
            translate,
          })
          : props.trigger
        }
      </div>
      <div className={menuClassname} role='menu'>
        <div className={contentClassname}>
          { props.children }
        </div>
      </div>
    </div>
  )
}
