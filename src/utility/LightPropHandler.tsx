// Copyright © 2024 Navarrotech

// Core
import { useTranslation } from '@/utility/hooks'

// Typescript
import type { ChildProps, LightProps } from '@/types'

type Props = LightProps & ChildProps & {
  rootClassname: string
  // Allows you to specify a tag like 'div', 'span', etc:
  as?: keyof JSX.IntrinsicElements
}

export function LightPropHandler(props: Props) {
  const { translate, } = useTranslation()

  const Component = props.as || 'div'

  return <Component
    { ...props }
    title={translate(props.title)}
    className={`${props.rootClassname} ${props.className}`}
  >{
      props.children
    }</Component>
}
