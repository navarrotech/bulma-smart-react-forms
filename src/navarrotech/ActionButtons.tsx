// Copyright © 2024 Navarrotech

import type { ActionButton } from '@/types'

import { Button } from './Button'
import { useTranslation } from '@/utility/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type AsCentered = {
  centered: true
  right?: never
  left?: never
}

type AsRight = {
  right: true
  centered?: never
  left?: never
}

// Make `left` optional here so it's used as the default when neither `centered` nor `right` is set
type AsLeft = {
  left?: true
  centered?: never
  right?: never
}

type Props = (AsCentered | AsRight | AsLeft) & {
  // Required
  id: string
  actions: ActionButton[]
  // Optional
  fullwidth?: boolean
  className?: string
  noWrap?: boolean
}

export function ActionButtons(props: Props) {
  const { translate, } = useTranslation()

  let className = 'block buttons'
  if (props.centered) {
    className += ' is-centered'
  }
  else if (props.right) {
    className += ' is-right'
  }
  else {
    className += ' is-left'
  }
  if (props.fullwidth) {
    className += ' is-fullwidth'
  }
  if (props.className) {
    className += ` ${props.className}`
  }

  const buttons = props.actions.map((action, index) => (
    <Button
      id={`${action.id}-action-${index}`}
      key={`${action.id}-action-${index}`}
      title={action.title}
      color={action.color}
      loading={action.loading}
      disabled={action.disabled}
      onClick={action.onClick}
    >
      { action.icon
        ? <span className='icon'>
          <FontAwesomeIcon icon={action.icon} />
        </span>
        : <></>
      }
      <span>{
        t(action.text)
      }</span>
    </Button>
  ))

  if (props.noWrap) {
    return <>{ buttons }</>
  }

  return <div id={props.id} className={className}>{
    buttons
  }</div>
}
