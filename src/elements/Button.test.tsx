// // Copyright © 2024 Navarrotech

// // Core
// import React from 'react'
// import '@testing-library/jest-dom'
// import { render, fireEvent, screen } from '@testing-library/react'
// import { describe, expect, it, vi } from 'vitest'

// // Library to test
// import { Button } from '@/elements/Button'

// // /////////////////// //
// //        Mocks        //
// // /////////////////// //

// // Mock useTranslation
// vi.mock('@/utility/hooks', () => ({
//   useTranslation: () => ({
//     translate: (text: string) => text,
//   }),
// }))

// // /////////////////// //
// //        Tests        //
// // /////////////////// //

// describe('Button Component', () => {
//   it('renders correctly with required props', () => {
//     render(<Button id='test-button'>Click me</Button>)
//     const button = screen.getByRole('button', { name: /Click me/i, })
//     expect(button).toBeInTheDocument()
//     expect(button).toHaveAttribute('id', 'test-button')
//   })

//   it('assigns the correct id', () => {
//     render(<Button id='unique-id'>Click me</Button>)
//     const button = screen.getByRole('button')
//     expect(button).toHaveAttribute('id', 'unique-id')
//   })

//   it('renders with a custom "as" prop', () => {
//     render(
//       <Button id='test-div' as='div'>
//         Click me
//       </Button>,
//     )
//     const divElement = screen.getByText('Click me')
//     expect(divElement.tagName).toBe('DIV')
//   })

