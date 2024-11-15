// Copyright © 2024 Navarrotech

import type { StandardProps, AsSize } from '@/types'

type Props =
  & Omit<StandardProps, 'fullwidth'>
  & AsSize
  & Record<string, unknown>

export function Delete(props: Props) {
  const className: string = [
    'delete',
    props.className,
    props.fullwidth && 'is-fullwidth',
    props.disabled && 'is-disabled',
    props.small && 'is-small',
    props.medium && 'is-medium',
    props.large && 'is-large',
  ].filter(Boolean).join(' ')

  return <button
    { ...props }
    className={className}
    onClick={!props.disabled && props.onClick}
  />
}
