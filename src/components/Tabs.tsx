// Copyright © 2024 Navarrotech

// Core
import { useState } from 'react'
import { LightPropHandler } from '@/utility/LightPropHandler'
import { useLeftCenteredRight, useSize } from '@/utility/hooks'

// Typescript
import type { MouseEvent, ReactNode } from 'react'
import type { LightProps, AsLeftCenteredRight, AsSize } from '@/types'
import type { TabProps } from './Tab'

// UI
import { Tab } from './Tab'

type Item = TabProps & {
  value?: string
}

type TabChangeEvent = {
  index: number
  value: string
  item: Item
  event: MouseEvent<HTMLAnchorElement>
}

type AsItems = {
  items?: Item[]
  onTabChange?: (event: TabChangeEvent) => void
  // Index or value string
  defaultActive?: number | string
  children?: never
}

type AsChildren = {
  items?: never
  onTabChange?: never
  defaultActive?: never
  children: ReactNode
}

type Props =
  & LightProps
  & AsLeftCenteredRight
  & AsSize
  & (AsItems | AsChildren)
  & {
    boxed?: boolean
    toggle?: boolean
    rounded?: boolean
    fullwidth?: boolean
  }
  & Record<string, unknown>

function findActiveIndex(items: Item[], defaultActive: number | string): number | null {
  if (defaultActive === null || defaultActive === undefined) {
    return null
  }

  if (typeof defaultActive === 'number') {
    return defaultActive
  }

  const idx = items.findIndex((item) => item.value === defaultActive)
  if (idx !== -1) {
    return idx
  }

  return items.findIndex((item) => item.text === defaultActive) || 0
}

export function Tabs(props: Props) {
  const [ activeIndex, setActiveIndex, ] = useState<number>(
    findActiveIndex(props.items || [], props.defaultActive || 0),
  )

  const sizeClass = useSize(props)
  const centeredProps = useLeftCenteredRight(props)

  const classes = [
    centeredProps,
    sizeClass,
    props.boxed && 'is-boxed',
    props.toggle && 'is-toggle',
    !props.toggle && props.rounded && 'is-rounded',
    props.toggle && props.rounded && 'is-toggle-rounded',
    props.fullwidth && 'is-fullwidth',
    props.className,
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    rootClassname='tabs'
    className={classes}
    as='div'
  >
    <ul>{
      props.children
        || props.items
          ?.map((item, index) => <Tab
            { ...item }
            key={item + '-' + index}
            active={activeIndex === index}
            onClick={(event) => {
              item?.onClick?.(event)
              setActiveIndex(index)
              props.onTabChange?.({
                index,
                value: item.value,
                item,
                event,
              } as TabChangeEvent)
            }}
          />)
    }</ul>
  </LightPropHandler>
}