//   it('applies class names based on props', () => {
//     render(
//       <Button
//         id='styled-button'
//         outlined
//         inverted
//         rounded
//         loading
//         small
//         fullwidth
//       >
//         Click me
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     expect(button).toHaveClass(
//       'button',
//       'is-outlined',
//       'is-inverted',
//       'is-rounded',
//       'is-loading',
//       'is-small',
//       'is-fullwidth',
//     )
//   })

//   it('calls onClick handler when clicked', () => {
//     const handleClick = vi.fn()
//     render(
//       <Button id='clickable-button' onClick={handleClick}>
//         Click me
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     fireEvent.click(button)
//     expect(handleClick).toHaveBeenCalledTimes(1)
//   })

//   it('does not call onClick when disabled', () => {
//     const handleClick = vi.fn()
//     render(
//       <Button id='disabled-button' onClick={handleClick} disabled>
//         Click me
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     fireEvent.click(button)
//     expect(handleClick).not.toHaveBeenCalled()
//     expect(button).toBeDisabled()
//   })

//   it('does not call onClick when loading', () => {
//     const handleClick = vi.fn()
//     render(
//       <Button id='loading-button' onClick={handleClick} loading>
//         Click me
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     fireEvent.click(button)
//     expect(handleClick).not.toHaveBeenCalled()
//     expect(button).toBeDisabled()
//   })

//   it('renders left icon when "icon" prop is provided', () => {
//     const IconMock = <svg data-testid='left-icon' />
//     render(
//       <Button id='icon-button' icon={IconMock}>
//         Click me
//       </Button>,
//     )
//     const icon = screen.getByTestId('left-icon')
//     expect(icon).toBeInTheDocument()
//   })

//   it('renders right icon when "iconRight" prop is provided', () => {
//     const IconMock = <svg data-testid='right-icon' />
//     render(
//       <Button id='icon-right-button' iconRight={IconMock}>
//         Click me
//       </Button>,
//     )
//     const icon = screen.getByTestId('right-icon')
//     expect(icon).toBeInTheDocument()
//   })

//   it('translates and assigns the title correctly', () => {
//     render(
//       <Button id='title-button' title='Button Title'>
//         Click me
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     expect(button).toHaveAttribute('title', 'Button Title')
//   })

//   it('wraps string children in a span and translates them', () => {
//     render(<Button id='text-button'>Click me</Button>)
//     const span = screen.getByText('Click me')
//     expect(span.tagName).toBe('SPAN')
//   })

//   it('renders ReactNode children directly', () => {
//     render(
//       <Button id='node-button'>
//         <div data-testid='child-node'>Child Node</div>
//       </Button>,
//     )
//     const childNode = screen.getByTestId('child-node')
//     expect(childNode).toBeInTheDocument()
//   })

//   it('applies className from useColorful', () => {
//     render(<Button id='colorful-button' primary>Click me</Button>)
//     const button = screen.getByRole('button')
//     expect(button).toHaveClass('is-primary')
//   })

//   it('applies styles from useColorful', () => {
//     render(<Button id='colorful-button' color='#eb2428'>Click me</Button>)
//     const button = screen.getByRole('button')
//     expect(button).toHaveStyle({ backgroundColor: '#eb2428', })
//   })

//   it('spreads additional props correctly', () => {
//     render(
//       <Button id='additional-props-button' data-test='test-prop'>
//         Click me
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     expect(button).toHaveAttribute('data-test', 'test-prop')
//   })

//   it('sets the "type" attribute to "button" by default', () => {
//     render(<Button id='type-button'>Click me</Button>)
//     const button = screen.getByRole('button')
//     expect(button).toHaveAttribute('type', 'button')
//   })

//   it('adds size classes based on AsSize props', () => {
//     render(
//       <>
//         <Button id='small-button' small>
//           Small
//         </Button>
//         <Button id='medium-button' medium>
//           Medium
//         </Button>
//         <Button id='large-button' large>
//           Large
//         </Button>
//       </>,
//     )
//     expect(screen.getByText('Small')).toHaveClass('is-small')
//     expect(screen.getByText('Medium')).toHaveClass('is-medium')
//     expect(screen.getByText('Large')).toHaveClass('is-large')
//   })

//   it('handles "fullwidth" prop correctly', () => {
//     render(
//       <Button id='fullwidth-button' fullwidth>
//         Fullwidth
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     expect(button).toHaveClass('is-fullwidth')
//   })

//   it('does not render onClick when not provided', () => {
//     render(<Button id='no-onclick-button'>Click me</Button>)
//     const button = screen.getByRole('button')
//     fireEvent.click(button)
//     // No error should occur
//   })

//   it('handles "static" prop correctly', () => {
//     render(
//       <Button id='static-button' static>
//         Static
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     expect(button).toHaveClass('is-static')
//   })

//   it('handles "active" prop correctly', () => {
//     render(
//       <Button id='active-button' active>
//         Active
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     expect(button).toHaveClass('is-active')
//   })

//   it('handles "focused" prop correctly', () => {
//     render(
//       <Button id='focused-button' focused>
//         Focused
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     expect(button).toHaveClass('is-focused')
//   })

//   it('handles "selected" prop correctly', () => {
//     render(
//       <Button id='selected-button' selected>
//         Selected
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     expect(button).toHaveClass('is-selected')
//   })

//   it('applies "disabled" class when disabled', () => {
//     render(
//       <Button id='disabled-class-button' disabled>
//         Disabled
//       </Button>,
//     )
//     const button = screen.getByRole('button')
//     expect(button).toHaveClass('is-disabled')
//   })

//   it('does not render icons when not provided', () => {
//     render(<Button id='no-icon-button'>No Icon</Button>)
//     const icons = screen.queryAllByTestId(/icon/)
//     expect(icons.length).toBe(0)
//   })

//   it('renders both icons when both "icon" and "iconRight" are provided', () => {
//     const LeftIcon = <svg data-testid='left-icon' />
//     const RightIcon = <svg data-testid='right-icon' />
//     render(
//       <Button id='both-icons-button' icon={LeftIcon} iconRight={RightIcon}>
//         Click me
//       </Button>,
//     )
//     expect(screen.getByTestId('left-icon')).toBeInTheDocument()
//     expect(screen.getByTestId('right-icon')).toBeInTheDocument()
//   })

//   it('translates children correctly', () => {
//     render(<Button id='translate-button'>Translate Me</Button>)
//     const button = screen.getByRole('button')
//     expect(button.textContent).toContain('Translate Me')
//   })
// })
