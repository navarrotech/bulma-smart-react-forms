// Copyright © 2024 Navarrotech

// Core
import { useColorful } from '@/utility/color'
import { useSize } from '@/utility/hooks'
import { useTranslation } from '@/utility/hooks'

// Typescript
import type { AsSize, LanguageKeyOrText, LightProps } from '@/types'
import type { ColorfulProps } from '@/utility/color'
import type { ChangeEvent, MouseEvent } from 'react'

// UI
import { Control } from './Control'

export type Option = {
  id?: string
  key?: string | number
  value: string
  text?: LanguageKeyOrText
  optGroup?: string
}

type AsValue = {
  value: string
  defaultValue?: never
}

type AsDefaultvalue = {
  value?: never
  defaultValue: string
}

export type SelectProps =
  & LightProps
  & ColorfulProps
  & AsSize
  & (AsValue | AsDefaultvalue)
  & {
    // Required:
    id: string // Id is good practice
    options: Option[]

    // Styles
    label?: LanguageKeyOrText
    icon?: string
    iconRight?: string
    size?: string | number

    // Events
    onClick?: MouseEvent<HTMLButtonElement>
    onChange?: (value: Option, event: ChangeEvent<HTMLSelectElement>) => void
    onOpen?: () => void
    onClose?: () => void

    // States
    multiple?: boolean
    fullwidth?: boolean
    disabled?: boolean
    rounded?: boolean
    active?: boolean
    hovered?: boolean
    focused?: boolean
    loading?: boolean
  }
  & Record<string, unknown>

export function Select(props: SelectProps) {
  const { translate, } = useTranslation()

  const { className: colorfulClass, style, } = useColorful(props)
  const sizeClass = useSize(props)

  // Template, otherwise LightPropHandler will do this for you
  const classes = [
    'select',
    props.className,
    colorfulClass,
    sizeClass,
    props.disabled && 'is-disabled',
    props.multiple && 'is-multiple',
    props.fullwidth && 'is-fullwidth',
    props.rounded && 'is-rounded',
    props.active && 'is-active',
    props.hovered && 'is-hovered',
    props.focused && 'is-focused',
    props.loading && 'is-loading',
  ].filter(Boolean).join(' ')

  const isDisabled = props.disabled

  const optionsToValueMap: Record<string, Option> = {}
  const optionGroups: Record<string, Option[]> = {}
  const nonOptGroupOptions: JSX.Element[] = []

  props.options?.forEach((option, index) => {
    const text = option.text || option.value
    if (optionsToValueMap[option.value]) {
      // eslint-disable-next-line no-console
      console.warn(`Duplicate 'value' attribute found in options: ${option.value}`)
    }

    optionsToValueMap[option.value] = option

    if (option.optGroup) {
      if (!optionGroups[option.optGroup]) {
        optionGroups[option.optGroup] = []
      }
      optionGroups[option.optGroup].push(option)
      return
    }

    const Option = <option
      id={option.id}
      key={ option.key !== undefined
        ? option.key
        : option.value + '-' + index
      }
      value={option.value}
    >{ translate(text) }</option>

    nonOptGroupOptions.push(Option)
  })

  return <Control
    label={props.label}
    fullwidth={props.fullwidth}
    icon={props.icon}
    iconRight={props.iconRight}
    loading={props.loading}
    iconSize={
      props.small
        ? 'small'
        : props.medium
          ? 'medium'
          // @ts-ignore // TODO: fix this?
          : props.large
            ? 'large'
            : undefined
    }
  >
    <div
      className={classes}
      style={style}
    >
      <select
        id={props.id}
        disabled={props.disabled}
        multiple={props.multiple}
        onChange={
          !isDisabled
          && ((event) => props.onChange && props.onChange(
            optionsToValueMap[event.target.value],
            event,
          ))
        }
        value={props.value}
        defaultValue={props.defaultValue}
        size={props.size !== undefined
          ? parseInt(props.size as string)
          : undefined
        }
      >
        { Object
          .keys(optionGroups)
          .map((optGroup) => (
            <optgroup
              key={optGroup}
              label={optGroup}
            >
              { optionGroups[optGroup].map((option, index) => {
                const text = option.text || option.value
                return <option
                  id={option.id}
                  key={ option.key !== undefined
                    ? option.key
                    : option.value + '-' + index
                  }
                  value={option.value}
                >{ translate(text) }</option>
              }) }
            </optgroup>
          )) }
        { nonOptGroupOptions }
      </select>
    </div>
  </Control>
}
