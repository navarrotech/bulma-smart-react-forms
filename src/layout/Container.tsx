// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { LightProps, ChildProps } from '@/types'

type AsFluid = {
  fluid: true
  widescreen?: never
  maxWidescreen?: never
  fullhd?: never
  desktop?: never
  tablet?: never
}

type AsWidescreen = {
  fluid?: never
  widescreen: true
  maxWidescreen?: never
  fullhd?: never
  desktop?: never
  tablet?: never
}

type AsMaxWidescreen = {
  fluid?: never
  widescreen?: never
  maxWidescreen: true
  fullhd?: never
  desktop?: never
  tablet?: never
}

type AsFullHD = {
  fluid?: never
  widescreen?: never
  maxWidescreen?: never
  fullhd: true
  desktop?: never
  tablet?: never
}

type AsDesktop = {
  fluid?: never
  widescreen?: never
  maxWidescreen?: never
  fullhd?: never
  desktop: true
  tablet?: never
}

type AsTablet = {
  fluid?: never
  widescreen?: never
  maxWidescreen?: never
  fullhd?: never
  desktop?: never
  tablet: true
}

type AsASize = AsFluid | AsWidescreen | AsMaxWidescreen | AsFullHD | AsDesktop | AsTablet

export type ContainerProps =
  & LightProps
  & ChildProps
  & AsASize
  & {

  }
  & Record<string, unknown>

const ContainerOmittedProps: string[] = [
  'fluid',
  'widescreen',
  'maxWidescreen',
  'fullhd',
  'desktop',
  'tablet',
] as const

export function Container(props: ContainerProps) {
  // Template, otherwise LightPropHandler will do this for you
  const classes = [
    props.fluid && 'is-fluid',
    props.widescreen && 'is-widescreen',
    props.maxWidescreen && 'is-max-idescreen',
    props.fullhd && 'is-fullhd',
    props.desktop && 'is-max-desktop',
    props.tablet && 'is-max-tablet',
    props.className,
  ].filter(Boolean).join(' ')

  return <LightPropHandler
    { ...props }
    omit={ContainerOmittedProps}
    rootClassname='container'
    className={classes}
  >{
      props.children
    }</LightPropHandler>
}
