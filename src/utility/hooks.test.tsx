// Copyright © 2024 Navarrotech

// Core
import '@testing-library/jest-dom'
import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

// Typescript to test
import type { AsSize, AsLeftCenteredRight } from '@/types'

// Library to test
import { BulmaFormSettings } from '@/BulmaFormSettings'
import {
  useHotkey,
  useTranslation,
  useLeftCenteredRight,
  useSize,
} from './hooks'

describe('useSize', () => {
  // /////////////////// //
  //        Basic        //
  // /////////////////// //

  it('should apply small when given a small prop', () => {
    const props: AsSize = {
      small: true,
    }
    const { result, } = renderHook(() => useSize(props))
    expect(result.current).toBe('is-small')
  })

  it('should apply medium when given a medium prop', () => {
    const props: AsSize = {
      medium: true,
    }
    const { result, } = renderHook(() => useSize(props))
    expect(result.current).toBe('is-medium')
  })

  it('should apply large when given a large prop', () => {
    const props: AsSize = {
      large: true,
    }
    const { result, } = renderHook(() => useSize(props))
    expect(result.current).toBe('is-large')
  })

  it('should return an empty string when no size is specified', () => {
    const props: AsSize = {}
    const { result, } = renderHook(() => useSize(props))
    expect(result.current).toBe('')
  })

  it('should not care about other unknown props', () => {
    const props: AsSize & Record<string, unknown> = {
      foo: true,
      text: 'string',
      small: true,
    }
    const { result, } = renderHook(() => useSize(props))
    expect(result.current).toBe('is-small')
  })

  it('should return a different prefix when given', () => {
    const props: AsSize = {
      small: true,
    }
    const { result, } = renderHook(() => useSize(props, 'are'))
    expect(result.current).toBe('are-small')
  })
})

describe('useLeftCenteredRight', () => {
  // /////////////////// //
  //        Basic        //
  // /////////////////// //

  it('should apply left when given a left prop', () => {
    const props: AsLeftCenteredRight = {
      left: true,
    }
    const { result, } = renderHook(() => useLeftCenteredRight(props))
    expect(result.current).toBe('is-left')
  })

  it('should apply centered when given a centered prop', () => {
    const props: AsLeftCenteredRight = {
      centered: true,
    }
    const { result, } = renderHook(() => useLeftCenteredRight(props))
    expect(result.current).toBe('is-centered')
  })

  it('should apply right when given a right prop', () => {
    const props: AsLeftCenteredRight = {
      right: true,
    }
    const { result, } = renderHook(() => useLeftCenteredRight(props))
    expect(result.current).toBe('is-right')
  })

  it('should return an empty string when no size is specified', () => {
    const props: AsLeftCenteredRight = {}
    const { result, } = renderHook(() => useLeftCenteredRight(props))
    expect(result.current).toBe('')
  })

  it('should not care about other unknown props', () => {
    const props: AsLeftCenteredRight & Record<string, unknown> = {
      foo: true,
      text: 'string',
      centered: true,
    }
    const { result, } = renderHook(() => useLeftCenteredRight(props))
    expect(result.current).toBe('is-centered')
  })

  it('should return a different prefix when given', () => {
    const props: AsLeftCenteredRight = {
      centered: true,
    }
    const { result, } = renderHook(() => useLeftCenteredRight(props, 'are'))
    expect(result.current).toBe('are-centered')
  })
})

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

describe('useHotkey', () => {
  afterEach(() => {
    // Cleanup all event listeners after each test
    vi.restoreAllMocks()
  })

  it('calls the callback when the specified key is pressed', () => {
    // Arrange
    const key = 'a'
    const callback = vi.fn()
    renderHook(() => useHotkey(key, callback))

    // Act
    const event = new KeyboardEvent('keydown', { key, })
    window.dispatchEvent(event)

    // Assert
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('does not call the callback for a different key', () => {
    // Arrange
    const key = 'a'
    const callback = vi.fn()
    renderHook(() => useHotkey(key, callback))

    // Act
    const event = new KeyboardEvent('keydown', { key: 'b', }) // Different key
    window.dispatchEvent(event)

    // Assert
    expect(callback).not.toHaveBeenCalled()
  })

  it('re-registers the event listener when dependencies change', () => {
    // Arrange
    const callback = vi.fn()
    const { rerender, } = renderHook(({ keyDep, }) => useHotkey(keyDep, callback), {
      initialProps: { keyDep: 'a', },
    })

    // Act: Update dependencies
    rerender({ keyDep: 'b', })

    // Dispatch events
    const oldKeyEvent = new KeyboardEvent('keydown', { key: 'a', })
    const newKeyEvent = new KeyboardEvent('keydown', { key: 'b', })
    window.dispatchEvent(oldKeyEvent)
    window.dispatchEvent(newKeyEvent)

    // Assert
    expect(callback).toHaveBeenCalledTimes(1) // Only for 'b'
  })

  it('does not register an event listener if disabled', () => {
    // Arrange
    const key = 'a'
    const callback = vi.fn()
    renderHook(() => useHotkey(key, callback, [], true)) // Disabled

    // Act
    const event = new KeyboardEvent('keydown', { key, })
    window.dispatchEvent(event)

    // Assert
    expect(callback).not.toHaveBeenCalled()
  })

  it('removes the event listener on unmount', () => {
    // Arrange
    const key = 'a'
    const callback = vi.fn()
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')

    const { unmount, } = renderHook(() => useHotkey(key, callback))

    // Assert: Listener added
    expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function))

    // Act: Unmount
    unmount()

    // Assert: Listener removed
    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
  })
})
