// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'
import { useTranslation } from '@/utility/translation'

// Typescript
import type { IconDefinition, LanguageKeyOrText, LightProps } from '@/types'
import type { ImageProps } from '@/elements/Image'
import type { ReactNode } from 'react'

// UI
import { Image } from '@/elements/Image'

// Misc
import { Nothing } from '@/constants'

// Documentation:
// https://bulma.io/documentation/components/card/

type FooterButtonProps = LightProps & {
  text: LanguageKeyOrText | ReactNode
  onClick: () => void
} & Record<string, unknown>

type Props =
  & LightProps
  & {
    collapseIcon?: IconDefinition
    hideCollapse?: boolean
    header?: LanguageKeyOrText
    image?: ImageProps
    children?: ReactNode
    buttons?: FooterButtonProps[]
  }

export function Card(props: Props) {
  const { translate, } = useTranslation()

  return <LightPropHandler
    { ...props }
    rootClassname='card'
    as='div'
  >
    { props.header
      ? <header className='card-header'>
        <p className='card-header-title'>{
          translate(props.header)
        }</p>
        { !props.hideCollapse
          ? <button className='card-header-icon' aria-label='more options'>
            <span className='icon'>{
              props.collapseIcon || DefaultDropdownIcon
            }</span>
          </button>
          : Nothing
        }
      </header>
      : Nothing
    }
    { props.image
      ? <div className='card-image'>
        <Image { ...props.image } />
      </div>
      : Nothing
    }
    { props.children
      ? <div className='card-content'>{
        typeof props.children === 'string'
          ? translate(props.children)
          : props.children
      }</div>
      : Nothing
    }
    { props.buttons
      ? <div className='card-footer'>{
        props.buttons.map((button, index) => (
          <a
            { ...button }
            key={button.id || ('card-button-' + index)}
            className={`card-footer-item ${button.className || ''}`.trim()}
            onClick={button.onClick}
          >{
              typeof button.text === 'string'
                ? translate(button.text)
                : button.text
            }</a>
        ) )
      }</div>
      : Nothing
    }
  </LightPropHandler>
}

// Font Awesome Free 6.6.0 by @fontawesome
// - https://fontawesome.com License
// - https://fontawesome.com/license/free
// Copyright 2024 Fonticons, Inc.
const DefaultDropdownIcon = <svg
  xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 448 512'>
  <path
    d='M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5
    12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7
    86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z'
  />
</svg>
