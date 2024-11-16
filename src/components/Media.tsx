// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'

// Typescript
import type { ReactNode } from 'react'
import type { LightProps } from '@/types'
import type { ImageProps } from '@/elements/Image'
import type { TitlesProps } from '@/elements/Titles'

// UI
import { Image } from '@/elements/Image'
import { Titles } from '@/elements/Titles'

type Props =
  & LightProps
  & {
    image?: ImageProps
    titles?: TitlesProps
    as?: keyof JSX.IntrinsicElements
    children?: ReactNode
  }
  & Record<string, unknown>

export function Media(props: Props) {
  return <LightPropHandler
    { ...props }
    rootClassname='media'
    as={props.as || 'article'}
  >
    { props.image
      ? <figure className='media-left'>
        <Image { ...props.image } />
      </figure>
      : null
    }
    { props.title
      ? <div className='media-content'>
        <Titles { ...props.titles } />
      </div>
      : null
    }
    { props.children }
  </LightPropHandler>
}
