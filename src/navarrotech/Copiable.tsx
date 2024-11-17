// Copyright © 2024 Navarrotech

// Utility
import { useTranslation } from '@/utility/hooks'

// Typescript
import type { StandardProps, LanguageKeyOrText } from '@/types'
import type { ReactNode } from 'react'

type asRightClick = {
  useRightClick: boolean
  useDoubleClick?: never
}

type asDoubleClick = {
  useDoubleClick: boolean
  useRightClick?: never
}

type Props =
  & (asRightClick | asDoubleClick)
  & StandardProps
  & {
    text: LanguageKeyOrText
    onCopied?: () => void
    children: ReactNode
    noCursor?: boolean
  }
  & Record<string, unknown>

const COPY_STYLE = { cursor: 'copy', } as const

export function Copiable(props: Props) {
  const { translate, } = useTranslation()
  const {
    id,
    text,
    disabled,
    onCopied,
    style,
    noCursor,
    className,
    fullwidth,
    title,
    useDoubleClick,
    useRightClick,
    children,
    onClick,
    ...customProps
  } = props

  const copyText = translate(text)

  function copyFunction() {
    if (disabled) {
      return
    }
    navigator.clipboard.writeText(copyText)
    onCopied?.()
  }

  const proxyStyle = {
    ...style || {},
    ...(noCursor ? {} : COPY_STYLE),
  }

  return <div
    { ...customProps }
    id={id}
    style={proxyStyle}
    className={className + (fullwidth ? ' is-fullwidth' : '')}
    // Title prop is optional, but we show the copiable text regardless
    title={title
      ? translate(title)
      : copyText
    }
    // Copy on right click, double click, or single click
    // It can only be one of, not multiple
    onContextMenu={
      useRightClick
        ? copyFunction
        : undefined
    }
    onDoubleClick={
      useDoubleClick
        ? copyFunction
        : undefined
    }
    onClick={
      (!useDoubleClick && !useRightClick)
        ? (event) => {
          copyFunction()
          // @ts-ignore - TODO: Fix this typescript ts-ignore?
          onClick?.(event)
        }
        : onClick
    }
  >{ children }</div>
}
