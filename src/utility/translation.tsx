// Copyright © 2024 Navarrotech

// Core
import { Component, useEffect, useState } from 'react'
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

export class TranslationComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {
  private translationSubscription: () => void

  constructor(props: P) {
    super(props)

    this.translate = this.translate.bind(this)
    this.onLanguageChange = this.onLanguageChange.bind(this)
  }

  componentDidMount(): void {
    BulmaFormSettings.onLanguageChange(this.onLanguageChange)
  }

  componentWillUnmount(): void {
    this.translationSubscription()
  }

  private onLanguageChange() {
    this.forceUpdate()
  }

  public translate(keyOrText: LanguageKeyOrText): string {
    return BulmaFormSettings.translationFunction(keyOrText)
  }
}
