// Copyright © 2024 Navarrotech

import '@testing-library/jest-dom'
import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

// Library to test
import { BulmaFormSettings } from '@/BulmaFormSettings'
import { useTranslation } from '@/utility/translation'

describe('useTranslation', () => {
  // Reset any changes to BulmaFormSettings after each test
  afterEach(() => {
    BulmaFormSettings.translationFunction = (str) => str
    BulmaFormSettings.changeLanguage('')
  })
  // /////////////////// //
  //        Basic        //
  // /////////////////// //

  it('initializes with the blank language & default fn', () => {
    // Act
    const { result, } = renderHook(() => useTranslation())

    // Assert, we don't assume the default language
    expect(result.current.language).toBe('')
    expect(result.current.translate('hello')).toBe('hello')
  })

  it('updates the language when changeLanguage is called', () => {
    // Arrange
    const newLanguage = 'fr'

    // Act
    const { result, } = renderHook(() => useTranslation())
    act(() => {
      BulmaFormSettings.changeLanguage(newLanguage)
    })

    // Assert
    expect(result.current.language).toBe(newLanguage)
  })

  it('allows custom translation function', () => {
    // Arrange
    const customTranslate = vi.fn((key: string) => `translated(${key})`)
    BulmaFormSettings.translationFunction = customTranslate

    // Act
    const { result, } = renderHook(() => useTranslation())
    const translatedText = result.current.translate('test-key')

    // Assert
    expect(customTranslate).toHaveBeenCalledWith('test-key')
    expect(translatedText).toBe('translated(test-key)')
  })

  it('cleans up event listeners on unmount', () => {
    // Arrange
    const removeListenerSpy = vi.spyOn(BulmaFormSettings, 'onLanguageChange')

    // Act
    const { unmount, } = renderHook(() => useTranslation())
    unmount()

    // Assert
    expect(removeListenerSpy).toHaveBeenCalled()
  })
})
