// Copyright © 2024 Navarrotech

// Core
import { fn } from '@storybook/test'

// Typescript
import type { Meta, StoryObj } from '@storybook/react'

// Lib
import { Button } from './Button'

// Default export for Storybook metadata
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs', ],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'link',
          'info',
          'success',
          'warning',
          'danger',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [
          'small',
          'medium',
          'large',
        ],
      },
    },
    fullwidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
    },
    outlined: {
      control: 'boolean',
    },
    static: {
      control: 'boolean',
    },
    icon: {
      control: 'text',
    },
    iconRight: {
      control: 'text',
    },
  },
  args: {
    onClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Button>

// Primary story
export const Primary: Story = {
  args: {
    id: 'primary-button',
    text: 'Primary Button',
    primary: true,
    size: 'is-normal',
  },
}

// Secondary story
export const Secondary: Story = {
  args: {
    id: 'secondary-button',
    text: 'Secondary Button',
    link: true,
    size: 'is-normal',
  },
}

// Large Button story
export const Large: Story = {
  args: {
    id: 'large-button',
    text: 'Large Button',
    success: true,
    large: true,
  },
}

// Small Button story
export const Small: Story = {
  args: {
    id: 'small-button',
    text: 'Small Button',
    warning: true,
    small: true,
  },
}

// Disabled Button story
export const Disabled: Story = {
  args: {
    id: 'disabled-button',
    text: 'Disabled Button',
    danger: true,
    disabled: true,
  },
}

// Fullwidth Button story
export const FullWidth: Story = {
  args: {
    id: 'fullwidth-button',
    text: 'Fullwidth Button',
    info: true,
    fullwidth: true,
  },
}

// Loading Button story
export const Loading: Story = {
  args: {
    id: 'loading-button',
    text: 'Loading Button',
    primary: true,
    loading: true,
  },
}

// Rounded Outlined Button story
export const RoundedOutlined: Story = {
  args: {
    id: 'rounded-outlined-button',
    text: 'Rounded Outlined Button',
    link: true,
    rounded: true,
    outlined: true,
  },
}

// Custom Children Button story
export const CustomChildren: Story = {
  args: {
    id: 'custom-children-button',
    children: (
      <div>
        <strong>Custom</strong> <em>Children</em>
      </div>
    ),
    color: 'is-primary',
  },
}
