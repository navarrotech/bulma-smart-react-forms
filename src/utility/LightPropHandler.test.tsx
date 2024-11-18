// Copyright © 2024 Navarrotech

// Core
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, afterEach, vi } from 'vitest'

// Library to test
import * as hooks from './hooks'
import { LightPropHandler } from './LightPropHandler'

describe('useColorful', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  // /////////////////// //
  //        Basic        //
  // /////////////////// //

  it('should render as a custom element and render with unknown attributes', () => {
    // vi.spyOn(useTranslation, 'useTranslation').mockReturnValue({})

    render(
      <LightPropHandler
        rootClassname='foo'
        className='bar'
        as='button'
        data-testid='sheldon'
        data-foo='noop'
      >
        Click me
      </LightPropHandler>,
    )

    // It should fail if it can't apply the custom attribute
    const button = screen.getByTestId('sheldon')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('foo')
    expect(button).toHaveClass('bar')
    expect(button).toHaveAttribute('data-foo', 'noop')
    expect(button.tagName).toBe('BUTTON')
  })

  it('should translate the children', () => {
    const mock = vi
      .spyOn(hooks, 'useTranslation')
      .mockReturnValue({
        language: 'en',
        translate: (text: string) => {
          if (text === 'key.to-be-translated') {
            return 'translated-text'
          }
          return text
        },
      })

    render(
      <LightPropHandler
        rootClassname='foo'
        as='button'
        data-testid='sheldon'
      >
        key.to-be-translated
      </LightPropHandler>,
    )

    const button = screen.getByTestId('sheldon')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('translated-text')
    expect(mock).toHaveBeenCalledTimes(1)
  })

  it('should translate the title', () => {
    const mock = vi
      .spyOn(hooks, 'useTranslation')
      .mockReturnValue({
        language: 'en',
        translate: (text: string) => {
          if (text === 'key.to-be-translated') {
            return 'translated-text'
          }
          return text
        },
      })

    render(
      <LightPropHandler
        rootClassname='foo'
        title='key.to-be-translated'
        as='button'
        data-testid='sheldon'
      >
        Click me
      </LightPropHandler>,
    )

    const button = screen.getByTestId('sheldon')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('title', 'translated-text')
    expect(mock).toHaveBeenCalledTimes(1)
  })

  it('should accept custom tagnames', () => {
    render(
      <LightPropHandler
        rootClassname='foo'
        as='section'
        data-testid='sheldon'
      >
        Click me
      </LightPropHandler>,
    )

    const button = screen.getByTestId('sheldon')
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('SECTION')
  })

  it('should be a div by default', () => {
    render(
      <LightPropHandler
        rootClassname='foo'
        data-testid='sheldon'
      >
        Click me
      </LightPropHandler>,
    )

    const button = screen.getByTestId('sheldon')
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('DIV')
  })
})
