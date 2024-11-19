// Copyright © 2024 Navarrotech

// Core
import { useColorful } from '@/utility/color'
import { useTranslation } from '@/utility/translation'

// Typescript
import type { LanguageKeyOrText } from '@/types'
import type { ColorfulProps } from '@/utility/color'

export type HelpProps = {
  text: LanguageKeyOrText
  title?: LanguageKeyOrText
  className?: string
  centered?: boolean
  right?: boolean
} & ColorfulProps

export function Help(props: HelpProps) {
  const { translate, } = useTranslation()
  const { className: colorClass, style, } = useColorful(props)

  const classes = [
    'help',
    props.className,
    colorClass,
    props.centered && 'has-text-centered',
    props.right && 'has-text-right',
  ].filter(Boolean).join(' ')

  return <p
    key={props.text}
    className={classes}
    style={style}
    title={props.title}
  >{
      translate(props.text)
    }</p>
}
