// Copyright © 2024 Navarrotech

// Core
import { LightPropHandler } from '@/utility/LightPropHandler'
import { useTranslation } from '@/utility/hooks'

// Typescript
import type { LanguageKeyOrText, LightProps } from '@/types'
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
        {/* TODO: */}
        {/* <button className='card-header-icon' aria-label='more options'>
          <span className='icon'>
            <i className='fas fa-angle-down' aria-hidden='true'></i>
          </span>
        </button> */}
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
