// Copyright © 2024 Navarrotech

// Core
import { createElement } from 'react'

// Typescript
import type { HTMLInputAutoCompleteAttribute, KeyboardEvent, MouseEvent } from 'react'
import type {
  IconDefinition,
  InputTypeAttribute,
  LanguageKeyOrText,
  StandardProps,
  AsSize,
} from '@/types'
import type { ColorfulProps } from '@/utility/color'

// UI
import { Control } from './Control'

// Utility
import { useTranslation } from '@/utility/translation'
import { useColorful } from '@/utility/color'
import { useSize } from '@/utility/hooks'
import { omitProps } from '@/utility/filters'

// Documentation:
// https://bulma.io/documentation/form/input/

type OnChangeValue<T = string> = {
  value: T
}

export type OnChangeAsString = {
  type?: Exclude<InputTypeAttribute, 'number'> | never
  value?: string
  onChange?: (value: OnChangeValue, event: MouseEvent<HTMLInputElement>) => void
}

export type OnChangeAsNumber = {
  type?: 'number'
  value?: number
  onChange?: (value: OnChangeValue<number>, event: MouseEvent<HTMLInputElement>) => void
}

export type InputProps =
  & Omit<StandardProps, 'onChange'>
  & ColorfulProps
  & AsSize
  & (OnChangeAsString | OnChangeAsNumber)
  & {
    // Required
    id: string // ID is good practice, we should require it

    // States
    textarea?: boolean
    disabled?: boolean
    active?: boolean
    hovered?: boolean
    focused?: boolean
    loading?: boolean
    readonly?: boolean
    static?: boolean

    // Smart stuff
    showErrorWhileEmpty?: boolean
    errorMessage?: string | string[]
    // showClearButton?: boolean

    // Style
    name?: LanguageKeyOrText
    placeholder?: LanguageKeyOrText
    icon?: IconDefinition
    iconRight?: IconDefinition
    label?: LanguageKeyOrText
    help?: LanguageKeyOrText

    // Events
    onEnter?: (event: KeyboardEvent<HTMLInputElement>) => void
    onEscape?: (event: KeyboardEvent<HTMLInputElement>) => void
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void

    // Validators
    min?: number
    max?: number
    // errors?: Record<string, string>
    // validator?: AnySchema
    // showErrorWhileEmpty?: boolean

    // Optional
    autoFocus?: boolean
    autoComplete?: HTMLInputAutoCompleteAttribute
    fullwidth?: boolean
    className?: string
  }
  & Record<string, unknown>

