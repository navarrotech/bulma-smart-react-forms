// Copyright © 2024 Navarrotech

// Core
import { useEffect, useState } from 'react'
import { BulmaFormSettings } from '../BulmaFormSettings'

// Typescript
import type { LanguageFunction, LanguageKeyOrText } from '../types'

function translate(keyOrText: LanguageKeyOrText) {
  return BulmaFormSettings.translationFunction(keyOrText)
}

type UseTranslationReturn = {
  translate: LanguageFunction
  language: string
}

export function useTranslation(): UseTranslationReturn {
  const [ language, setLanguage, ] = useState<string>(BulmaFormSettings.getCurrentLanguage())

  // When the language changes, triggers a re-render on the component
  useEffect(() => BulmaFormSettings.onLanguageChange(setLanguage), [])

  return {
    // The ref won't change with the fn proxy, so it's safe to use it in dependency arrays
    translate,
    language,
  }
}

export function useHotkey(
  key: string,
  callback: () => void,
  deps: any[] = [],
  disabled = false,
) {
  useEffect(() => {
    if (disabled) {
      return () => {}
    }

    const handler = (event: KeyboardEvent) => {
      if (event.key !== key) {
        return
      }
      callback()
    }

    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ key, callback, disabled, ...deps, ])
}
