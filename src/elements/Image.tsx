// Copyright © 2024 Navarrotech

// Typescript
import type { LightProps, AsLeftCenteredRight } from '@/types'
import { useTranslation } from '@/utility/hooks'
import { ImgHTMLAttributes } from 'react'

// Documentation:
// https://bulma.io/documentation/elements/image/

type AsPresetSize = {
  size:
    | 16
    | 24
    | 32
    | 48
    | 64
    | 96
    | 128
    | 256
    | 512
  width?: never
  height?: never
  ratio?: never
}

type AsCustomSize = {
  width: number | string
  height: number | string
  size?: never
  ratio?: never
}

type AsRatio = {
  ratio:
    | 'square'
    | '1by1'
    | '5by4'
    | '4by3'
    | '3by2'
    | '5by3'
    | '16by9'
    | '2by1'
    | '3by1'
    | '4by5'
    | '3by4'
    | '2by3'
    | '3by5'
    | '9by16'
    | '1by2'
    | '1by3'
  width?: never
  height?: never
  size?: never
}

type Props =
  & LightProps
  & AsLeftCenteredRight
  & (AsPresetSize | AsCustomSize | AsRatio)
  & {
    rounded?: boolean
    src: string
    alt: string
    imgProps?: ImgHTMLAttributes<HTMLImageElement>
  }
  & Record<string, unknown>

export function Image(props: Props) {
  const { translate, } = useTranslation()

  const className: string = [
    'image',
    props.className,
    props.rounded && 'is-rounded',
    props.left && 'mr-auto',
    props.centered && 'mx-auto',
    props.right && 'ml-auto',
    props.ratio && `is-${props.ratio}`,
    props.size && `is-${props.size}x${props.size}`,
  ].filter(Boolean).join(' ')

  return <figure
    { ...props }
    title={translate(props.title)}
    className={className}
  >
    <img
      width={props.width}
      height={props.height}
      { ...(props.imgProps || {}) }
      src={props.src}
      alt={props.alt}
    />
  </figure>
}
