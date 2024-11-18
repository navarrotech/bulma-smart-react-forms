// Copyright © 2024 Navarrotech

// Core
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi, afterEach } from 'vitest'

// Library to test
import { Button } from '@/elements/Button'
import * as hooks from '@/utility/hooks'

// Notes:
// 1. useColorful is already tested ('is-primary', 'is-danger', etc.)
// 2. useSize is already tested ('is-small', 'is-medium', 'is-large')
// These don't need AS throughly tested as before, a basic check is sufficient.

describe('Button Component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders correctly with required props & id', () => {
    render(<Button id='leonard'>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('id', 'leonard')
    expect(button.tagName).toBe('BUTTON')
  })

  it('renders with a custom "as" prop', () => {
    render(
      <Button
        id='leonard'
        data-testid='leonard'
        as='div'
      >
        Click me
      </Button>,
    )
    const button = screen.getByTestId('leonard')
    expect(button.tagName).toBe('DIV')
  })

  it('applies class names based on props', () => {
    render(
      <Button
        id='leonard'
        data-testid='leonard'
        outlined
        inverted
        rounded
        loading
        small
        fullwidth
      >
        Click me
      </Button>,
    )
    const button = screen.getByTestId('leonard')
    expect(button).toHaveClass(
      'button',
      'is-outlined',
      'is-inverted',
      'is-rounded',
      'is-loading',
      'is-small',
      'is-fullwidth',
    )
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(
      <Button id='clickable-button' onClick={handleClick}>
        Click me
      </Button>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn()
    render(
      <Button
        id='disabled-button'
        data-testid='leonard'
        onClick={handleClick}
        disabled
      >
        Click me
      </Button>,
    )
    const button = screen.getByTestId('leonard')
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
    expect(button).toBeDisabled()
  })

  it('does not call onClick when loading', () => {
    const handleClick = vi.fn()
    render(
      <Button
        id='loading-button'
        data-testid='leonard'
        onClick={handleClick}
        loading
      >
        Click me
      </Button>,
    )
    const button = screen.getByTestId('leonard')
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
    expect(button).toBeDisabled()
  })

  it('renders left icon when "icon" prop is provided', () => {
    const IconMock = <svg data-testid='left-icon' />
    render(
      <Button
        id='icon-button'
        data-testid='leonard'
        icon={IconMock}
      >
        Click me
      </Button>,
    )
    const button = screen.getByTestId('leonard')
    expect(button).toBeInTheDocument()
    const iconEl = button.querySelector('.icon')
    expect(iconEl).toBeInTheDocument()
    const icon = screen.getByTestId('left-icon')
    expect(icon).toBeInTheDocument()
  })

  it('renders left icon when "icon" prop is provided even with advanced children', () => {
    const IconMock = <svg data-testid='left-icon' />
    render(
      <Button
        id='icon-button'
        data-testid='leonard'
        icon={IconMock}
      >
        <div>Noop</div>
      </Button>,
    )
    const button = screen.getByTestId('leonard')
    expect(button).toBeInTheDocument()
    const iconEl = button.querySelector('.icon')
    expect(iconEl).toBeInTheDocument()
    const icon = screen.getByTestId('left-icon')
    expect(icon).toBeInTheDocument()
  })

  it('renders right icon when "iconRight" prop is provided', () => {
    const IconMock = <svg data-testid='right-icon' />
    render(
      <Button
        id='icon-right-button'
        data-testid='leonard'
        iconRight={IconMock}
      >
        Click me
      </Button>,
    )
    const button = screen.getByTestId('leonard')
    expect(button).toBeInTheDocument()
    const iconEl = button.querySelector('.icon')
    expect(iconEl).toBeInTheDocument()
    const icon = screen.getByTestId('right-icon')
    expect(icon).toBeInTheDocument()
  })

  it('renders both icons when "icon" & "iconRight" prop is provided', () => {
    const IconMock = <svg data-testid='left-icon' />
    const IconRightMock = <svg data-testid='right-icon' />
    render(
      <Button
        id='icon-right-button'
        data-testid='leonard'
        icon={IconMock}
        iconRight={IconRightMock}
      >
        Click me
      </Button>,
    )
    const button = screen.getByTestId('leonard')
    expect(button).toBeInTheDocument()
    const iconEl = button.querySelectorAll('.icon')
    expect(iconEl).toHaveLength(2)
    const iconRight = screen.getByTestId('right-icon')
    expect(iconRight).toBeInTheDocument()
    const iconLeft = screen.getByTestId('left-icon')
    expect(iconLeft).toBeInTheDocument()
  })

  it('translates and assigns the title correctly', () => {
    const mock = vi
      .spyOn(hooks, 'useTranslation')
      .mockReturnValue({
        language: 'en',
        translate: (key: string) => {
          if (key === 'key.message-to-translate') {
            return 'Button Title'
          }
          return key
        },
      })

    render(
      <Button
        id='title-button'
        data-testid='leonard'
        title='key.message-to-translate'
      >
        Click me
      </Button>,
    )

    const button = screen.getByTestId('leonard')
    expect(button).toHaveAttribute('title', 'Button Title')
    expect(mock).toHaveBeenCalled()
  })

  it('wraps string children in a span and translates them', () => {
    render(<Button
      id='text-button'
      data-testid='leonard'
    >Click me</Button>)

    const button = screen.getByTestId('leonard')
    expect(button).toBeInTheDocument()
    const child = button.querySelector('span')
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Click me')
  })

  it('should allow for a translatable text string instead of children props', () => {
    const mock = vi
      .spyOn(hooks, 'useTranslation')
      .mockReturnValue({
        language: 'en',
        translate: (key: string) => {
          if (key === 'key.message-to-translate') {
            return 'Click me'
          }
          return key
        },
      })

    render(<Button
      id='text-button'
      data-testid='leonard'
      text='key.message-to-translate'
    />)

    const button = screen.getByTestId('leonard')
    expect(button).toBeInTheDocument()
    const child = button.querySelector('span')
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Click me')
    expect(mock).toHaveBeenCalled()
  })

  it('renders ReactNode children directly', () => {
    render(
      <Button id='node-button'>
        <div data-testid='child-node'>Child Node</div>
      </Button>,
    )
    const childNode = screen.getByTestId('child-node')
    expect(childNode).toBeInTheDocument()
  })

  it('renders ReactNode children directly alongside icons', () => {
    const Icon = <svg data-testid='icon' />

    render(
      <Button
        id='node-button'
        data-testid='leonard'
        icon={Icon}
      >
        <div data-testid='child-node'>Child Node</div>
      </Button>,
    )

    const button = screen.getByTestId('leonard')
    expect(button).toBeInTheDocument()
    const childNode = screen.getByTestId('child-node')
    expect(childNode).toBeInTheDocument()
    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
    const children = button.childNodes
    expect(children).toHaveLength(2)
  })

  it('applies className from useColorful', () => {
    render(<Button
      id='colorful-button'
      data-testid='leonard'
      primary
    >Click me</Button>)

    const button = screen.getByTestId('leonard')
    expect(button).toHaveClass('is-primary')
  })

  it('applies styles from useColorful', () => {
    render(<Button
      id='colorful-button'
      data-testid='leonard'
      color='#eb2428'
    >Click me</Button>)

    const button = screen.getByTestId('leonard')
    expect(button).toHaveStyle({ backgroundColor: '#eb2428', })
  })

  it('spreads additional props correctly', () => {
    render(
      <Button
        id='additional-props-button'
        data-testid='leonard'
        data-test='test-prop'
      >
        Click me
      </Button>,
    )
    const button = screen.getByTestId('leonard')
    expect(button).toHaveAttribute('data-test', 'test-prop')
  })

  it('sets the "type" attribute to "button" by default', () => {
    render(<Button id='type-button'>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('adds size classes based on AsSize props', () => {
    render(
      <>
        <Button
          id='small-button'
          data-testid='small-button'
          small
        >
          Small
        </Button>
        <Button
          id='medium-button'
          data-testid='medium-button'
          medium
        >
          Medium
        </Button>
        <Button
          id='large-button'
          data-testid='large-button'
          large
        >
          Large
        </Button>
      </>,
    )

    expect(screen.getByTestId('small-button')).toHaveClass('is-small')
    expect(screen.getByTestId('medium-button')).toHaveClass('is-medium')
    expect(screen.getByTestId('large-button')).toHaveClass('is-large')
  })

  it('handles "fullwidth" prop correctly', () => {
    render(
      <Button id='fullwidth-button' fullwidth>
        Fullwidth
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('is-fullwidth')
  })

  it('does not render onClick when not provided', () => {
    render(<Button id='no-onclick-button'>Click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    // No error should occur
  })

  it('handles "static" prop correctly', () => {
    render(
      <Button id='static-button' static>
        Static
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('is-static')
  })

  it('handles "active" prop correctly', () => {
    render(
      <Button id='active-button' active>
        Active
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('is-active')
  })

  it('handles "focused" prop correctly', () => {
    render(
      <Button id='focused-button' focused>
        Focused
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('is-focused')
  })

  it('handles "selected" prop correctly', () => {
    render(
      <Button id='selected-button' selected>
        Selected
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('is-selected')
  })

  it('applies "disabled" class when disabled', () => {
    render(
      <Button id='disabled-class-button' disabled>
        Disabled
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('is-disabled')
  })

  it('does not render icons when not provided', () => {
    render(<Button
      id='no-icon-button'
      data-testid='leonard'
    >No Icon</Button>)

    const button = screen.getByTestId('leonard')
    const icons = button.querySelectorAll('.icon')
    expect(icons.length).toBe(0)
  })

  it('translates children correctly', () => {
    render(<Button id='translate-button'>Translate Me</Button>)
    const button = screen.getByRole('button')
    expect(button.textContent).toContain('Translate Me')
  })
})
