// Copyright © 2024 Navarrotech


// Core
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'
import { describe, expect, it } from 'vitest'

// Typescript to test
import type { ColorfulProps } from './color'

// Library to test
import { useColorful } from './color'

describe('useColorful', () => {
  // /////////////////// //
  //        Basic        //
  // /////////////////// //

  it('should apply is-primary when given a primary prop', () => {
    const props: ColorfulProps = {
      primary: true,
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({ className: 'is-primary', style: {}, })
  })

  it('should apply is-secondary when given a secondary prop', () => {
    const props: ColorfulProps = {
      secondary: true,
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({ className: 'is-secondary', style: {}, })
  })

  it('should apply is-warning when given a warning prop', () => {
    const props: ColorfulProps = {
      warning: true,
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({ className: 'is-warning', style: {}, })
  })

  it('should apply is-danger when given a danger prop', () => {
    const props: ColorfulProps = {
      danger: true,
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({ className: 'is-danger', style: {}, })
  })

  it('should apply is-success when given a success prop', () => {
    const props: ColorfulProps = {
      success: true,
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({ className: 'is-success', style: {}, })
  })

  it('should apply is-info when given a info prop', () => {
    const props: ColorfulProps = {
      info: true,
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({ className: 'is-info', style: {}, })
  })

  it('should apply is-link when given a link prop', () => {
    const props: ColorfulProps = {
      link: true,
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({ className: 'is-link', style: {}, })
  })

  it('should apply is-white when given a white prop', () => {
    const props: ColorfulProps = {
      white: true,
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({ className: 'is-white', style: {}, })
  })

  it('should apply is-black when given a black prop', () => {
    const props: ColorfulProps = {
      black: true,
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({ className: 'is-black', style: {}, })
  })

  it('should apply is-light when given a light prop', () => {
    const props: ColorfulProps = {
      light: true,
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({ className: 'is-light', style: {}, })
  })

  it('should apply is-dark when given a dark prop', () => {
    const props: ColorfulProps = {
      dark: true,
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({ className: 'is-dark', style: {}, })
  })

  it('should not apply a custom style color when given a bulma color', () => {
    // @ts-ignore - We're testing a specific case
    const props: ColorfulProps = {
      primary: true,
      color: '#eb2428',
    }
    const { result, } = renderHook(() => useColorful(props))
    expect(result.current).toEqual({
      className: 'is-primary',
      style: {},
    })
  })

  it('adds multiple Bulma color classes', () => {
    const props: ColorfulProps = { primary: true, light: true, }
    const result = useColorful(props)

    expect(result.className).toContain('is-primary')
    expect(result.className).toContain('is-light')
    expect(result.style).toEqual({})
  })

  it('sets backgroundColor for custom hex colors', () => {
    const props: ColorfulProps = { color: '#ff5733', }
    const result = useColorful(props)

    expect(result.className).not.toContain('is-')
    expect(result.style.backgroundColor).toBe('#ff5733')
  })

  it('sets backgroundColor for rgb and hsl colors', () => {
    const rgbProps: ColorfulProps = { color: 'rgb(255, 87, 51)', }
    const hslProps: ColorfulProps = { color: 'hsl(360, 100%, 50%)', }

    const rgbResult = useColorful(rgbProps)
    const hslResult = useColorful(hslProps)

    expect(rgbResult.style.backgroundColor).toBe('rgb(255, 87, 51)')
    expect(hslResult.style.backgroundColor).toBe('hsl(360, 100%, 50%)')
  })

  it('respects custom user-defined colors', () => {
    const props: ColorfulProps = { color: 'silver', }
    const result = useColorful(props)

    expect(result.className).toContain('is-silver')
    expect(result.style).toEqual({})
  })

  it('merges existing classNames with computed values', () => {
    const props: ColorfulProps = {
      className: 'existing-class',
      style: {
        border: '1px solid black',
      },
      primary: true,
    }
    const result = useColorful(props)

    expect(result.className).toContain('existing-class')
    expect(result.className).toContain('is-primary')
    expect(result.style).toMatchObject({
      border: '1px solid black',
    })
  })

  it('merges existing styles with computed values', () => {
    const props: ColorfulProps = {
      className: 'existing-class',
      style: {
        border: '1px solid black',
      },
      color: '#ff5733',
    }
    const result = useColorful(props)

    expect(result.className).toContain('existing-class')
    expect(result.style).toMatchObject({
      border: '1px solid black',
      backgroundColor: '#ff5733',
    })
  })

  it('handles no color props gracefully', () => {
    const props: ColorfulProps = {}
    const result = useColorful(props)

    expect(result.className).toBe('')
    expect(result.style).toEqual({})
  })
})
