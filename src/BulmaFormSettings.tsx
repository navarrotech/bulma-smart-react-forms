// Copyright © 2024 Navarrotech

// Core
import EventEmitter from 'events'

// Typescript
import type { ComponentType } from 'react'
import type { LanguageKeyOrText, LanguageFunction } from './types'

const DEFAULT_TRANSLATION_FUNCTION = (keyOrText: LanguageKeyOrText) => keyOrText

type EventMap = {
  'language': [ string ]
}

export class BulmaFormSettings {
  // //////////////////////////// //
  //    Translation & Language    //
  // //////////////////////////// //

  public static translationFunction: LanguageFunction = DEFAULT_TRANSLATION_FUNCTION
  private static language: string = ''
  public static events: EventEmitter<EventMap> = new EventEmitter()

  public static changeLanguage(newLanguage: string) {
    this.language = newLanguage
    this.events.emit('language', newLanguage)
  }

  public static onLanguageChange(callback: (newLang: string) => void): () => void {
    const listener = (newLang: string) => callback(newLang)
    this.events.on('language', listener)
    return () => this.events.removeListener('language', listener)
  }

  public static getCurrentLanguage() {
    return this.language
  }

  // ////////////////////////// //
  //    Targets and defaults    //
  // ////////////////////////// //

  public static CustomErrorBoundary: ComponentType = null
  public static CustomModalParentElement: HTMLElement
    = document.getElementById('body') as HTMLElement
}

BulmaFormSettings.events.setMaxListeners(Infinity)