export function Input(props: InputProps) {
  const { translate, } = useTranslation()
  const sizeClass = useSize(props)

  const { className: colorfulClass, style, } = useColorful(props)

  const classes = [
    props.textarea
      ? 'textarea'
      : 'input',
    sizeClass,
    props.className,
    colorfulClass,
    props.fullwidth && 'is-fullwidth',
    props.disabled && 'is-disabled',
    props.active && 'is-active',
    props.hovered && 'is-hovered',
    props.focused && 'is-focused',
    props.loading && 'is-loading',
    props.readonly && 'is-readonly',
    props.static && 'is-static',
  ].filter(Boolean).join(' ')

  const disabled = props.disabled || props.readonly || props.static || props.loading

  // @ts-ignore // TODO: Fix this
  return <Control
    icon={props.icon}
    iconRight={props.iconRight}
    label={props.label}
    help={props.help}
    // Only show an error if the value is not empty, OR if showErrorWhileEmpty is true
    error={(props.showErrorWhileEmpty || !!props.value) ? props.errorMessage : undefined}
    fullwidth={props.fullwidth}
    loading={props.loading}
    small={props.small}
    medium={props.medium}
    large={props.large}
    iconSize={
      props.small
        ? 'small'
        : props.medium
          ? undefined
          // @ts-ignore // TODO: Fix this
          : props.large
            ? 'medium'
            : 'small'
    }
  >{
      createElement(
        // Tag name
        props.textarea
          ? 'textarea'
          : 'input',
        // Props
        {
          ...omitProps(props as any),
          id: props.id,
          className: classes,
          name: translate(props.name),
          placeholder: translate(props.placeholder),
          onClick: !disabled && props.onClick || undefined,
          onChange: !disabled && ((event: MouseEvent<HTMLInputElement>) => {
            if (props.type === 'number') {
              props.onChange?.({
                value: parseFloat(event.currentTarget.value),
              }, event)
            }
            else {
              props.onChange?.({
                value: event.currentTarget.value,
              }, event)
            }
          }) || undefined,
          onKeyDown: !disabled && ((event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Escape') {
              event.preventDefault()
              event.currentTarget.blur()
              props.onEscape?.(event)
            }
            else if (event.key === 'Enter') {
              props.onEnter?.(event)
            }
            props.onKeyDown?.(event)
          }) || undefined,
          style,
        },
      )
    }</Control>

  // const { translate, } = useTranslation()

  // let {
  //   rootClassname = '',
  // } = props

  // const {
  //   id,
  //   value,
  //   onChange,

  //   showErrorWhileEmpty = false,
  //   showClearButton = false,
  //   noFieldParent = false,
  //   fullwidth = false,
  // } = props

  // let className = 'input'
  // if (props.className) {
  //   className += (' ' + props.className)
  // }


  // const validationResult = useValidator(
  //   props.validator,
  //   value,
  // )

  // if (!validationResult.isValid && (value || showErrorWhileEmpty)) {
  //   className += ' is-danger'
  // }

  // const content = <>
  //   { label ? <label className='label'>{label}</label> : <></> }
  //   <div className={controlClassname}>
  //     <input
  //       id={id}
  //       autoFocus={props.autoFocus}
  //       autoComplete={props.autoComplete || 'off'}
  //       className={className}
  //       type={props.password
  //         ? 'password'
  //         : props.number
  //           ? 'number'
  //           : 'text'
  //       }
  //       placeholder={placeholder}
  //       value={value}
  //       onChange={(event) => {
  //         if (props.number) {
  //           let newVal = parseFloat(event.target.value)
  //           if (isNaN(newVal)) {
  //             // @ts-ignore
  //             onChange(0)
  //             return
  //           }

  //           if (props.min != undefined) {
  //             newVal = Math.max(newVal, props.min)
  //           }

  //           if (props.max != undefined) {
  //             newVal = Math.min(newVal, props.max)
  //           }

  //           onChange(
  //             // @ts-ignore
  //             newVal,
  //             event,
  //           )
  //         }
  //         else {
  //           let newVal = event.target.value

  //           if (props.max != undefined) {
  //             newVal = newVal.slice(0, props.max)
  //           }

  //           // @ts-ignore
  //           onChange(newVal, event)
  //         }
  //       }}
  //       onKeyDown={(e) => {
  //         if (e.key === 'Escape') {
  //           e.preventDefault()
  //           e.stopPropagation()
  //           // @ts-ignore
  //           e.target?.blur()
  //         }
  //         else if (e.key === 'Enter') {
  //           props.onEnter?.(e)
  //         }
  //       }}
  //     />
  //     { showClearButton && !!value
  //       ? <button
  //         className='delete clear-input-button'
  //         onClick={() => {
  //           if (props.number) {
  //             // @ts-ignore
  //             onChange(0)
  //           }
  //           else {
  //             // @ts-ignore
  //             onChange('')
  //           }
  //         }}
  //       />
  //       : <></>
  //     }
  //     { props.icon
  //       ? <span className='icon is-left'>
  //         <FontAwesomeIcon icon={props.icon} />
  //       </span>
  //       : <></>
  //     }
  //     { props.iconRight
  //       ? <span className='icon is-right'>
  //         <FontAwesomeIcon icon={props.iconRight} />
  //       </span>
  //       : <></>
  //     }
  //     { helpText
  //       ? <p className='help'>{helpText}</p>
  //       : <></>
  //     }
  //     { (showErrorWhileEmpty || value)
  //       // @ts-ignore
  //       ? validationResult.errorMessages['']
  //       : <></>
  //     }
  //   </div>
  // </>
}
